import React from 'react';
import SubViewPaymentSimulator from './developer-hub/SubViewPaymentSimulator.jsx';
import SubViewSystemSupervisor from './developer-hub/SubViewSystemSupervisor.jsx';
import SubViewCloudflareTunnel from './developer-hub/SubViewCloudflareTunnel.jsx';
import SubViewWebhooksSecrets from './developer-hub/SubViewWebhooksSecrets.jsx';
import SubViewAndroidGateway from './developer-hub/SubViewAndroidGateway.jsx';
import SubViewGmailWhatsAppProtocols from './developer-hub/SubViewGmailWhatsAppProtocols.jsx';

export default function SectionDeveloperHub() {
  return (
    <>
      {/* SECTION 3: DEVELOPER & INFRASTRUCTURE HUB */}
      <div id="sectionDeveloperHub" hidden>
        <SubViewPaymentSimulator />
        <SubViewSystemSupervisor />
        <SubViewCloudflareTunnel />
        <SubViewWebhooksSecrets />
        <SubViewAndroidGateway />
        <SubViewGmailWhatsAppProtocols />
      </div>
    </>
  );
}
