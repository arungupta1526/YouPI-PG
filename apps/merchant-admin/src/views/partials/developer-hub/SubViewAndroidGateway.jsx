import React from 'react';

export default function SubViewAndroidGateway() {
  return (
    <>
          <div id="subViewDevAndroid" hidden>
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
              <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
                <div>
                  <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">📱 Android SMS Companion App &amp; Device Pairing</div>
                  <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Install the APK on your bank-linked phone and scan the pairing QR code to
                    auto-forward incoming bank credit SMS.</div>
                </div>
                <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" id="smsDevBadge">STANDBY</span>
              </div>
    
              <div
                style={{"background":"#090d16","border":"1px solid var(--border)","borderRadius":"0.75rem","padding":"1.25rem","textAlign":"center","marginBottom":"1.5rem"}}>
                <div style={{"fontSize":"0.85rem","fontWeight":"800","color":"#cbd5e1","marginBottom":"0.75rem"}}>1. Scan to Pair Phone
                </div>
                <div id="smsPairQrBox"
                  style={{"width":"240px","height":"240px","margin":"0 auto","background":"#ffffff","borderRadius":"0.75rem","padding":"12px","display":"flex","alignItems":"center","justifyContent":"center","boxShadow":"0 4px 16px rgba(0,0,0,0.5)"}}>
                  Loading Pairing QR...
                </div>
                <div style={{"fontSize":"0.8rem","color":"#94a3b8","margin":"0.75rem 0"}}>
                  Enrollment Secret: <code id="smsTokenVal2" style={{"color":"#38bdf8","fontWeight":"700"}}>Loading...</code>
                  <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"fontSize":"0.7rem","padding":"0.2rem 0.5rem","marginLeft":"0.5rem"}}
                    onClick={(e) => { try { (window.copySmsToken()); } catch(err) { console.error(err); } }}>📋 Copy</button>
                </div>
                <div style={{"display":"flex","justifyContent":"center","gap":"0.5rem"}}>
                  <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.fetchSmsPairQr()); } catch(err) { console.error(err); } }}>🔄 Refresh QR</button>
                  <a className="btn btn-success inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" href="/youpi-sms-gateway.apk" download="youpi-sms-gateway.apk">📲 Download
                    Android APK</a>
                </div>
              </div>
    
              <div style={{"marginBottom":"1.5rem"}}>
                <div style={{"fontSize":"0.88rem","fontWeight":"700","color":"#f1f5f9","marginBottom":"0.5rem"}}>Paired Mobile
                  Observers</div>
                <div style={{"overflowX":"auto"}}>
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Device Name</th>
                        <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Device ID</th>
                        <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Paired At</th>
                        <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Action</th>
                      </tr>
                    </thead>
                    <tbody id="smsDevicesTableBody">
                      <tr>
                        <td colSpan="4" style={{"textAlign":"center","color":"var(--text-muted)","padding":"1rem"}}>No devices paired
                        yet. Scan QR above to pair.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
    
              {/*  Interactive Test Bank SMS Sender  */}
              <div style={{"background":"#090d16","border":"1px solid var(--border)","borderRadius":"0.5rem","padding":"1rem"}}>
                <div style={{"fontSize":"0.85rem","fontWeight":"700","color":"#38bdf8","marginBottom":"0.5rem"}}>🧪 Test Bank SMS
                  Parser</div>
                <div style={{"display":"flex","gap":"0.5rem","marginBottom":"0.5rem","flexWrap":"wrap"}}>
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="testSmsSender" defaultValue="HDFCBK" placeholder="Sender (e.g. HDFCBK)"
                    style={{"width":"120px"}} />
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="testSmsBody"
                    defaultValue="Dear Customer, A/C *1234 credited by Rs 500.00 on 30-Sep-26 by UPI/9212339720/REF987654321 - HDFC Bank"
                    placeholder="SMS Body" style={{"flex":"1","minWidth":"240px"}} />
                  <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.sendTestBankSms()); } catch(err) { console.error(err); } }}>Dispatch</button>
                </div>
                <div id="testSmsResult" style={{"fontSize":"0.78rem","color":"#94a3b8"}}></div>
              </div>
            </div>
          </div>
    </>
  );
}
