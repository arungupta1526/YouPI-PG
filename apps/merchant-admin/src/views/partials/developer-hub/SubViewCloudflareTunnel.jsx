import React from 'react';

export default function SubViewCloudflareTunnel() {
  return (
    <>
          <div id="subViewDevCloudflare" hidden>
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" id="cardCloudflareConfig">
              <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
                <div>
                  <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">☁️ Cloudflare Tunnel Configuration</div>
                  <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Single canonical production gateway routing. Enter your domain and prefix; all
                    routes, local service ports, and dashboard mappings are system-derived.</div>
                </div>
                <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" id="envModeDisplayBadge">💻 LOCALHOST MODE</span>
              </div>
    
              {/*  Mode Segmented Switch  */}
              <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1rem","marginBottom":"1.5rem"}}>
                <div id="btnEnvLocalhost" onClick={(e) => { try { (new Function('e', "setEnvMode('localhost')"))(e); } catch(err) { console.error(err); } }}
                  style={{"background":"#0f172a","border":"2px solid #38bdf8","borderRadius":"0.75rem","padding":"1.2rem","cursor":"pointer","transition":"all 0.2s"}}>
                  <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.4rem"}}>
                    <strong style={{"fontSize":"1rem","color":"#f1f5f9"}}>💻 Localhost Mode (Development)</strong>
                    <span className="badge badge-primary" id="badgeLocalhostActive">ACTIVE</span>
                  </div>
                  <p style={{"fontSize":"0.8rem","color":"var(--text-muted)","margin":"0","lineHeight":"1.4"}}>
                    Routes API, Checkout, and Observers directly over local developer ports (<code>7000</code>,
                    <code>6100</code>, <code>6001</code>, <code>6003</code>, <code>5000</code>).
                  </p>
                </div>
    
                <div id="btnEnvProduction" onClick={(e) => { try { (new Function('e', "setEnvMode('production')"))(e); } catch(err) { console.error(err); } }}
                  style={{"background":"#0b1120","border":"1px solid var(--border)","borderRadius":"0.75rem","padding":"1.2rem","cursor":"pointer","transition":"all 0.2s"}}>
                  <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.4rem"}}>
                    <strong style={{"fontSize":"1rem","color":"#f1f5f9"}}>🌍 Production Mode (Cloudflare Tunnel)</strong>
                    <span className="badge badge-success inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20" id="badgeProductionActive" style={{"display":"none"}}>ACTIVE</span>
                  </div>
                  <p style={{"fontSize":"0.8rem","color":"var(--text-muted)","margin":"0","lineHeight":"1.4"}}>
                    Authoritative production mode using deterministic Cloudflare public hostnames with SSL
                    (<code>https://</code>).
                  </p>
                </div>
              </div>
    
              {/*  Cloudflare Configuration Form  */}
              <div
                style={{"background":"#090d16","border":"1px solid var(--border)","borderRadius":"0.75rem","padding":"1.25rem","marginBottom":"1.5rem"}}>
                <div style={{"fontSize":"0.88rem","fontWeight":"700","color":"#38bdf8","marginBottom":"0.75rem"}}>☁️ Cloudflare Domain
                  &amp; Prefix Setup</div>
                <div
                  style={{"display":"grid","gridTemplateColumns":"2fr 1fr 1.3fr","gap":"1rem","alignItems":"flex-end","marginBottom":"1rem"}}>
                  <div>
                    <label
                      style={{"display":"block","fontSize":"0.8rem","fontWeight":"700","color":"var(--text-muted)","marginBottom":"0.35rem"}}>1.
                      Cloudflare Domain</label>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingDomainTld" type="text" placeholder="example.com" defaultValue=""
                      onInput={(e) => { try { (new Function('e', "updateCloudflarePreview()"))(e); } catch(err) { console.error(err); } }} style={{"width":"100%"}} />
                  </div>
                  <div>
                    <label
                      style={{"display":"block","fontSize":"0.8rem","fontWeight":"700","color":"var(--text-muted)","marginBottom":"0.35rem"}}>2.
                      Deployment Prefix</label>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingDomainPrefix" type="text" placeholder="pay" defaultValue="pay"
                      onInput={(e) => { try { (new Function('e', "updateCloudflarePreview()"))(e); } catch(err) { console.error(err); } }} style={{"width":"100%"}} />
                  </div>
                  <div>
                    <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"width":"100%","padding":"0.65rem","justifyContent":"center"}}
                      onClick={(e) => { try { (new Function('e', "saveDomainSettings()"))(e); } catch(err) { console.error(err); } }}>💾 SAVE CONFIGURATION</button>
                  </div>
                </div>
              </div>
    
              {/*  GENERATED ROUTES LIST  */}
              <div style={{"marginBottom":"1.5rem"}}>
                <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.75rem"}}>
                  <div>
                    <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#f1f5f9"}}>🛣️ CLOUDFLARE TUNNEL ROUTES</div>
                    <div style={{"fontSize":"0.78rem","color":"var(--text-muted)"}}>Exact routes to create in Cloudflare Dashboard.
                      All ports and roles are system-defined.</div>
                  </div>
                  <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"fontSize":"0.75rem"}} onClick={(e) => { try { (new Function('e', "copyAllMappings()"))(e); } catch(err) { console.error(err); } }}>📋 COPY ALL
                    MAPPINGS</button>
                </div>
                <div id="cloudflareRoutesContainer" style={{"display":"flex","flexDirection":"column","gap":"0.75rem"}}>
                  {/*  Dynamically populated route cards  */}
                </div>
              </div>
    
              {/*  CLOUDFLARE DASHBOARD INSTRUCTIONS  */}
              <div style={{"background":"#090d16","border":"1px solid var(--border)","borderRadius":"0.75rem","padding":"1.25rem"}}>
                <div style={{"fontSize":"0.88rem","fontWeight":"700","color":"#38bdf8","marginBottom":"0.75rem"}}>📖 EXACT CLOUDFLARE
                  DASHBOARD INSTRUCTIONS</div>
                <div
                  style={{"display":"flex","flexWrap":"wrap","alignItems":"center","gap":"0.4rem","marginBottom":"1rem","fontSize":"0.8rem","fontFamily":"monospace","background":"#020617","padding":"0.75rem","borderRadius":"0.5rem","border":"1px solid #1e293b"}}>
                  <span style={{"color":"#38bdf8","fontWeight":"700"}}>Cloudflare Dashboard</span>
                  <span style={{"color":"#64748b"}}>↓</span>
                  <span style={{"color":"#38bdf8","fontWeight":"700"}}>Networking</span>
                  <span style={{"color":"#64748b"}}>↓</span>
                  <span style={{"color":"#38bdf8","fontWeight":"700"}}>Tunnels</span>
                  <span style={{"color":"#64748b"}}>↓</span>
                  <span style={{"color":"#38bdf8","fontWeight":"700"}}>Select YOUPI Tunnel</span>
                  <span style={{"color":"#64748b"}}>↓</span>
                  <span style={{"color":"#38bdf8","fontWeight":"700"}}>Routes</span>
                  <span style={{"color":"#64748b"}}>↓</span>
                  <span style={{"color":"#38bdf8","fontWeight":"700"}}>Add route</span>
                  <span style={{"color":"#64748b"}}>↓</span>
                  <span style={{"color":"#38bdf8","fontWeight":"700"}}>Published application</span>
                  <span style={{"color":"#64748b"}}>↓</span>
                  <span style={{"color":"#38bdf8","fontWeight":"700"}}>Enter Hostname</span>
                  <span style={{"color":"#64748b"}}>↓</span>
                  <span style={{"color":"#38bdf8","fontWeight":"700"}}>Enter Service URL</span>
                  <span style={{"color":"#64748b"}}>↓</span>
                  <span style={{"color":"#10b981","fontWeight":"bold"}}>Save</span>
                </div>
    
                <div style={{"fontSize":"0.82rem","color":"var(--text-muted)","lineHeight":"1.5"}}>
                  <p style={{"margin":"0 0 0.5rem 0"}}>• <strong>Public Hostname:</strong> The URL users and webhooks access from
                    the internet.</p>
                  <p style={{"margin":"0 0 0.5rem 0"}}>• <strong>Service URL:</strong> The local service <code>cloudflared</code>
                    forwards incoming traffic to on this host.</p>
                  <p style={{"margin":"0 0 0.5rem 0","color":"#ef4444"}}>• <strong>DO NOT EXPOSE:</strong> SMS Observer
                    (<code>localhost:6002</code>), Control Center (<code>localhost:8090</code>), and internal database
                    endpoints must NEVER be published to Cloudflare.</p>
                  <p style={{"margin":"0"}}>• Android SMS observer connects to <strong>Payment API</strong>
                    (<code>pay-api.example.com</code> / <code>6100</code>), not directly to internal observer ports.</p>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
