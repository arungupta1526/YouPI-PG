import React from 'react';

export default function SubViewPaymentSimulator() {
  return (
    <>
          <div id="subViewDevSimulator" hidden>
            {/*  Header Banner  */}
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm"
              style={{"border":"2px solid #3b82f6","background":"linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(15,23,42,0.98) 100%)","marginBottom":"1.5rem"}}>
              <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","flexWrap":"wrap","gap":"1rem"}}>
                <div>
                  <div style={{"display":"flex","alignItems":"center","gap":"0.6rem","marginBottom":"0.35rem"}}>
                    <span style={{"fontSize":"1.5rem"}}>🎮</span>
                    <h2 style={{"margin":"0","fontSize":"1.35rem","color":"#ffffff","fontWeight":"800"}}>Developer Tools → Payment
                      Simulator</h2>
                    <span className="badge"
                      style={{"background":"#2563eb","color":"#ffffff","fontSize":"0.75rem","padding":"0.25rem 0.65rem"}}>DEVELOPER
                      TESTING ONLY</span>
                  </div>
                  <p
                    style={{"fontSize":"0.86rem","color":"var(--text-muted)","margin":"0.4rem 0 0 0","maxWidth":"820px","lineHeight":"1.5"}}>
                    Simulate incoming bank SMS and Gmail payment notifications against real checkout sessions.
                    The observation enters the <strong>REAL 6-stage verification engine</strong> without shortcuts.
                    The real engine decides whether it passes, fails, or triggers fraud detection.
                  </p>
                </div>
                {/*  Test Mode Quick Status / Enable  */}
                <div
                  style={{"background":"#1e293b","border":"1px solid #334155","borderRadius":"8px","padding":"0.75rem 1rem","display":"flex","alignItems":"center","gap":"0.75rem"}}>
                  <div style={{"fontSize":"0.8rem"}}>
                    <div style={{"color":"#94a3b8","fontSize":"0.72rem","textTransform":"uppercase"}}>Test Mode Status</div>
                    <strong id="simTestModeStatus" style={{"color":"#f59e0b"}}>Checking...</strong>
                  </div>
                  <button id="simBtnEnableTestMode" className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.simQuickEnableTestMode()); } catch(err) { console.error(err); } }}
                    style={{"fontSize":"0.78rem","padding":"0.4rem 0.8rem","background":"#f59e0b","borderColor":"#d97706","color":"#0f172a","fontWeight":"700"}}>
                    Enable Test Mode
                  </button>
                </div>
              </div>
            </div>
    
            {/*  Target Customer & Active Payment Session Card  */}
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" style={{"border":"1px solid #334155","background":"#0f172a","marginBottom":"1.5rem"}}>
              <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(320px, 1fr))","gap":"1.5rem"}}>
    
                {/*  Column 1: Customer Selection  */}
                <div>
                  <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.75rem"}}>
                    <strong style={{"color":"#ffffff","fontSize":"0.95rem","display":"flex","alignItems":"center","gap":"0.5rem"}}>
                      <span>👤</span> Target Customer
                    </strong>
                    <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.simFetchCustomers()); } catch(err) { console.error(err); } }}
                      style={{"fontSize":"0.72rem","padding":"0.25rem 0.6rem"}}>
                      ↻ Reload
                    </button>
                  </div>
                  <div style={{"marginBottom":"0.75rem"}}>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="simCustomerSearchInput" placeholder="Search customer (Name, Mobile, Email)..."
                      onInput={(e) => { try { (window.simFilterCustomers(e.currentTarget.value)); } catch(err) { console.error(err); } }}
                      style={{"width":"100%","boxSizing":"border-box","background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.5rem 0.75rem","borderRadius":"6px","fontSize":"0.84rem"}} />
                  </div>
                  <select className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="simCustomerSelect" size="4" defaultValue="" onChange={(e) => { try { (window.simSelectCustomer(e.currentTarget.value)); } catch(err) { console.error(err); } }}
                    style={{"width":"100%","boxSizing":"border-box","background":"#020617","color":"#f8fafc","border":"1px solid #334155","borderRadius":"6px","padding":"0.5rem","fontSize":"0.82rem","minHeight":"110px"}}>
                    <option value="" disabled>Loading existing customers...</option>
                  </select>
    
                  {/*  Selected Customer Details  */}
                  <div id="simSelectedCustomerBox"
                    style={{"marginTop":"0.75rem","padding":"0.85rem","borderRadius":"8px","background":"#1e293b","border":"1px solid #334155","display":"none"}}>
                    <div style={{"fontSize":"0.74rem","color":"#94a3b8","textTransform":"uppercase","marginBottom":"0.25rem"}}>Selected
                      Customer</div>
                    <div style={{"display":"flex","justifyContent":"space-between","alignItems":"baseline"}}>
                      <strong id="simCustName" style={{"color":"#ffffff","fontSize":"1rem"}}>-</strong>
                      <span id="simCustPhone" style={{"color":"#38bdf8","fontFamily":"monospace","fontSize":"0.84rem"}}>-</span>
                    </div>
                    <div id="simCustEmail" style={{"color":"#94a3b8","fontSize":"0.8rem","marginTop":"0.2rem"}}>-</div>
                  </div>
                </div>
    
                {/*  Column 2: Active Payment Session Selection  */}
                <div>
                  <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.75rem"}}>
                    <strong style={{"color":"#ffffff","fontSize":"0.95rem","display":"flex","alignItems":"center","gap":"0.5rem"}}>
                      <span>💳</span> Active Payment Sessions
                    </strong>
                    <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.simReloadSessions()); } catch(err) { console.error(err); } }}
                      style={{"fontSize":"0.72rem","padding":"0.25rem 0.6rem"}}>
                      ↻ Refresh Sessions
                    </button>
                  </div>
                  <div id="simSessionsList"
                    style={{"minHeight":"160px","maxHeight":"220px","overflowY":"auto","background":"#020617","border":"1px solid #334155","borderRadius":"6px","padding":"0.5rem"}}>
                    <div style={{"color":"#64748b","fontSize":"0.82rem","textAlign":"center","padding":"2rem 1rem"}}>
                      Please select a customer on the left to inspect their active payment sessions.
                    </div>
                  </div>
    
                  {/*  Terminal Session Notice (Requirement 6)  */}
                  <div id="simTerminalNotice"
                    style={{"display":"none","marginTop":"0.75rem","padding":"0.75rem 1rem","borderRadius":"8px","background":"rgba(239,68,68,0.15)","border":"1px solid #ef4444","color":"#fca5a5","fontSize":"0.84rem","fontWeight":"700"}}>
                    ⚠️ SESSION NO LONGER ACTIVE — Observation injection disabled for terminal sessions.
                  </div>
    
                  {/*  Selected Session Details Bar  */}
                  <div id="simSelectedSessionBar"
                    style={{"display":"flex","marginTop":"0.75rem","padding":"0.75rem 1rem","borderRadius":"8px","background":"#1e293b","border":"1px solid #3b82f6","justifyContent":"space-between","alignItems":"center"}}>
                    <div>
                      <span style={{"fontSize":"0.72rem","color":"#94a3b8","textTransform":"uppercase"}}>Target Session</span>
                      <div style={{"display":"flex","alignItems":"center","gap":"0.5rem","marginTop":"0.15rem"}}>
                        <strong id="simSelectedSessionId"
                          style={{"color":"#38bdf8","fontFamily":"monospace","fontSize":"0.84rem"}}>-</strong>
                        <span id="simSelectedSessionOrder" style={{"color":"#e2e8f0","fontSize":"0.82rem"}}>-</span>
                      </div>
                    </div>
                    <div style={{"textAlign":"right"}}>
                      <div id="simSelectedSessionAmount" style={{"color":"#22c55e","fontWeight":"800","fontSize":"1.05rem"}}>-</div>
                      <span id="simSelectedSessionBadge" className="badge"
                        style={{"fontSize":"0.7rem","padding":"0.2rem 0.5rem","background":"#22c55e","color":"#0f172a"}}>ACTIVE</span>
                    </div>
                  </div>
                </div>
    
              </div>
            </div>
    
            {/*  Two Independent Streams: SMS & Gmail (Section 8-15)  */}
            <div
              style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(360px, 1fr))","gap":"1.5rem","marginBottom":"1.5rem"}}>
    
              {/*  SMS STREAM PANEL  */}
              <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" style={{"border":"1px solid #3b82f6","background":"#0b0f19"}}>
                <div
                  style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"1rem","borderBottom":"1px solid #1e293b","paddingBottom":"0.75rem"}}>
                  <strong style={{"color":"#60a5fa","fontSize":"1.05rem","display":"flex","alignItems":"center","gap":"0.5rem"}}>
                    <span>📱</span> SMS STREAM
                  </strong>
                  <span style={{"fontSize":"0.74rem","color":"#94a3b8"}}>100% Customizable · Any String</span>
                </div>
    
                <div style={{"marginBottom":"1rem"}}>
                  <label style={{"display":"block","fontSize":"0.8rem","color":"#94a3b8","marginBottom":"0.35rem","fontWeight":"600"}}>
                    Sender / Short Code
                  </label>
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="simSmsSender" defaultValue="HDFCBK"
                    placeholder="e.g. HDFCBK, AXISBK, 8796266491, arbitrary string..."
                    style={{"width":"100%","boxSizing":"border-box","background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.5rem 0.75rem","borderRadius":"6px","fontSize":"0.84rem","fontFamily":"monospace"}} />
                </div>
    
                <div style={{"marginBottom":"1rem"}}>
                  <label style={{"display":"block","fontSize":"0.8rem","color":"#94a3b8","marginBottom":"0.35rem","fontWeight":"600"}}>
                    SMS Content (Free-Form Raw Text)
                  </label>
                  <textarea className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="simSmsContent" rows="4"
                    placeholder="e.g. A/C XX1234 credited with Rs 499.00 CR. Ref 123456789012"
                    style={{"width":"100%","boxSizing":"border-box","background":"#020617","color":"#f8fafc","border":"1px solid #334155","borderRadius":"6px","padding":"0.75rem","fontSize":"0.84rem","fontFamily":"monospace","resize":"vertical"}}></textarea>
                  <div style={{"fontSize":"0.72rem","color":"#64748b","marginTop":"0.25rem"}}>Exact text preserved verbatim as
                    <code>raw</code>.
                  </div>
                </div>
    
                <div style={{"marginBottom":"1.25rem"}}>
                  <label style={{"display":"block","fontSize":"0.8rem","color":"#94a3b8","marginBottom":"0.35rem","fontWeight":"600"}}>
                    Received Time
                  </label>
                  <div style={{"display":"flex","gap":"0.5rem","marginBottom":"0.4rem"}}>
                    <select className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="simSmsTimeType" onChange={(e) => { try { (window.simToggleTimeInput('SMS')); } catch(err) { console.error(err); } }}
                      style={{"background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.4rem 0.65rem","borderRadius":"6px","fontSize":"0.82rem"}}>
                      <option value="CURRENT">Current Server Time</option>
                      <option value="CUSTOM">Custom Timestamp</option>
                    </select>
                  </div>
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="simSmsCustomTime"
                    placeholder="YYYY-MM-DDTHH:mm:ss.sssZ (e.g. 2026-10-04T11:45:21Z)"
                    style={{"display":"none","width":"100%","boxSizing":"border-box","background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.45rem 0.75rem","borderRadius":"6px","fontSize":"0.82rem","fontFamily":"monospace"}} />
                </div>
    
                <button id="simBtnPushSms" className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.simInjectObservation('SMS')); } catch(err) { console.error(err); } }}
                  style={{"width":"100%","background":"#2563eb","borderColor":"#1d4ed8","padding":"0.65rem","fontSize":"0.92rem","fontWeight":"800","display":"flex","justifyContent":"center","alignItems":"center","gap":"0.5rem"}}>
                  <span>🚀</span> PUSH SMS TO STREAM
                </button>
              </div>
    
              {/*  GMAIL STREAM PANEL  */}
              <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" style={{"border":"1px solid #ec4899","background":"#0b0f19"}}>
                <div
                  style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"1rem","borderBottom":"1px solid #1e293b","paddingBottom":"0.75rem"}}>
                  <strong style={{"color":"#f472b6","fontSize":"1.05rem","display":"flex","alignItems":"center","gap":"0.5rem"}}>
                    <span>✉️</span> GMAIL STREAM
                  </strong>
                  <span style={{"fontSize":"0.74rem","color":"#94a3b8"}}>100% Customizable · Any String</span>
                </div>
    
                <div style={{"marginBottom":"1rem"}}>
                  <label style={{"display":"block","fontSize":"0.8rem","color":"#94a3b8","marginBottom":"0.35rem","fontWeight":"600"}}>
                    Sender Email Address
                  </label>
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="simGmailSender" defaultValue="notification@yourbank.bank.in"
                    placeholder="e.g. notification@yourbank.bank.in, test@gmail.com, arbitrary email..."
                    style={{"width":"100%","boxSizing":"border-box","background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.5rem 0.75rem","borderRadius":"6px","fontSize":"0.84rem","fontFamily":"monospace"}} />
                </div>
    
                <div style={{"marginBottom":"1rem"}}>
                  <label style={{"display":"block","fontSize":"0.8rem","color":"#94a3b8","marginBottom":"0.35rem","fontWeight":"600"}}>
                    Gmail Content (Free-Form Raw Text)
                  </label>
                  <textarea className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="simGmailContent" rows="4"
                    placeholder="e.g. Your account has been credited with ₹499.00 via UPI. Reference 123456789012."
                    style={{"width":"100%","boxSizing":"border-box","background":"#020617","color":"#f8fafc","border":"1px solid #334155","borderRadius":"6px","padding":"0.75rem","fontSize":"0.84rem","fontFamily":"monospace","resize":"vertical"}}></textarea>
                  <div style={{"fontSize":"0.72rem","color":"#64748b","marginTop":"0.25rem"}}>Exact text preserved verbatim as
                    <code>raw</code>.
                  </div>
                </div>
    
                <div style={{"marginBottom":"1.25rem"}}>
                  <label style={{"display":"block","fontSize":"0.8rem","color":"#94a3b8","marginBottom":"0.35rem","fontWeight":"600"}}>
                    Received Time
                  </label>
                  <div style={{"display":"flex","gap":"0.5rem","marginBottom":"0.4rem"}}>
                    <select className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="simGmailTimeType" onChange={(e) => { try { (window.simToggleTimeInput('GMAIL')); } catch(err) { console.error(err); } }}
                      style={{"background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.4rem 0.65rem","borderRadius":"6px","fontSize":"0.82rem"}}>
                      <option value="CURRENT">Current Server Time</option>
                      <option value="CUSTOM">Custom Timestamp</option>
                    </select>
                  </div>
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="simGmailCustomTime"
                    placeholder="YYYY-MM-DDTHH:mm:ss.sssZ (e.g. 2026-10-04T11:45:21Z)"
                    style={{"display":"none","width":"100%","boxSizing":"border-box","background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.45rem 0.75rem","borderRadius":"6px","fontSize":"0.82rem","fontFamily":"monospace"}} />
                </div>
    
                <button id="simBtnPushGmail" className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.simInjectObservation('GMAIL')); } catch(err) { console.error(err); } }}
                  style={{"width":"100%","background":"#db2777","borderColor":"#be185d","padding":"0.65rem","fontSize":"0.92rem","fontWeight":"800","display":"flex","justifyContent":"center","alignItems":"center","gap":"0.5rem"}}>
                  <span>🚀</span> PUSH GMAIL TO STREAM
                </button>
              </div>
    
            </div>
    
            {/*  PROCESSING RESULT INSPECTOR (Section 21 & 22)  */}
            <div id="simResultInspectorCard" className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm"
              style={{"display":"none","border":"1px solid #334155","background":"#020617","marginBottom":"1.5rem"}}>
              <div
                style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"1rem","flexWrap":"wrap","gap":"0.5rem","borderBottom":"1px solid #1e293b","paddingBottom":"0.75rem"}}>
                <div style={{"display":"flex","alignItems":"center","gap":"0.75rem"}}>
                  <span style={{"fontSize":"1.3rem"}}>🔬</span>
                  <h3 style={{"margin":"0","fontSize":"1.15rem","color":"#ffffff","fontWeight":"800"}}>Processing Result Inspector</h3>
                  <span id="simResultStatusBadge" className="badge"
                    style={{"fontSize":"0.82rem","padding":"0.3rem 0.75rem"}}>UNKNOWN</span>
                </div>
                <div id="simResultMessageId" style={{"fontSize":"0.78rem","color":"#94a3b8","fontFamily":"monospace"}}></div>
              </div>
    
              {/*  Target & Extracted Fields Grid  */}
              <div
                style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(160px, 1fr))","gap":"0.75rem","marginBottom":"1.25rem"}}>
                <div style={{"background":"#0f172a","padding":"0.65rem 0.85rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
                  <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Target Session</div>
                  <div id="simResTargetSession"
                    style={{"fontWeight":"700","color":"#f8fafc","fontSize":"0.85rem","fontFamily":"monospace"}}>None</div>
                </div>
                <div style={{"background":"#0f172a","padding":"0.65rem 0.85rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
                  <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Source</div>
                  <div id="simResSource" style={{"fontWeight":"700","color":"#f8fafc","fontSize":"0.85rem"}}>-</div>
                </div>
                <div style={{"background":"#0f172a","padding":"0.65rem 0.85rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
                  <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Amount</div>
                  <div id="simResAmount" style={{"fontWeight":"700","color":"#38bdf8","fontSize":"0.95rem"}}>-</div>
                </div>
                <div style={{"background":"#0f172a","padding":"0.65rem 0.85rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
                  <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Reference / UTR</div>
                  <div id="simResRef" style={{"fontWeight":"700","color":"#f8fafc","fontSize":"0.82rem","fontFamily":"monospace"}}>-
                  </div>
                </div>
                <div style={{"background":"#0f172a","padding":"0.65rem 0.85rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
                  <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Failing Reason</div>
                  <div id="simResReason" style={{"fontWeight":"700","color":"#f87171","fontSize":"0.82rem"}}>None</div>
                </div>
              </div>
    
              {/*  6-Stage Execution Visualizer  */}
              <div
                style={{"fontSize":"0.8rem","fontWeight":"700","color":"#94a3b8","marginBottom":"0.75rem","textTransform":"uppercase","letterSpacing":"0.04em"}}>
                Pipeline Stage Inspection (Stages 1 – 6)
              </div>
              <div id="simStagesContainer" style={{"display":"flex","flexDirection":"column","gap":"0.5rem","marginBottom":"1rem"}}>
                {/*  Injected via JavaScript  */}
              </div>
    
              {/*  Raw Text Verbatim  */}
              <div style={{"background":"#0f172a","padding":"0.75rem 1rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
                <div style={{"fontSize":"0.72rem","color":"#64748b","textTransform":"uppercase","marginBottom":"0.25rem"}}>Exact Raw
                  Payload (Preserved)</div>
                <pre id="simResRawText"
                  style={{"margin":"0","fontSize":"0.8rem","color":"#cbd5e1","fontFamily":"monospace","whiteSpace":"pre-wrap","wordBreak":"break-all"}}></pre>
              </div>
            </div>
    
            {/*  SIMULATION HISTORY (Section 26 & 30)  */}
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" style={{"border":"1px solid #1e293b","background":"#0b0f19"}}>
              <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.85rem"}}>
                <strong style={{"color":"#ffffff","fontSize":"0.95rem","display":"flex","alignItems":"center","gap":"0.5rem"}}>
                  <span>📜</span> Simulation History
                </strong>
                <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.simFetchHistory()); } catch(err) { console.error(err); } }}
                  style={{"fontSize":"0.74rem","padding":"0.25rem 0.65rem"}}>
                  ↻ Refresh History
                </button>
              </div>
              <div style={{"overflowX":"auto"}}>
                <table style={{"width":"100%","borderCollapse":"collapse","fontSize":"0.82rem","textAlign":"left"}}>
                  <thead>
                    <tr
                      style={{"borderBottom":"1px solid #334155","color":"#94a3b8","fontSize":"0.74rem","textTransform":"uppercase"}}>
                      <th style={{"padding":"0.6rem 0.75rem"}}>Timestamp</th>
                      <th style={{"padding":"0.6rem 0.75rem"}}>Source</th>
                      <th style={{"padding":"0.6rem 0.75rem"}}>Sender</th>
                      <th style={{"padding":"0.6rem 0.75rem"}}>Session</th>
                      <th style={{"padding":"0.6rem 0.75rem"}}>Result</th>
                      <th style={{"padding":"0.6rem 0.75rem"}}>Message ID</th>
                      <th style={{"padding":"0.6rem 0.75rem"}}>Reason</th>
                    </tr>
                  </thead>
                  <tbody id="simHistoryTableBody">
                    <tr>
                      <td colSpan="7" style={{"padding":"1.5rem","textAlign":"center","color":"#64748b"}}>Loading history...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
    
          </div>
    </>
  );
}
