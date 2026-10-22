import React from 'react';

export default function SubViewWebhooksSecrets() {
  return (
    <>
          <div id="subViewDevWebhooks" hidden>
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
              <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
                <div>
                  <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">⚡ Webhook Endpoints &amp; Cryptographic Secrets</div>
                  <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Configure where real-time signed payment status events are dispatched via
                    HMAC-SHA256.</div>
                </div>
              </div>
    
              <div style={{"display":"flex","flexDirection":"column","gap":"1.25rem"}}>
                <div>
                  <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Webhook
                    Destination URL</label>
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingWebhookUrl" type="text" placeholder="https://yourstore.com/api/payment/webhook"
                    style={{"width":"100%"}} />
                  <span style={{"fontSize":"0.72rem","color":"var(--text-muted)","display":"block","marginTop":"0.25rem"}}>Server
                    endpoint to receive instant signed transaction status notifications.</span>
                </div>
    
                <div>
                  <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Webhook Secret
                    (HMAC-SHA256 Signing)</label>
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingWebhookSecret" type="text" readOnly
                    style={{"width":"100%","color":"#94a3b8","fontFamily":"monospace"}} />
                </div>
    
                <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"width":"auto","alignSelf":"flex-start"}}
                  onClick={(e) => { try { (window.saveMerchantBrandingAndToggles()); } catch(err) { console.error(err); } }}>
                  💾 Save Webhook Settings
                </button>
              </div>
            </div>
          </div>
    </>
  );
}
