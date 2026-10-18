import React from 'react';

export default function BanDetailsModal() {
  return (
    <>
      <div id="banDetailsModal" className="modal-overlay fixed inset-0 [&:not([hidden])]:flex items-center justify-center p-4 z-[10000] backdrop-blur-sm bg-black/75" hidden>
        <div className="modal-box max-w-lg w-full rounded-2xl p-7 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl"
          style={{"maxWidth":"850px","maxHeight":"90vh","overflowY":"auto","background":"#0f172a","border":"1px solid #334155","borderRadius":"12px","padding":"1.75rem","boxShadow":"0 25px 50px -12px rgba(0,0,0,0.7)"}}>
          <div
            style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"1.25rem","borderBottom":"1px solid #1e293b","paddingBottom":"1rem"}}>
            <div style={{"display":"flex","alignItems":"center","gap":"0.6rem"}}>
              <span style={{"fontSize":"1.5rem"}}>🚨</span>
              <div>
                <h3 style={{"color":"#f87171","margin":"0","fontSize":"1.25rem","fontWeight":"800","letterSpacing":"-0.02em"}}>Forensic
                  Security &amp; Ban Evidence Dossier</h3>
                <div style={{"color":"#94a3b8","fontSize":"0.78rem"}}>Immutable tamper-proof record of fraudulent payment injection
                  attempt</div>
              </div>
            </div>
            <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.35rem 0.65rem"}} onClick={(e) => { try { (window.closeBanDetailsModal()); } catch(err) { console.error(err); } }}>✕</button>
          </div>
    
          <div id="banDetailsModalBody">
            <div style={{"textAlign":"center","padding":"2rem","color":"#94a3b8"}}>Loading ban evidence...</div>
          </div>
    
          <div
            style={{"marginTop":"1.5rem","display":"flex","justifyContent":"space-between","alignItems":"center","borderTop":"1px solid #1e293b","paddingTop":"1rem"}}>
            <div style={{"fontSize":"0.75rem","color":"#64748b"}}>Security Engine v2 &bull; YOUPI PG</div>
            <div style={{"display":"flex","gap":"0.75rem"}}>
              <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (window.closeBanDetailsModal()); } catch(err) { console.error(err); } }}>Close</button>
              <button id="btnModalUnbanTrigger" className="btn btn-success inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed"
                style={{"background":"#059669","borderColor":"#059669","fontWeight":"700"}} onClick={(e) => { try { (window.handleModalUnbanClick()); } catch(err) { console.error(err); } }}>🔓
                Unban Customer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
