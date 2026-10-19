import React from 'react';

export default function SubViewPaymentObservers() {
  return (
    <>
          <div id="subViewOpsObservers" hidden>
            <div
              style={{"fontSize":"1.15rem","fontWeight":"800","color":"var(--text-heading)","marginBottom":"1rem","display":"flex","alignItems":"center","gap":"0.5rem"}}
              dangerouslySetInnerHTML={{ __html: '<span>📡</span> Payment Observers (SMS & Gmail)' }}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/*  Android Companion Card  */}
              <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" style={{"marginBottom":"0"}}>
                <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
                  <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">📱 Android SMS Gateway</div>
                  <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" id="smsGatewayBadge">STANDBY</span>
                </div>
                <p className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" style={{"marginBottom":"1rem"}}>
                  Native Android observer app captures credit SMS notifications in real-time from bank-linked handsets.
                </p>
                <div
                  style={{"background":"var(--bg-surface)","border":"1px solid var(--border)","borderRadius":"0.5rem","padding":"1rem","marginBottom":"1rem"}}>
                  <div style={{"fontSize":"0.8rem","fontWeight":"700","color":"var(--text-muted)","marginBottom":"0.4rem"}}>Enrollment
                    Secret:</div>
                  <code id="smsTokenVal" style={{"color":"var(--info)","fontWeight":"700","fontSize":"0.85rem"}}>Loading...</code>
                  <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"fontSize":"0.7rem","padding":"0.2rem 0.5rem","marginLeft":"0.5rem"}}
                    onClick={(e) => { try { (window.copySmsToken()); } catch(err) { console.error(err); } }}>📋 Copy</button>
                </div>
                <div style={{"display":"flex","gap":"0.5rem"}}>
                  <a className="btn btn-success inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" href="/youpi-sms-gateway.apk" download="youpi-sms-gateway.apk">📲 Download
                    Companion APK</a>
                  <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.switchSection('developerHub', 'subTabAndroid')); } catch(err) { console.error(err); } }}>Configure
                    Pairing ↗</button>
                </div>
              </div>
    
              {/*  Gmail Direct API Card  */}
              <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" style={{"marginBottom":"0"}}>
                <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
                  <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">📧 Gmail Direct API</div>
                  <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" id="gmailConfigBadge">NOT CONFIGURED</span>
                </div>
                <p className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" style={{"marginBottom":"1rem"}}>
                  Direct Google Cloud OAuth poller reading transaction credit alerts directly from your merchant inbox.
                </p>
                <div
                  style={{"background":"var(--bg-surface)","border":"1px solid var(--border)","borderRadius":"0.5rem","padding":"1rem","marginBottom":"1rem"}}>
                  <div style={{"fontSize":"0.8rem","color":"var(--text-muted)","lineHeight":"1.5"}}>
                    Dual-verification engine matches transactions across both SMS and Gmail channels for 100% fraud
                    immunity.
                  </div>
                </div>
                <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.switchSection('developerHub', 'subTabGmail')); } catch(err) { console.error(err); } }}>Configure Gmail API
                  ↗</button>
              </div>
            </div>
          </div>
    </>
  );
}
