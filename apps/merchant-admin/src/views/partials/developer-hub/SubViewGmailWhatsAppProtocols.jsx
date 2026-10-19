import React from 'react';

export default function SubViewGmailWhatsAppProtocols() {
  return (
    <>
          <div id="subViewDevProtocols" hidden>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/*  Gmail Direct API  */}
              <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" id="gmailObserverCard">
                <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
                  <div>
                    <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">📧 Google Account & Gmail Direct API</div>
                    <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Official Google OAuth 2.0 automated observation for real-time UPI credit
                      notifications.</div>
                  </div>
                  <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" id="gmailConfigBadge2">NOT CONFIGURED</span>
                </div>
    
                {/*  Hero Action Box: Automated One-Click Google Connect  */}
                <div id="gmailConnectHeroBox"
                  style={{"background":"linear-gradient(135deg, rgba(37,99,235,0.1), rgba(15,23,42,0.6))","border":"1px solid rgba(59,130,246,0.3)","borderRadius":"0.75rem","padding":"1.25rem","marginBottom":"1.25rem","display":"flex","flexDirection":"column","gap":"0.75rem"}}>
                  <div
                    style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-start","flexWrap":"wrap","gap":"0.75rem"}}>
                    <div style={{"flex":"1","minWidth":"260px"}}>
                      <div style={{"display":"flex","alignItems":"center","gap":"0.5rem","marginBottom":"0.25rem"}}>
                        <span id="gmailHeroStatusDot"
                          style={{"width":"10px","height":"10px","borderRadius":"50%","background":"#ef4444","display":"inline-block"}}></span>
                        <strong id="gmailHeroStatusTitle" style={{"fontSize":"0.95rem","color":"#fff"}}>Google Account
                          Disconnected</strong>
                      </div>
                      <div id="gmailHeroStatusDesc" style={{"fontSize":"0.82rem","color":"var(--text-muted)","lineHeight":"1.4"}}>
                        Connect your bank-registered Google account with one click. When you click authorize, YouPI PG
                        handles the full OAuth flow, acquires persistent offline credentials, and activates 1-second UPI
                        credit polling.
                      </div>
                    </div>
    
                    {/*  Primary Google Action Button  */}
                    <div style={{"display":"flex","gap":"0.5rem","alignItems":"center"}}>
                      <button type="button" id="btnGooglePrimaryAuth" className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={(e) => { try { (window.startAutomatedGoogleAuth()); } catch(err) { console.error(err); } }}
                        style={{"display":"inline-flex","alignItems":"center","gap":"0.6rem","padding":"0.65rem 1.25rem","fontSize":"0.9rem","fontWeight":"700","background":"#2563eb","color":"#fff","border":"none","borderRadius":"0.5rem","cursor":"pointer","boxShadow":"0 4px 14px rgba(37,99,235,0.4)"}}>
                        <svg width="18" height="18" viewBox="0 0 24 24">
                          <path fill="#ffffff"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#ffffff"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#ffffff"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                          <path fill="#ffffff"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                        </svg>
                        <span id="btnGooglePrimaryAuthLabel">Connect with Google (One-Click)</span>
                      </button>
                      <button type="button" id="btnGoogleDisconnect" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={(e) => { try { (window.disconnectGmailAccount()); } catch(err) { console.error(err); } }}
                        style={{"display":"none","fontSize":"0.8rem","padding":"0.65rem 0.9rem","color":"#f87171","borderColor":"#7f1d1d"}}>
                        ❌ Disconnect
                      </button>
                    </div>
                  </div>
    
                  {/*  In-progress banner when popup is active  */}
                  <div id="gmailAuthInProgressBanner"
                    style={{"display":"none","background":"rgba(59,130,246,0.15)","border":"1px solid #3b82f6","borderRadius":"0.4rem","padding":"0.6rem 0.85rem","fontSize":"0.82rem","color":"#93c5fd","alignItems":"center","gap":"0.5rem"}}>
                    <span className="spinner"
                      style={{"width":"14px","height":"14px","border":"2px solid #3b82f6","borderTopColor":"transparent","borderRadius":"50%","display":"inline-block","animation":"spin 1s linear infinite"}}></span>
                    <span>Google Authorization Window Active. Select your account and grant permissions to complete
                      automatic setup...</span>
                  </div>
                </div>
    
                {/*  Live Connection Status Details  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3.5 mb-4 rounded-lg border border-slate-800 bg-[#090d16] text-xs">
                  <div><span style={{"color":"#64748b"}}>OAuth Status:</span> <strong id="gmailOAuthStatusText"
                      style={{"color":"#f87171"}}>DISCONNECTED</strong></div>
                  <div><span style={{"color":"#64748b"}}>Token Status:</span> <strong id="gmailTokenStatusText"
                      style={{"color":"#64748b"}}>NOT CONFIGURED</strong></div>
                  <div style={{"gridColumn":"span 2","display":"flex","alignItems":"center","gap":"0.4rem"}}>
                    <span style={{"color":"#64748b"}}>Connected Account:</span>
                    <strong id="gmailConnectedAccountText" style={{"color":"#38bdf8","fontFamily":"monospace"}}>No account
                      authorized</strong>
                  </div>
                  <div><span style={{"color":"#64748b"}}>Last Successful Poll:</span> <span id="gmailLastPollText"
                      style={{"color":"#94a3b8"}}>Never</span></div>
                  <div><span style={{"color":"#64748b"}}>Observer Pipeline:</span> <span id="gmailLastSentText"
                      style={{"color":"#94a3b8"}}>Standby</span></div>
                </div>
    
                {/*  Secondary Actions  */}
                <div style={{"display":"flex","gap":"0.5rem","flexWrap":"wrap","marginBottom":"0.75rem"}}>
                  <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.testGmailConnection()); } catch(err) { console.error(err); } }}>🔑 Test Live
                    Connection</button>
                  <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.startAutomatedGoogleAuth()); } catch(err) { console.error(err); } }}>🔄 Re-authorize
                    Account</button>
                  <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.openGmailGuideModal()); } catch(err) { console.error(err); } }}>📖 Setup Guide</button>
                </div>
    
                <div id="gmailTestResultBox"
                  style={{"display":"none","padding":"0.85rem","borderRadius":"0.5rem","fontSize":"0.82rem","marginBottom":"1rem"}}></div>
    
                {/*  Advanced Collapsible Configuration  */}
                <details
                  style={{"background":"rgba(15,23,42,0.4)","border":"1px solid #1e293b","borderRadius":"0.5rem","padding":"0.6rem 0.85rem"}}>
                  <summary style={{"cursor":"pointer","fontSize":"0.78rem","fontWeight":"700","color":"#94a3b8","userSelect":"none"}}>
                    ⚙️ Advanced OAuth Credentials &amp; Manual Override (Optional)
                  </summary>
                  <div style={{"display":"flex","flexDirection":"column","gap":"0.75rem","marginTop":"0.85rem"}}>
                    <div>
                      <label
                        style={{"display":"block","fontSize":"0.75rem","fontWeight":"700","color":"var(--text-muted)","marginBottom":"0.2rem"}}>Google
                        OAuth Client ID</label>
                      <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="gmailClientIdInput" placeholder="your-client-id.apps.googleusercontent.com"
                        style={{"width":"100%","fontFamily":"monospace","fontSize":"0.8rem"}} />
                    </div>
                    <div>
                      <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.2rem"}}>
                        <label style={{"fontSize":"0.75rem","fontWeight":"700","color":"var(--text-muted)"}}>Google OAuth Client
                          Secret</label>
                        <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"fontSize":"0.68rem","padding":"0.1rem 0.4rem"}}
                          onClick={(e) => { try { (window.toggleSecretVisibility()); } catch(err) { console.error(err); } }}>👁️ Show/Hide</button>
                      </div>
                      <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="password" id="gmailClientSecretInput" placeholder="your-google-client-secret"
                        style={{"width":"100%","fontFamily":"monospace","fontSize":"0.8rem"}} />
                    </div>
                    <div>
                      <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.2rem"}}>
                        <label style={{"fontSize":"0.75rem","fontWeight":"700","color":"var(--text-muted)"}}>Exact Authorized
                          Redirect URI</label>
                        <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"fontSize":"0.68rem","padding":"0.1rem 0.4rem"}}
                          onClick={(e) => { try { (window.copyGmailRedirectUri()); } catch(err) { console.error(err); } }}>📋 Copy</button>
                      </div>
                      <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="gmailRedirectUriInput" readOnly
                        style={{"width":"100%","fontFamily":"monospace","fontSize":"0.8rem","background":"#020617","color":"#38bdf8"}} />
                    </div>
                    <div>
                      <label
                        style={{"display":"block","fontSize":"0.75rem","fontWeight":"700","color":"var(--text-muted)","marginBottom":"0.2rem"}}>Google
                        Refresh Token</label>
                      <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="password" id="gmailRefreshTokenInput" placeholder="your-google-refresh-token"
                        style={{"width":"100%","fontFamily":"monospace","fontSize":"0.8rem"}} />
                    </div>
                    <div>
                      <button type="button" className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"fontSize":"0.8rem","padding":"0.4rem 0.8rem"}}
                        onClick={(e) => { try { (window.saveGmailCredentials()); } catch(err) { console.error(err); } }}>💾 Save Manual Credentials</button>
                    </div>
                  </div>
                </details>
              </div>
    
              {/*  WhatsApp Berry Protocol  */}
              <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
                <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
                  <div>
                    <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">💬 WhatsApp Berry Protocol</div>
                    <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Automated customer login OTP delivery at checkout.</div>
                  </div>
                  <span className="badge badge-warning inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20" id="waHeaderBadge">CHECKING...</span>
                </div>
    
                <div
                  style={{"background":"#090d16","border":"1px solid var(--border)","borderRadius":"0.75rem","padding":"1rem","marginBottom":"1rem"}}>
                  <div id="waLiveStatusDisplay">
                    <div style={{"display":"flex","alignItems":"center","gap":"0.5rem","marginBottom":"0.35rem"}}>
                      <span id="waDotIndicator" style={{"color":"#fbbf24"}}>●</span>
                      <strong id="waStateTitle" style={{"color":"#fff"}}>Pairing Standby</strong>
                    </div>
                    <div id="waPhoneDisplay" style={{"fontSize":"0.85rem","color":"#94a3b8","fontFamily":"monospace"}}>
                      Phone Number: Not Linked
                    </div>
                  </div>
                </div>
    
                <div id="waQrBox"
                  style={{"background":"#ffffff","borderRadius":"0.75rem","padding":"1rem","display":"inline-block","margin":"0 auto 1rem auto","textAlign":"center"}}>
                  <div id="waQrPlaceholder"
                    style={{"width":"240px","height":"240px","display":"flex","alignItems":"center","justifyContent":"center","color":"#0f172a","fontSize":"0.85rem","textAlign":"center","padding":"1rem"}}>
                    Click "Connect / Refresh QR" to pair device
                  </div>
                  <img id="waQrImg" src="" alt="WhatsApp Pairing QR" style={{"width":"240px","height":"240px","display":"none","imageRendering":"pixelated"}} onError={(e) => { try { e.currentTarget.style.display='none'; const ph = document.getElementById('waQrPlaceholder'); if(ph){ ph.style.display='flex'; ph.innerText='QR preview unavailable. Click Refresh QR.'; } } catch(err) { console.error(err); } }} />
                </div>
    
                <div style={{"display":"flex","gap":"0.5rem","flexWrap":"wrap"}}>
                  <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" id="btnWaConnect" onClick={(e) => { try { (window.reconnectWhatsApp()); } catch(err) { console.error(err); } }}>⚡ Connect / Refresh
                    QR</button>
                  <button className="btn btn-danger inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" id="btnWaDisconnect" onClick={(e) => { try { (window.disconnectWhatsApp()); } catch(err) { console.error(err); } }}
                    style={{"display":"none"}}>🔌 Disconnect</button>
                  <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.fetchWhatsAppStatus(true)); } catch(err) { console.error(err); } }}>🔄 Check Status</button>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
