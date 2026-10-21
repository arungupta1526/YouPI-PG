import { verifyHmac } from '@youpi/common';

export class YoupiPaymentClient {
  /**
   * @param {{
   *   apiUrl?: string,
   *   merchantId?: string,
   *   webhookSecret?: string
   * }} options
   */
  constructor(options = {}) {
    this.apiUrl = (options.apiUrl || process.env.BASE_PAYMENT_API_URL || 'http://localhost:6100').replace(/\/+$/, '');
    this.merchantId = options.merchantId || null;
    this.apiKey = options.apiKey || options.merchantKey || null;
    this.webhookSecret = options.webhookSecret || this.apiKey || null;
  }

  /**
   * Creates a new payment session and receives checkout URL for redirection.
   * @param {{
   *   orderId: string,
   *   amount: string | number,
   *   currency?: string,
   *   returnUrl?: string,
   *   customer?: { phoneNumber: string, fullName?: string },
   *   metadata?: Record<string, any>,
   *   idempotencyKey?: string
   * }} params
   * @returns {Promise<{
   *   paymentId: string,
   *   orderId: string,
   *   amount: string,
   *   amountPaise: string,
   *   currency: string,
   *   status: string,
   *   checkoutUrl: string
   * }>}
   */
  async createPayment(params) {
    const url = `${this.apiUrl}/api/v1/payments`;
    const headers = {
      'Content-Type': 'application/json'
    };

    if (this.merchantId) {
      headers['X-Merchant-Id'] = this.merchantId;
    }
    const merchantKey = this.apiKey || this.webhookSecret;
    if (merchantKey) {
      headers['X-Merchant-Key'] = merchantKey;
    }
    if (params.idempotencyKey) {
      headers['Idempotency-Key'] = params.idempotencyKey;
    }

    const payload = {
      orderId: params.orderId,
      amount: params.amount,
      currency: params.currency || 'INR',
      returnUrl: params.returnUrl,
      customer: params.customer,
      metadata: params.metadata
    };
    if (params.autoActivate === true) {
      payload.autoActivate = true;
    }

    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Create payment failed [HTTP ${res.status}]: ${err}`);
    }

    return await res.json();
  }

  /**
   * Queries payment status and details.
   * @param {string} paymentId
   * @returns {Promise<{
   *   paymentId: string,
   *   orderId: string,
   *   amount: string,
   *   amountPaise: string,
   *   currency: string,
   *   status: 'SUCCESS' | 'FAILED' | 'EXPIRED' | 'CANCELLED' | string,
   *   method: string,
   *   completedAt?: string,
   *   returnUrl?: string,
   *   metadata?: Record<string, any>
   * }>}
   */
  async getPayment(paymentId) {
    const url = `${this.apiUrl}/api/v1/payments/${paymentId}`;
    const headers = {};
    // Present the merchant key or secret so the gateway returns the merchant-private fields
    // (metadata, verification internals, returnUrl). Without it the caller gets the
    // redacted public view, which is all an unauthenticated holder of a payment id sees.
    const merchantKey = this.apiKey || this.webhookSecret;
    if (merchantKey) {
      headers['X-Merchant-Key'] = merchantKey;
    }

    const res = await fetch(url, { headers });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Get payment failed [HTTP ${res.status}]: ${err}`);
    }

    return await res.json();
  }

  /**
   * Cryptographically verifies an incoming webhook payload using HMAC-SHA256.
   * @param {string} rawPayloadString Raw request body text (unparsed)
   * @param {string} signatureHeader Value of 'X-Gateway-Signature' header (e.g. 'sha256=...')
   * @param {string} [customSecret] Optional override secret
   * @param {string} [timestampHeader] Value of 'X-Gateway-Timestamp' header
   * @param {{ toleranceSeconds?: number }} [options] Verification options
   * @returns {any} Validated parsed webhook event payload
   */
  verifyWebhook(rawPayloadString, signatureHeader, customSecret = null, timestampHeader = null, options = {}) {
    const secret = customSecret || this.webhookSecret;
    if (!secret) {
      throw new Error('Webhook verification failed: webhookSecret is not configured.');
    }

    if (!signatureHeader || !signatureHeader.startsWith('sha256=')) {
      throw new Error('Webhook verification failed: invalid signature header format. Expected sha256=...');
    }

    const actualSignature = signatureHeader.replace('sha256=', '');

    if (timestampHeader) {
      let ts = Number(timestampHeader);
      if (!isNaN(ts) && ts < 1e11) {
        ts = ts * 1000;
      }
      const now = Date.now();
      const tolerance = (options.toleranceSeconds || 300) * 1000;
      if (isNaN(ts) || Math.abs(now - ts) > tolerance) {
        throw new Error('Webhook verification failed: timestamp drift exceeded validity window.');
      }
      const isValid = verifyHmac(`${timestampHeader}.${rawPayloadString}`, secret, actualSignature);
      if (!isValid) {
        throw new Error('Webhook verification failed: signature mismatch.');
      }
    } else {
      const isValid = verifyHmac(rawPayloadString, secret, actualSignature);
      if (!isValid) {
        throw new Error('Webhook verification failed: signature mismatch.');
      }
    }

    return JSON.parse(rawPayloadString);
  }
}
