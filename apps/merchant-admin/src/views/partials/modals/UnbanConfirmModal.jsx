import React from 'react';

export default function UnbanConfirmModal() {
  return (
    <>
      <div id="unbanConfirmModal" className="modal-overlay fixed inset-0 [&:not([hidden])]:flex items-center justify-center p-4 z-[10000] backdrop-blur-sm bg-black/75" hidden>
        <div className="modal-box max-w-lg w-full rounded-2xl p-7 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl"
          style={{"maxWidth":"540px","background":"#0f172a","border":"1px solid #334155","borderRadius":"12px","padding":"1.75rem"}}>
          <div
            style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"1rem","borderBottom":"1px solid #1e293b","paddingBottom":"0.75rem"}}>
            <h3 style={{"color":"#34d399","margin":"0","display":"flex","alignItems":"center","gap":"0.5rem","fontSize":"1.15rem"}}>
              <span>🔓</span> Restore Customer Access (Unban)
            </h3>
            <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.25rem 0.5rem"}} onClick={(e) => { try { (new Function('e', "closeUnbanModal()"))(e); } catch(err) { console.error(err); } }}>✕</button>
          </div>
    
          <p style={{"fontSize":"0.88rem","color":"#cbd5e1","lineHeight":"1.6","marginBottom":"1.25rem"}}>
            Are you sure you want to unban customer <strong id="unbanCustName" style={{"color":"#ffffff"}}></strong> (<span
              id="unbanCustPhone" style={{"color":"#38bdf8","fontFamily":"monospace"}}></span>)?
            <br /><span style={{"color":"#94a3b8","fontSize":"0.8rem","display":"block","marginTop":"0.4rem"}}>This will restore their
              status to <strong style={{"color":"#34d399"}}>ACTIVE</strong> and immediately restore their ability to initiate
              payments on the gateway.</span>
          </p>
    
          <div style={{"marginBottom":"1.25rem"}}>
            <label style={{"display":"block","fontSize":"0.8rem","fontWeight":"700","color":"#e2e8f0","marginBottom":"0.4rem"}}>
              Mandatory Reason for Unbanning <span style={{"color":"#f87171"}}>*</span>
            </label>
            <select className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all form-control" id="unbanReasonSelect"
              style={{"width":"100%","marginBottom":"0.5rem","background":"#020617","border":"1px solid #334155","color":"#f8fafc","borderRadius":"6px","padding":"0.55rem","fontSize":"0.85rem"}}
              onChange={(e) => { try { (new Function('e', "handleUnbanReasonChange()"))(e); } catch(err) { console.error(err); } }}>
              <option value="Customer verified via phone call">Customer verified via phone call</option>
              <option value="False positive investigated">False positive investigated</option>
              <option value="Testing override">Testing override</option>
              <option value="Dispute resolved with merchant">Dispute resolved with merchant</option>
              <option value="OTHER">Other custom reason...</option>
            </select>
            <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="unbanReasonCustom" placeholder="Specify mandatory custom unban reason..."
              style={{"width":"100%","display":"none","background":"#020617","border":"1px solid #334155","color":"#f8fafc","borderRadius":"6px","padding":"0.55rem","fontSize":"0.85rem"}} />
          </div>
    
          <div
            style={{"display":"flex","justifyContent":"flex-end","gap":"0.75rem","marginTop":"1.5rem","borderTop":"1px solid #1e293b","paddingTop":"1rem"}}>
            <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "closeUnbanModal()"))(e); } catch(err) { console.error(err); } }}>Cancel</button>
            <button id="btnConfirmUnbanAction" className="btn btn-success inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed"
              style={{"background":"#059669","borderColor":"#059669","fontWeight":"700"}} onClick={(e) => { try { (new Function('e', "executeUnbanCustomer()"))(e); } catch(err) { console.error(err); } }}>Confirm
              Unban</button>
          </div>
        </div>
      </div>
    </>
  );
}
