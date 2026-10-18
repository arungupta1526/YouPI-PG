import React from 'react';

export default function SubViewBanHistory() {
  return (
    <>
          <div id="subViewSecHistory" hidden>
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
              <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
                <div>
                  <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">📜 Ban &amp; Unban History Audit Trail</div>
                  <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Historical chronological audit trail of all automatic bans, unbans, manual bans,
                    and re-bans.</div>
                </div>
                <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.fetchSecurityHistory()); } catch(err) { console.error(err); } }}>🔄 Refresh</button>
              </div>
    
              <div style={{"overflowX":"auto"}}>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Timestamp</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Action</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Actor</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Customer Identity</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Details &amp; Transitions</th>
                    </tr>
                  </thead>
                  <tbody id="securityHistoryTableBody">
                    <tr>
                      <td colSpan="5" style={{"textAlign":"center","color":"var(--text-muted)","padding":"2rem"}}>
                        Loading ban history...
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
