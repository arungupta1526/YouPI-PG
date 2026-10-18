import React from 'react';

export default function SubViewBannedUsers() {
  return (
    <>
          <div id="subViewSecBanned">
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
              <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3" style={{"flexWrap":"wrap","gap":"1rem"}}>
                <div>
                  <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">🚫 Banned Customer Identities</div>
                  <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Server-enforced access blocking. Positive identification of fraudulent payment
                    injection or manual administrative bans.</div>
                </div>
                <div style={{"display":"flex","gap":"0.5rem","flexWrap":"wrap","alignItems":"center"}}>
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="bannedSearchInput" placeholder="Search by name, email, or phone..."
                    style={{"width":"240px","fontSize":"0.82rem","padding":"0.45rem 0.75rem"}}
                    onInput={(e) => { try { (window.filterBannedUsers(e.currentTarget.value)); } catch(err) { console.error(err); } }} />
                  <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.fetchBannedUsers()); } catch(err) { console.error(err); } }}>🔄 Refresh</button>
                  <button className="btn btn-danger inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.openManualBanModal()); } catch(err) { console.error(err); } }}>➕ Ban User</button>
                </div>
              </div>
    
              <div style={{"overflowX":"auto"}}>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Name</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Email</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Phone</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Ban Status</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Ban Timestamp</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Ban Reason</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Payment Session</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Last Device</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Source</th>
                      <th style={{"textAlign":"right"}}>Actions</th>
                    </tr>
                  </thead>
                  <tbody id="bannedUsersTableBody">
                    <tr>
                      <td colSpan="10" style={{"textAlign":"center","color":"var(--text-muted)","padding":"2rem"}}>
                        Loading banned users...
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    </>
  );
}
