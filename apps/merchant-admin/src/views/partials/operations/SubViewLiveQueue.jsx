import React from 'react';

export default function SubViewLiveQueue() {
  return (
    <>
          <div id="subViewOpsLive">
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
              <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
                <div>
                  <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">🔴 Real-Time Receiving Account Slot Ownership (UPI Invariant)</div>
                  <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Guarantees zero payment collision by rotating dynamic slots per receiving UPI
                    VPA.</div>
                </div>
                <div style={{"display":"flex","gap":"0.5rem"}}>
                  <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "fetchLiveData()"))(e); } catch(err) { console.error(err); } }}>Force Refresh</button>
                  <button className="btn btn-danger inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "promptClearAllQueue()"))(e); } catch(err) { console.error(err); } }}>Clear Waiting Queue</button>
                </div>
              </div>
    
              <div className="queue-grid grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5 mb-6">
                {/*  Active 5:00 Slot  */}
                <div className="slot-card rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-5 text-center bg-slate-50 dark:bg-slate-950 transition-all" id="slotActiveBox">
                  <div style={{"fontSize":"0.8rem","fontWeight":"700","color":"var(--text-muted)","textTransform":"uppercase"}}>
                    Active Slot (5-Minute Window)</div>
                  <div id="slotActiveContent" style={{"padding":"1rem 0","color":"var(--text-muted)"}}>
                    No customer actively checking out right now.
                  </div>
                </div>
    
                {/*  Processing 30s Slot  */}
                <div className="slot-card rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-5 text-center bg-slate-50 dark:bg-slate-950 transition-all" id="slotProcBox">
                  <div style={{"fontSize":"0.8rem","fontWeight":"700","color":"var(--text-muted)","textTransform":"uppercase"}}>
                    Processing Slot (30s Verification Window)</div>
                  <div id="slotProcContent" style={{"padding":"1rem 0","color":"var(--text-muted)"}}>
                    No payment in verification window.
                  </div>
                </div>
              </div>
    
              {/*  Waiting Queue Table  */}
              <div style={{"marginTop":"1.5rem"}}>
                <div style={{"fontSize":"0.92rem","fontWeight":"700","marginBottom":"0.75rem","color":"var(--text-heading)"}}>
                  ⏳ Waiting Customer Queue
                </div>
                <div style={{"overflowX":"auto"}}>
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Queue #</th>
                        <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Order</th>
                        <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Amount</th>
                        <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Status</th>
                        <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Enqueued At</th>
                      </tr>
                    </thead>
                    <tbody id="queueTableBody">
                      <tr>
                        <td colSpan="5" style={{"textAlign":"center","color":"var(--text-muted)","padding":"1rem"}}>Waiting queue is
                          empty.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
