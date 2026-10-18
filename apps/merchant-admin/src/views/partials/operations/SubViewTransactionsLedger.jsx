import React from 'react';

export default function SubViewTransactionsLedger() {
  return (
    <>
          <div id="subViewOpsTransactions" hidden>
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
              <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
                <div>
                  <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">💳 Payment Transactions Ledger</div>
                  <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Comprehensive transaction audit history with automated bank observer attribution
                    &amp; verification tiers.</div>
                </div>
                <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.fetchPaymentsLedger()); } catch(err) { console.error(err); } }}>Refresh</button>
              </div>
              <div style={{"overflowX":"auto"}}>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Order ID</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Payment ID</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Amount</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Method</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Status</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Verification Tier</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Channel Sources</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Created At</th>
                      <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Completed At</th>
                    </tr>
                  </thead>
                  <tbody id="paymentsLedgerTbody">
                    <tr>
                      <td colSpan="9" style={{"textAlign":"center","padding":"1.5rem"}}>Loading transactions...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    </>
  );
}
