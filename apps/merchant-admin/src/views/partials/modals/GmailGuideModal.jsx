import React from 'react';

export default function GmailGuideModal() {
  return (
    <>
      <div id="gmailGuideModal" className="modal-overlay fixed inset-0 [&:not([hidden])]:flex items-center justify-center p-4 z-[10000] backdrop-blur-sm bg-black/75" hidden>
        <div className="modal-box max-w-lg w-full rounded-2xl p-7 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl" style={{"maxWidth":"720px","maxHeight":"85vh","overflowY":"auto"}}>
          <div
            style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"1rem","borderBottom":"1px solid #1e293b","paddingBottom":"0.75rem"}}>
            <h3 style={{"color":"#fff","margin":"0","fontSize":"1.15rem"}}>📖 Official Gmail API &amp; Refresh Token Guide</h3>
            <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.25rem 0.5rem"}} onClick={(e) => { try { (window.closeGmailGuideModal()); } catch(err) { console.error(err); } }}>✕</button>
          </div>
          <div style={{"fontSize":"0.82rem","color":"#cbd5e1","lineHeight":"1.6"}}>
    
            <div
              style={{"background":"#0f172a","border":"1px solid #1e293b","borderRadius":"0.5rem","padding":"0.75rem 1rem","marginBottom":"1rem"}}>
              <strong style={{"color":"#38bdf8","display":"block","fontSize":"0.9rem","marginBottom":"0.25rem"}}>⚡ How to get your
                Google Refresh Token (Choose either method):</strong>
              <span style={{"color":"#94a3b8","fontSize":"0.78rem"}}>Both methods work 100% reliably. Method 1 is automated
                1-click; Method 2 uses Google's official OAuth Playground.</span>
            </div>
    
            <div
              style={{"border":"1px solid #334155","borderRadius":"0.5rem","padding":"0.85rem","marginBottom":"1rem","background":"#0b1120"}}>
              <h4 style={{"color":"#34d399","margin":"0 0 0.5rem 0","fontSize":"0.95rem"}}>Method 1: Direct 1-Click Authorize
                (Automatic)</h4>
              <ol style={{"paddingLeft":"1.25rem","display":"flex","flexDirection":"column","gap":"0.35rem","margin":"0"}}>
                <li>In <strong>Google Cloud Console</strong> &gt; <em>Credentials</em>, add this exact redirect URI:
                  <code
                    style={{"color":"#38bdf8","display":"block","margin":"0.2rem 0","background":"#020617","padding":"2px 6px","borderRadius":"4px"}}
                    id="guideProdUri">https://your-domain.com/oauth/callback</code>
                </li>
                <li>Under <em>OAuth consent screen</em> &gt; <em>Test users</em>, ensure your personal Gmail address is
                  added.</li>
                <li>In YOUPI Admin Panel, enter your <strong>Client ID</strong> and <strong>Client Secret</strong>, then
                  click <strong>💾 Save Credentials</strong>.</li>
                <li>Click the <strong>🔗 Authorize OAuth</strong> button. A Google sign-in window will open.</li>
                <li>Log into your Gmail account, grant read-only permissions, and complete consent.</li>
                <li>YOUPI will automatically capture and save the offline refresh token into your database!</li>
              </ol>
            </div>
    
            <div
              style={{"border":"1px solid #334155","borderRadius":"0.5rem","padding":"0.85rem","marginBottom":"1rem","background":"#0b1120"}}>
              <h4 style={{"color":"#38bdf8","margin":"0 0 0.5rem 0","fontSize":"0.95rem"}}>Method 2: Google OAuth 2.0 Playground
                (Manual — 60 Seconds)</h4>
              <ol style={{"paddingLeft":"1.25rem","display":"flex","flexDirection":"column","gap":"0.35rem","margin":"0"}}>
                <li>Open <a href="https://developers.google.com/oauthplayground" target="_blank"
                    style={{"color":"#38bdf8","textDecoration":"underline"}}>Google OAuth 2.0 Playground
                    (developers.google.com/oauthplayground)</a> in a new tab.</li>
                <li>Click the <strong>⚙️ Gear Icon (OAuth 2.0 configuration)</strong> at the top right of the page.</li>
                <li>Check the box: <strong>"Use your own OAuth credentials"</strong>.</li>
                <li>Paste your <strong>OAuth Client ID</strong> and <strong>OAuth Client Secret</strong> into the fields
                  that appear.</li>
                <li>In the main left pane under <strong>Step 1: Select &amp; authorize APIs</strong>:
                  <div style={{"margin":"0.25rem 0"}}>Scroll to <strong>Gmail API v1</strong> and check
                    <code>https://www.googleapis.com/auth/gmail.readOnly</code> (or type it in the text box).
                  </div>
                </li>
                <li>Click the blue button: <strong>Authorize APIs</strong>. Sign in to your Google account and click
                  <strong>Allow</strong>.
                </li>
                <li>Under <strong>Step 2: Exchange authorization code for tokens</strong>:
                  <div style={{"margin":"0.25rem 0"}}>Click the blue button: <strong>Exchange authorization code for
                      tokens</strong>.</div>
                </li>
                <li>Look at the response pane on the right: copy the <strong>Refresh token</strong> (starts with
                  <code>1//...</code>).
                </li>
                <li>Paste the refresh token into the <strong>Google Refresh Token (Offline Access)</strong> box in YOUPI and
                  click <strong>💾 Save Credentials</strong>!</li>
              </ol>
            </div>
    
            <div
              style={{"background":"rgba(245,158,11,0.1)","border":"1px solid #d97706","borderRadius":"0.5rem","padding":"0.75rem","fontSize":"0.75rem","color":"#fde68a"}}>
              <strong>⚠️ Google Cloud Console Setup Note:</strong><br />
              Make sure the <strong>Gmail API</strong> is enabled in <em>APIs &amp; Services &gt; Library</em> and the OAuth
              consent screen publishing status is set to "Testing" with your Gmail added as a Test User.
            </div>
          </div>
          <div style={{"marginTop":"1.25rem","textAlign":"right"}}>
            <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.closeGmailGuideModal()); } catch(err) { console.error(err); } }}>Got It</button>
          </div>
        </div>
      </div>
    </>
  );
}
