import React from 'react';

export default function KpiSummary() {
  return (
    <>
          <div className="kpi-row grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4 mb-6">
            <div className="kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <div className="kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Today's Volume</div>
              <div className="kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white" id="kpiVol" style={{"color":"var(--kpi-vol-color)"}}>₹0.00</div>
            </div>
            <div className="kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <div className="kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Successful Payments</div>
              <div className="kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white" id="kpiSuccessCount" style={{"color":"var(--kpi-success-color)"}}>0</div>
            </div>
            <div className="kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <div className="kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">In Waiting Queue</div>
              <div className="kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white" id="kpiQueueCount" style={{"color":"var(--kpi-queue-color)"}}>0</div>
            </div>
            <div className="kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <div className="kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Pending Counter Payments</div>
              <div className="kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white" id="kpiPendingCounterCount" style={{"color":"var(--kpi-pending-color)"}}>0</div>
            </div>
          </div>
    
          {/*  Verification Standards Metric Row (2-Layer Engine: SMS + Gmail)  */}
          <div className="kpi-row grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4 mb-6" style={{"marginTop":"-0.5rem","marginBottom":"1.5rem"}}>
            <div className="kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <div className="kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Single Verified (1 Source)</div>
              <div className="kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white" id="kpiSingleVerify" style={{"color":"var(--info)","fontSize":"1.5rem"}}>0</div>
            </div>
            <div className="kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <div className="kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Dual Verified (2 Sources: SMS + Gmail)</div>
              <div className="kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white" id="kpiDualVerify" style={{"color":"var(--success)","fontSize":"1.5rem"}}>0</div>
            </div>
          </div>
    </>
  );
}
