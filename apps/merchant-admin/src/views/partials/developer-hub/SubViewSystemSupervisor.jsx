import React from 'react';

export default function SubViewSystemSupervisor() {
  return (
    <>
          <div id="subViewDevSupervisor">
    
            {/*  CONFIRMATION MODAL: ENABLE TEST MODE (SECTION 11J)  */}
            <div id="modalEnableTestMode"
              style={{"display":"none","position":"fixed","inset":"0","background":"rgba(0,0,0,0.8)","zIndex":"999999","alignItems":"center","justifyContent":"center"}}>
              <div
                style={{"maxWidth":"480px","width":"92%","background":"#0f172a","border":"2px solid #f59e0b","borderRadius":"12px","padding":"1.75rem","boxShadow":"0 25px 50px -12px rgba(0,0,0,0.9)"}}>
                <div style={{"display":"flex","alignItems":"center","gap":"0.75rem","marginBottom":"1rem"}}>
                  <span style={{"fontSize":"1.8rem"}}>⚠️</span>
                  <h3 style={{"margin":"0","fontSize":"1.25rem","color":"#fbbf24","fontWeight":"800"}}>Enable Test Mode?</h3>
                </div>
                <p style={{"color":"#e2e8f0","fontSize":"0.92rem","lineHeight":"1.6","marginBottom":"1.5rem"}}>
                  Test Mode disables automatic banning for 10 minutes and is intended only for development and testing.
                </p>
                <div style={{"display":"flex","justifyContent":"flex-end","gap":"0.75rem"}}>
                  <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.closeTestModeModal()); } catch(err) { console.error(err); } }}
                    style={{"fontSize":"0.88rem","padding":"0.55rem 1.1rem"}}>
                    Cancel
                  </button>
                  <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.confirmEnableTestMode()); } catch(err) { console.error(err); } }}
                    style={{"background":"#f59e0b","borderColor":"#d97706","color":"#0f172a","fontWeight":"800","fontSize":"0.88rem","padding":"0.55rem 1.25rem"}}>
                    Enable Test Mode
                  </button>
                </div>
              </div>
            </div>
    
            {/*  DEVELOPER TEST MODE CARD (SECTIONS 11A - 11L)  */}
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" id="cardDeveloperTestMode"
              style={{"border":"2px solid #f59e0b","background":"linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(15,23,42,0.96) 100%)","marginBottom":"1.5rem"}}>
              {/*  Card Header & Autoritative Server Toggle  */}
              <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","flexWrap":"wrap","gap":"1rem"}}>
                <div style={{"flex":"1","minWidth":"280px"}}>
                  <div style={{"display":"flex","alignItems":"center","gap":"0.6rem","marginBottom":"0.35rem"}}>
                    <span style={{"fontSize":"1.35rem"}}>🧪</span>
                    <strong style={{"fontSize":"1.15rem","color":"#ffffff"}}>Developer Settings → Test Mode</strong>
                    <span className="badge" id="testModeBadge"
                      style={{"fontSize":"0.75rem","padding":"0.25rem 0.65rem","background":"#334155","color":"#94a3b8"}}>[ OFF ] Test
                      Mode</span>
                  </div>
                  <p
                    style={{"fontSize":"0.84rem","color":"var(--text-muted)","marginTop":"0.4rem","maxWidth":"760px","lineHeight":"1.5"}}>
                    This mode exists ONLY for development, debugging, QA, and verification-engine testing.
                    While active, <strong>AUTOMATIC BAN SYSTEM = DISABLED</strong>.
                    Automatically expires after 10 minutes (strictly enforced server-side).
                  </p>
                  <div
                    style={{"display":"flex","alignItems":"center","gap":"0.75rem","marginTop":"0.6rem","fontSize":"0.78rem","color":"#94a3b8","flexWrap":"wrap"}}>
                    <span id="testModeBanStatusText">🛡️ Automatic Ban System: <strong style={{"color":"#22c55e"}}>ENABLED
                        (Normal)</strong></span>
                    <span id="testModeCountdownWrap" style={{"display":"none","color":"#fbbf24","fontWeight":"700"}}>⏱ Test Mode
                      Enabled · Remaining time: <span id="testModeTimerVal">10:00</span></span>
                  </div>
                </div>
                <div style={{"display":"flex","alignItems":"center","gap":"1rem"}}>
                  <label
                    style={{"display":"flex","alignItems":"center","gap":"0.6rem","cursor":"pointer","background":"#1c1917","padding":"0.6rem 1.1rem","borderRadius":"0.5rem","border":"1px solid #d97706"}}>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" id="toggleTestModeSwitch" onChange={(e) => { try { (window.handleTestModeToggle(e.currentTarget)); } catch(err) { console.error(err); } }}
                      style={{"width":"20px","height":"20px","accentColor":"#f59e0b","cursor":"pointer"}} />
                    <span style={{"fontSize":"0.88rem","fontWeight":"700","color":"#fef3c7"}} id="testModeLabelText">Test Mode</span>
                  </label>
                </div>
              </div>
    
              {/*  Section 11J: Active Warning Banner  */}
              <div id="testModeActiveBanner"
                style={{"display":"none","marginTop":"1.25rem","padding":"1rem","borderRadius":"8px","background":"rgba(245,158,11,0.14)","border":"1px solid rgba(245,158,11,0.4)","color":"#fef3c7"}}>
                <div
                  style={{"display":"flex","alignItems":"center","gap":"0.6rem","fontWeight":"800","fontSize":"0.95rem","color":"#fbbf24","marginBottom":"0.25rem"}}>
                  <span>⚠️</span> TEST MODE ACTIVE
                </div>
                <div style={{"fontSize":"0.84rem","color":"#fed7aa","lineHeight":"1.4"}}>
                  Automatic banning is temporarily disabled. This mode will automatically turn off after 10 minutes.
                </div>
              </div>
    
              {/*  Section 11C: Test Payment Observation (Visible ONLY when Test Mode is Active)  */}
              <div id="sectionTestObservation"
                style={{"display":"none","marginTop":"1.5rem","paddingTop":"1.25rem","borderTop":"1px solid rgba(245,158,11,0.25)"}}>
                <div
                  style={{"display":"flex","justifyContent":"space-between","alignItems":"center","flexWrap":"wrap","gap":"0.75rem","marginBottom":"1rem"}}>
                  <div>
                    <h4 style={{"margin":"0","fontSize":"1.05rem","color":"#ffffff","display":"flex","alignItems":"center","gap":"0.5rem"}}>
                      <span>🎯</span> Test Payment Observation
                    </h4>
                    <span style={{"fontSize":"0.78rem","color":"#94a3b8"}}>Inject synthetic observations directly into the
                      canonical 6-stage production verification flow.</span>
                  </div>
                  <div style={{"display":"flex","gap":"0.5rem","flexWrap":"wrap"}}>
                    <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.generateFakeSmsTemplate()); } catch(err) { console.error(err); } }}
                      style={{"fontSize":"0.8rem","padding":"0.4rem 0.85rem","borderColor":"#d97706","color":"#fde68a"}}>
                      📱 Create Fake SMS
                    </button>
                    <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.generateFakeGmailTemplate()); } catch(err) { console.error(err); } }}
                      style={{"fontSize":"0.8rem","padding":"0.4rem 0.85rem","borderColor":"#d97706","color":"#fde68a"}}>
                      ✉️ Create Fake Gmail
                    </button>
                  </div>
                </div>
    
                {/*  Section 11G: Timestamp Control  */}
                <div
                  style={{"background":"#0b0f19","padding":"0.85rem","borderRadius":"8px","border":"1px solid #1e293b","marginBottom":"1.25rem","display":"flex","alignItems":"center","gap":"1rem","flexWrap":"wrap"}}>
                  <span style={{"fontSize":"0.82rem","color":"#94a3b8","fontWeight":"600"}}>⏱ Test Timestamp Control:</span>
                  <select className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="selectTestTimestampControl" onChange={(e) => { try { (window.handleTestTimestampChange(e.currentTarget.value)); } catch(err) { console.error(err); } }}
                    style={{"background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.35rem 0.75rem","borderRadius":"6px","fontSize":"0.82rem"}}>
                    <option value="CURRENT">Current Server Timestamp (Normal)</option>
                    <option value="BEFORE_SESSION">Message received before session creation (-5 mins)</option>
                    <option value="AFTER_EXPIRY">Message received after session expiry (+30 mins)</option>
                    <option value="CUSTOM">Custom ISO Timestamp</option>
                  </select>
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="inputCustomTimestamp" placeholder="YYYY-MM-DDTHH:mm:ss.sssZ"
                    style={{"display":"none","background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.35rem 0.75rem","borderRadius":"6px","fontSize":"0.82rem","width":"220px"}} />
                </div>
    
                {/*  Sections 11D & 11E: Custom SMS & Custom Gmail Testing Grid  */}
                <div
                  style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(320px, 1fr))","gap":"1.25rem","marginBottom":"1.5rem"}}>
                  {/*  Custom SMS Input Area (Section 11D)  */}
                  <div style={{"background":"#0b0f19","border":"1px solid #334155","borderRadius":"10px","padding":"1.1rem"}}>
                    <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.6rem"}}>
                      <strong style={{"color":"#60a5fa","fontSize":"0.92rem","display":"flex","alignItems":"center","gap":"0.4rem"}}>
                        📱 SMS Test Message
                      </strong>
                      <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="inputTestSmsSender" placeholder="Sender (e.g. VM-HDFCBK)" defaultValue="VM-HDFCBK"
                        style={{"background":"#1e293b","color":"#cbd5e1","border":"1px solid #334155","fontSize":"0.75rem","padding":"0.25rem 0.5rem","borderRadius":"4px","width":"130px"}} />
                    </div>
                    <textarea className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="inputTestSmsMessage" rows="4"
                      style={{"width":"100%","boxSizing":"border-box","background":"#020617","color":"#f8fafc","border":"1px solid #334155","borderRadius":"6px","padding":"0.75rem","fontFamily":"monospace","fontSize":"0.82rem","resize":"vertical"}}
                      placeholder="Enter custom SMS content here...&#10;e.g. A/C XX1234 credited by Rs 499.00 CR. Ref 123456789012."></textarea>
                    <div style={{"marginTop":"0.75rem","display":"flex","justifyContent":"space-between","alignItems":"center"}}>
                      <span style={{"fontSize":"0.72rem","color":"#64748b"}}>Preserved verbatim as <code>raw</code></span>
                      <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" id="btnInjectSms" onClick={(e) => { try { (window.injectTestMessage('SMS')); } catch(err) { console.error(err); } }}
                        style={{"background":"#2563eb","borderColor":"#1d4ed8","fontSize":"0.82rem","padding":"0.45rem 1rem"}}>
                        🚀 Inject Test SMS
                      </button>
                    </div>
                  </div>
    
                  {/*  Custom Gmail Input Area (Section 11E)  */}
                  <div style={{"background":"#0b0f19","border":"1px solid #334155","borderRadius":"10px","padding":"1.1rem"}}>
                    <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.6rem"}}>
                      <strong style={{"color":"#f472b6","fontSize":"0.92rem","display":"flex","alignItems":"center","gap":"0.4rem"}}>
                        ✉️ Gmail Test Message
                      </strong>
                      <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="inputTestGmailSender" placeholder="Sender (e.g. alerts@hdfc.bank.in)"
                        defaultValue="alerts@hdfc.bank.in"
                        style={{"background":"#1e293b","color":"#cbd5e1","border":"1px solid #334155","fontSize":"0.75rem","padding":"0.25rem 0.5rem","borderRadius":"4px","width":"170px"}} />
                    </div>
                    <textarea className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="inputTestGmailMessage" rows="4"
                      style={{"width":"100%","boxSizing":"border-box","background":"#020617","color":"#f8fafc","border":"1px solid #334155","borderRadius":"6px","padding":"0.75rem","fontFamily":"monospace","fontSize":"0.82rem","resize":"vertical"}}
                      placeholder="Enter custom email content here...&#10;e.g. Dear Customer, your account has been credited with INR 499.00 via UPI. UPI Ref No: 123456789012."></textarea>
                    <div style={{"marginTop":"0.75rem","display":"flex","justifyContent":"space-between","alignItems":"center"}}>
                      <span style={{"fontSize":"0.72rem","color":"#64748b"}}>Preserved verbatim as <code>raw</code></span>
                      <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" id="btnInjectGmail" onClick={(e) => { try { (window.injectTestMessage('GMAIL')); } catch(err) { console.error(err); } }}
                        style={{"background":"#db2777","borderColor":"#be185d","fontSize":"0.82rem","padding":"0.45rem 1rem"}}>
                        🚀 Inject Test Gmail
                      </button>
                    </div>
                  </div>
                </div>
    
                {/*  Section 11H: Test Results Display Inspector  */}
                <div id="testResultContainer"
                  style={{"display":"none","background":"#020617","border":"1px solid #334155","borderRadius":"10px","padding":"1.25rem","marginBottom":"1.5rem"}}>
                  <div
                    style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"1rem","flexWrap":"wrap","gap":"0.5rem"}}>
                    <div style={{"display":"flex","alignItems":"center","gap":"0.75rem"}}>
                      <h4 style={{"margin":"0","fontSize":"1rem","color":"#ffffff"}}>🔬 Complete Processing Result</h4>
                      <span id="testResultStatusBadge" className="badge"
                        style={{"fontSize":"0.8rem","padding":"0.3rem 0.75rem"}}>UNKNOWN</span>
                    </div>
                    <div id="testResultMeta" style={{"fontSize":"0.8rem","color":"#94a3b8","fontFamily":"monospace"}}></div>
                  </div>
    
                  {/*  Quick Metrics Summary  */}
                  <div
                    style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(130px, 1fr))","gap":"0.75rem","marginBottom":"1.25rem"}}>
                    <div style={{"background":"#0f172a","padding":"0.6rem 0.8rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
                      <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Source</div>
                      <div id="testResultSource" style={{"fontWeight":"700","color":"#f8fafc","fontSize":"0.9rem"}}>-</div>
                    </div>
                    <div style={{"background":"#0f172a","padding":"0.6rem 0.8rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
                      <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Amount</div>
                      <div id="testResultAmount" style={{"fontWeight":"700","color":"#38bdf8","fontSize":"0.9rem"}}>-</div>
                    </div>
                    <div style={{"background":"#0f172a","padding":"0.6rem 0.8rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
                      <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Reference / UTR</div>
                      <div id="testResultRef"
                        style={{"fontWeight":"700","color":"#f8fafc","fontSize":"0.85rem","fontFamily":"monospace"}}>-</div>
                    </div>
                    <div style={{"background":"#0f172a","padding":"0.6rem 0.8rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
                      <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Failing Reason</div>
                      <div id="testResultReason" style={{"fontWeight":"700","color":"#f87171","fontSize":"0.82rem"}}>None</div>
                    </div>
                  </div>
    
                  {/*  6-Stage Execution Visualizer  */}
                  <div
                    style={{"fontSize":"0.8rem","fontWeight":"700","color":"#94a3b8","marginBottom":"0.6rem","textTransform":"uppercase"}}>
                    Verification Pipeline Stage Inspection
                  </div>
                  <div id="testResultStagesList" style={{"display":"flex","flexDirection":"column","gap":"0.5rem"}}>
                    {/*  Stages injected dynamically  */}
                  </div>
                </div>
    
                {/*  Section 11I: Test Mode Audit Log Table  */}
                <div style={{"background":"#0b0f19","border":"1px solid #1e293b","borderRadius":"10px","padding":"1.1rem"}}>
                  <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.75rem"}}>
                    <strong style={{"color":"#ffffff","fontSize":"0.88rem","display":"flex","alignItems":"center","gap":"0.4rem"}}>
                      📜 Test Mode Audit Log
                    </strong>
                    <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.fetchTestModeAuditLog()); } catch(err) { console.error(err); } }}
                      style={{"fontSize":"0.72rem","padding":"0.25rem 0.6rem"}}>
                      ↻ Refresh Audit
                    </button>
                  </div>
                  <div style={{"overflowX":"auto"}}>
                    <table style={{"width":"100%","borderCollapse":"collapse","fontSize":"0.78rem","textAlign":"left"}}>
                      <thead>
                        <tr style={{"borderBottom":"1px solid #334155","color":"#64748b"}}>
                          <th style={{"padding":"0.4rem"}}>Time</th>
                          <th style={{"padding":"0.4rem"}}>Action / Message ID</th>
                          <th style={{"padding":"0.4rem"}}>Source</th>
                          <th style={{"padding":"0.4rem"}}>Result</th>
                          <th style={{"padding":"0.4rem"}}>Raw Message</th>
                        </tr>
                      </thead>
                      <tbody id="testAuditLogTableBody">
                        <tr>
                          <td colSpan="5" style={{"padding":"1rem","textAlign":"center","color":"#64748b"}}>Loading test audit
                            records...</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
    
              </div>
            </div>
    
            {/*  FALSE NARRATIVE DEV SWITCH (FEATURE 65 / DEV TOOLS)  */}
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm"
              style={{"border":"2px solid #8b5cf6","background":"linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(15,23,42,0.98) 100%)","marginBottom":"1.5rem"}}>
              <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-start","flexWrap":"wrap","gap":"1rem"}}>
                <div style={{"flex":"1","minWidth":"280px"}}>
                  <div style={{"display":"flex","alignItems":"center","gap":"0.6rem","marginBottom":"0.35rem"}}>
                    <span style={{"fontSize":"1.35rem"}}>🎭</span>
                    <strong style={{"fontSize":"1.15rem","color":"#ffffff"}}>UPI Server Health: False Narrative Switch</strong>
                    <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" id="falseNarrativeBadge"
                      style={{"fontSize":"0.75rem","padding":"0.25rem 0.65rem"}}>⚪ OFF · REAL SERVER STATUS</span>
                  </div>
                  <p
                    style={{"fontSize":"0.84rem","color":"var(--text-muted)","marginTop":"0.4rem","maxWidth":"760px","lineHeight":"1.5"}}>
                    Override the live observer status to test checkout portal behavior under different UPI server health
                    scenarios: <strong>Green</strong> (Healthy: Server Is Working), <strong>Yellow</strong> (Degraded: Extra
                    processing seconds), or <strong>Red</strong> (Downtime: Server Facing Issues).
                    <strong>Automatically turns off after 10 minutes</strong>.
                  </p>
                  <div
                    style={{"display":"flex","alignItems":"center","gap":"0.75rem","marginTop":"0.6rem","fontSize":"0.78rem","color":"#94a3b8","flexWrap":"wrap"}}>
                    <span>⚡ <strong>QR Code Invariant:</strong> The dynamic UPI QR code always loads and displays whether
                      servers are UP, BUSY, or DOWN.</span>
                    <span id="falseNarrativeCountdownWrap" style={{"display":"none","color":"#c084fc","fontWeight":"700"}}>⏱
                      Auto-expiry: <span id="falseNarrativeTimerVal">10:00</span></span>
                  </div>
                </div>
                <div style={{"display":"flex","flexDirection":"column","gap":"0.5rem","alignItems":"flex-end"}}>
                  <div
                    style={{"fontSize":"0.75rem","fontWeight":"700","color":"#c4b5fd","textTransform":"uppercase","letterSpacing":"0.04em"}}>
                    Select Narrative to Test:</div>
                  <div style={{"display":"flex","gap":"6px","flexWrap":"wrap"}}>
                    <button type="button" id="btnNarrativeGreen" onClick={(e) => { try { (window.handleFalseNarrativeSelect('GREEN')); } catch(err) { console.error(err); } }}
                      style={{"background":"#064e3b","border":"1px solid #059669","color":"#6ee7b7","fontSize":"0.8rem","fontWeight":"700","padding":"6px 12px","borderRadius":"6px","cursor":"pointer","display":"inline-flex","alignItems":"center","gap":"5px","transition":"all 0.15s"}}>
                      🟢 Green
                    </button>
                    <button type="button" id="btnNarrativeYellow" onClick={(e) => { try { (window.handleFalseNarrativeSelect('YELLOW')); } catch(err) { console.error(err); } }}
                      style={{"background":"#78350f","border":"1px solid #d97706","color":"#fde68a","fontSize":"0.8rem","fontWeight":"700","padding":"6px 12px","borderRadius":"6px","cursor":"pointer","display":"inline-flex","alignItems":"center","gap":"5px","transition":"all 0.15s"}}>
                      🟡 Yellow
                    </button>
                    <button type="button" id="btnNarrativeRed" onClick={(e) => { try { (window.handleFalseNarrativeSelect('RED')); } catch(err) { console.error(err); } }}
                      style={{"background":"#7f1d1d","border":"1px solid #dc2626","color":"#fca5a5","fontSize":"0.8rem","fontWeight":"700","padding":"6px 12px","borderRadius":"6px","cursor":"pointer","display":"inline-flex","alignItems":"center","gap":"5px","transition":"all 0.15s"}}>
                      🔴 Red
                    </button>
                    <button type="button" id="btnNarrativeOff" onClick={(e) => { try { (window.handleFalseNarrativeSelect('OFF')); } catch(err) { console.error(err); } }}
                      style={{"background":"#1e293b","border":"1px solid #475569","color":"#cbd5e1","fontSize":"0.8rem","fontWeight":"700","padding":"6px 12px","borderRadius":"6px","cursor":"pointer","display":"inline-flex","alignItems":"center","gap":"5px","transition":"all 0.15s"}}>
                      ⚪ Off (Live)
                    </button>
                  </div>
                </div>
              </div>
            </div>
    
            {/*  YOUPI SHOWCASE STORE PORT 5000 MASTER TOGGLE CARD  */}
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm"
              style={{"border":"2px solid #38bdf8","background":"linear-gradient(135deg, rgba(56,189,248,0.06) 0%, rgba(15,23,42,0.95) 100%)"}}>
              <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","flexWrap":"wrap","gap":"1rem"}}>
                <div>
                  <div style={{"display":"flex","alignItems":"center","gap":"0.6rem"}}>
                    <span style={{"fontSize":"1.35rem"}}>🛍️</span>
                    <strong style={{"fontSize":"1.15rem","color":"#ffffff"}}>YOUPI Showcase Store (Port 5000)</strong>
                    <span className="badge" id="cardStoreBadge"
                      style={{"fontSize":"0.8rem","padding":"0.3rem 0.75rem"}}>CHECKING...</span>
                  </div>
                  <p
                    style={{"fontSize":"0.84rem","color":"var(--text-muted)","marginTop":"0.4rem","maxWidth":"720px","lineHeight":"1.5"}}>
                    Toggle the public YOUPI Showcase Store on or off anytime. When disabled, the Node process is terminated
                    and host port <code>5000</code> is freed. When enabled, it launches instantly.
                  </p>
                </div>
                <div style={{"display":"flex","alignItems":"center","gap":"0.75rem"}}>
                  <a href="http://localhost:5000" id="btnOpenStoreLink" target="_blank" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{"fontSize":"0.85rem","padding":"0.6rem 1.1rem","textDecoration":"none"}}>
                    🌐 Open Store (5000) ↗
                  </a>
                  <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" id="btnToggleYoupiStore"
                    style={{"fontSize":"0.88rem","padding":"0.65rem 1.4rem"}} onClick={(e) => { try { (window.toggleYoupiStore()); } catch(err) { console.error(err); } }}>
                    ⚡ Toggle Port 5000
                  </button>
                </div>
              </div>
            </div>
    
            {/*  MANAGED PROCESSES SUPERVISOR TABLE  */}
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
              <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
                <div>
                  <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">🖥️ Managed Host Processes (Unified Control Center)</div>
                  <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Native child process supervisor. Zero external container dependencies. Start,
                    stop, or restart any gateway service independently.</div>
                </div>
                <div style={{"display":"flex","gap":"0.5rem","alignItems":"center"}}>
                  <button className="btn btn-success inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.startAllServices()); } catch(err) { console.error(err); } }}>▶ Start All</button>
                  <button className="btn btn-danger inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.stopAllServices()); } catch(err) { console.error(err); } }}>⏹ Stop All</button>
                  <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.loadServices()); } catch(err) { console.error(err); } }}>🔄 Refresh</button>
                </div>
              </div>
    
              <div style={{"overflowX":"auto"}}>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Service Name &amp; ID</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Port</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">PID</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Status</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Uptime</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Process Controls</th>
                    </tr>
                  </thead>
                  <tbody id="servicesTableBody">
                    <tr>
                      <td colSpan="6" style={{"textAlign":"center","color":"var(--text-muted)","padding":"1.5rem"}}>Loading managed
                        processes...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
    
            {/*  REAL-TIME AGGREGATE TERMINAL LOGS CONSOLE  */}
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
              <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
                <div>
                  <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">📜 Real-Time Aggregate Terminal Console</div>
                  <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Live SSE stdout/stderr broadcast stream from all active processes.</div>
                </div>
                <div style={{"display":"flex","gap":"0.6rem","alignItems":"center"}}>
                  <select className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="logServiceFilter" style={{"padding":"0.4rem 0.75rem","fontSize":"0.78rem"}} onChange={(e) => { try { (window.filterLogs()); } catch(err) { console.error(err); } }}>
                    <option value="ALL">All Services</option>
                    <option value="payment-api">payment-api (6100)</option>
                    <option value="checkout-portal">checkout-portal (7000)</option>
                    <option value="merchant-admin">merchant-admin (6001)</option>
                    <option value="coin-wallet-store">coin-wallet-store (5000)</option>
                    <option value="sms-observer">sms-observer (6002)</option>
                    <option value="gmail-observer">gmail-observer (6003)</option>
                  </select>
                  <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.4rem 0.75rem","fontSize":"0.78rem"}}
                    onClick={(e) => { try { (window.clearLogsConsole()); } catch(err) { console.error(err); } }}>Clear Console</button>
                </div>
              </div>
    
              <div className="terminal-container rounded-xl border border-slate-800 bg-[#020617] p-4 h-[380px] overflow-y-auto font-mono text-xs text-cyan-300 leading-relaxed shadow-inner" id="terminalLogWindow">
                <div className="log-line log-system">
                  <span className="log-ts">[Ready]</span> Unified Control Center operational. Awaiting log streams...
                </div>
              </div>
            </div>
    
          </div>
    </>
  );
}
