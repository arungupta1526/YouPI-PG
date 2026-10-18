import React from 'react';

export default function ManualBanModal() {
  return (
    <>
      <div id="manualBanModal" className="modal-overlay fixed inset-0 [&:not([hidden])]:flex items-center justify-center p-4 z-[10000] backdrop-blur-sm bg-black/75" hidden>
        <div className="modal-box max-w-lg w-full rounded-2xl p-7 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl"
          style={{"maxWidth":"560px","background":"#0f172a","border":"1px solid #334155","borderRadius":"12px","padding":"1.75rem"}}>
          <div
            style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"1rem","borderBottom":"1px solid #1e293b","paddingBottom":"0.75rem"}}>
            <h3 style={{"color":"#f87171","margin":"0","display":"flex","alignItems":"center","gap":"0.5rem","fontSize":"1.15rem"}}>
              <span>🚫</span> Manually Ban Abusive Customer
            </h3>
            <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.25rem 0.5rem"}} onClick={(e) => { try { (new Function('e', "closeManualBanModal()"))(e); } catch(err) { console.error(err); } }}>✕</button>
          </div>
    
          <div style={{"marginBottom":"1rem"}}>
            <label style={{"display":"block","fontSize":"0.8rem","fontWeight":"700","color":"#e2e8f0","marginBottom":"0.4rem"}}>
              Select Customer <span style={{"color":"#f87171"}}>*</span>
            </label>
            <select className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="manualBanCustomerSelect"
              style={{"width":"100%","background":"#020617","border":"1px solid #334155","color":"#f8fafc","borderRadius":"6px","padding":"0.55rem","fontSize":"0.85rem"}}
              onChange={(e) => { try { (new Function('e', "handleManualBanCustomerChange()"))(e); } catch(err) { console.error(err); } }}>
              <option value="">-- Choose Existing Customer --</option>
            </select>
          </div>
    
          <div id="manualBanCustomInputs" style={{"marginBottom":"1rem"}}>
            <label style={{"display":"block","fontSize":"0.8rem","fontWeight":"700","color":"#e2e8f0","marginBottom":"0.4rem"}}>
              Or Enter Customer ID / Phone / Email
            </label>
            <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="manualBanCustomerIdInput" placeholder="Customer UUID, mobile (+91...), or email"
              style={{"width":"100%","background":"#020617","border":"1px solid #334155","color":"#f8fafc","borderRadius":"6px","padding":"0.55rem","fontSize":"0.85rem"}} />
          </div>
    
          <div style={{"marginBottom":"1rem"}}>
            <label style={{"display":"block","fontSize":"0.8rem","fontWeight":"700","color":"#e2e8f0","marginBottom":"0.4rem"}}>
              Mandatory Reason <span style={{"color":"#f87171"}}>*</span>
            </label>
            <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="manualBanReasonInput" defaultValue="MANUAL_BAN"
              placeholder="e.g. Abusive behavior, chargeback dispute, manual fraud notice"
              style={{"width":"100%","background":"#020617","border":"1px solid #334155","color":"#f8fafc","borderRadius":"6px","padding":"0.55rem","fontSize":"0.85rem"}} />
          </div>
    
          <div style={{"marginBottom":"1.25rem"}}>
            <label style={{"display":"block","fontSize":"0.8rem","fontWeight":"700","color":"#e2e8f0","marginBottom":"0.4rem"}}>
              Optional Notes / Investigation Details
            </label>
            <textarea className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="manualBanNotesInput" rows="3"
              placeholder="Additional merchant operator notes, reference ticket, etc."
              style={{"width":"100%","background":"#020617","border":"1px solid #334155","color":"#f8fafc","borderRadius":"6px","padding":"0.55rem","fontSize":"0.85rem","resize":"vertical"}}></textarea>
          </div>
    
          <div style={{"display":"flex","justifyContent":"flex-end","gap":"0.75rem","borderTop":"1px solid #1e293b","paddingTop":"1rem"}}>
            <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "closeManualBanModal()"))(e); } catch(err) { console.error(err); } }}>Cancel</button>
            <button className="btn btn-danger inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"background":"#dc2626","borderColor":"#dc2626","fontWeight":"700"}}
              onClick={(e) => { try { (new Function('e', "executeManualBan()"))(e); } catch(err) { console.error(err); } }}>Confirm Ban</button>
          </div>
        </div>
      </div>
    </>
  );
}
