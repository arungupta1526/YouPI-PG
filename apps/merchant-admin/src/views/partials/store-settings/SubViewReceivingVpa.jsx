import React from 'react';

export default function SubViewReceivingVpa() {
  return (
    <>
          <div id="subViewStoreVpa" hidden>
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
              <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
                <div>
                  <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">⚡ Receiving UPI Accounts &amp; Multiple VPAs</div>
                  <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Manage receiving VPAs. <strong>Only ONE VPA can be active at a time</strong> for
                    gateway payments. Activating a VPA automatically rotates and deactivates all others.</div>
                </div>
                <span className="badge badge-success inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20" id="activeVpaModeBadge">Active Gateway VPA</span>
              </div>
    
              {/*  Current Active VPA Callout Box  */}
              <div id="activeVpaCallout"
                style={{"background":"var(--bg-surface)","border":"1px solid var(--border)","borderRadius":"0.75rem","padding":"1.25rem","marginBottom":"1.5rem","display":"flex","justifyContent":"space-between","alignItems":"center","flexWrap":"wrap","gap":"1rem"}}>
                <div>
                  <div style={{"fontSize":"0.75rem","fontWeight":"800","color":"var(--text-muted)","textTransform":"uppercase"}}>
                    Currently Active Gateway VPA</div>
                  <div style={{"fontSize":"1.45rem","fontWeight":"900","color":"var(--primary)","margin":"0.25rem 0"}}
                    id="activeVpaIdDisplay">Loading active VPA...</div>
                  <div style={{"fontSize":"0.85rem","color":"var(--text-muted)"}} id="activeVpaPayeeDisplay">Payee: -</div>
                </div>
                <div style={{"textAlign":"right"}}>
                  <div style={{"fontSize":"0.75rem","color":"var(--text-muted)","marginBottom":"0.3rem"}}>Checkout Mode</div>
                  <div style={{"fontSize":"0.9rem","fontWeight":"800","color":"var(--success)"}}>✓ Direct Dynamic UPI QR Gateway
                  </div>
                </div>
              </div>
    
              {/*  Add New VPA Section  */}
              <div className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
                <h4 style={{"marginBottom":"0.85rem","fontSize":"0.95rem","color":"var(--text-heading)"}}>➕ Add New Receiving UPI VPA
                </h4>
                <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1rem","marginBottom":"1rem"}}>
                  <div>
                    <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.3rem"}}>UPI ID /
                      VPA</label>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="newUpiVpa" type="text" placeholder="e.g. 9876543210@axl or merchant@okhdfcbank"
                      style={{"width":"100%"}} />
                  </div>
                  <div>
                    <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.3rem"}}>Payee / Merchant
                      Display Name</label>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="newUpiPayee" type="text" placeholder="e.g. YOUPI Store or Store Name" style={{"width":"100%"}} />
                  </div>
                </div>
                <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","flexWrap":"wrap","gap":"1rem"}}>
                  <label
                    style={{"display":"flex","alignItems":"center","gap":"0.5rem","fontSize":"0.85rem","fontWeight":"600","cursor":"pointer"}}>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" id="newUpiActivateNow" defaultChecked style={{"width":"16px","height":"16px"}} />
                    <span>Set as active VPA for customer checkout immediately</span>
                  </label>
                  <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.addNewUpiAccount()); } catch(err) { console.error(err); } }}>➕ Save &amp; Add UPI Account</button>
                </div>
              </div>
    
              {/*  Saved VPAs Table  */}
              <h4 style={{"marginBottom":"0.75rem","fontSize":"0.95rem","color":"var(--text-heading)"}}>📋 Saved Receiving UPI
                Accounts</h4>
              <div style={{"overflowX":"auto"}}>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">UPI ID (VPA)</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Payee Name</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Gateway Status</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Slot State</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Created</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody id="upiAccountsTableBody">
                    <tr>
                      <td colSpan="6" style={{"textAlign":"center","color":"var(--text-muted)","padding":"1.5rem"}}>Loading UPI
                        accounts...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    </>
  );
}
