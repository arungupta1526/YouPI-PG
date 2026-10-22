import React from 'react';

export default function SubViewSellingModes() {
  return (
    <>
          <div id="subViewStoreModes" hidden>
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
              <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
                <div>
                  <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">🏪 Store Selling Mode &amp; Payment Modalities</div>
                  <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Toggle between <strong>Online Selling Mode</strong> (E-Commerce) or
                    <strong>Offline Selling Mode</strong> (Physical till/POS desk). Reflects instantly on checkout.
                  </div>
                </div>
                <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" id="currentSellingModeBadge">ONLINE SELLING MODE</span>
              </div>
    
              {/*  Mode Segmented Switch  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div id="cardModeOnline" onClick={(e) => { try { (window.setSellingMode('ONLINE', true)); } catch(err) { console.error(err); } }} className="selling-mode-card mode-selected-online">
                  <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.5rem"}}>
                    <strong style={{"fontSize":"1rem","color":"var(--text-heading)"}}>🌐 Online Selling Mode</strong>
                    <span className="badge badge-primary" id="badgeOnlineActive">ACTIVE</span>
                  </div>
                  <p style={{"fontSize":"0.82rem","color":"var(--text-muted)","lineHeight":"1.45","margin":"0"}}>
                    For websites and courier deliveries. Supports <strong>UPI QR</strong> (always on) and optional
                    <strong>Cash on Delivery (COD)</strong>.
                  </p>
                </div>
    
                <div id="cardModeOffline" onClick={(e) => { try { (window.setSellingMode('OFFLINE', true)); } catch(err) { console.error(err); } }} className="selling-mode-card rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 cursor-pointer transition-all hover:border-slate-400">
                  <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.5rem"}}>
                    <strong style={{"fontSize":"1rem","color":"var(--text-heading)"}}>🏬 Offline Selling Mode</strong>
                    <span className="badge badge-warning inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20" id="badgeOfflineActive" style={{"display":"none"}}>ACTIVE</span>
                  </div>
                  <p style={{"fontSize":"0.82rem","color":"var(--text-muted)","lineHeight":"1.45","margin":"0"}}>
                    For retail stores and physical checkout desks. Supports <strong>UPI QR</strong> (always on),
                    configurable <strong>Cash</strong>, and configurable <strong>Card POS</strong>.
                  </p>
                </div>
              </div>
    
              {/*  ONLINE PAYMENT MODALITIES  */}
              <div id="panelOnlineMode" className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
                <div style={{"fontSize":"0.88rem","fontWeight":"700","color":"var(--info)","marginBottom":"0.75rem"}}>🌐 Online Payment
                  Options</div>
                <div style={{"display":"flex","flexDirection":"column","gap":"1rem"}}>
                  <div
                    style={{"display":"flex","alignItems":"flex-start","justifyContent":"space-between","padding":"0.85rem","background":"var(--bg-card)","border":"1px solid var(--border)","borderRadius":"0.5rem"}}>
                    <div>
                      <div style={{"display":"flex","alignItems":"center","gap":"0.5rem","marginBottom":"0.25rem"}}>
                        <strong style={{"fontSize":"0.9rem","color":"var(--text-heading)"}}>Digital UPI Payments (QR Code)</strong>
                        <span className="badge badge-success inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20" style={{"fontSize":"0.72rem"}}>Default · Always Enabled</span>
                      </div>
                      <div style={{"fontSize":"0.8rem","color":"var(--text-muted)"}}>Direct QR code scan &amp; pay via any UPI app
                        (GPay, PhonePe, Paytm, CRED).</div>
                    </div>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" checked disabled style={{"width":"20px","height":"20px","opacity":"0.85"}} />
                  </div>
    
                  <label
                    style={{"display":"flex","alignItems":"flex-start","justifyContent":"space-between","padding":"0.85rem","background":"var(--bg-card)","border":"1px solid var(--border)","borderRadius":"0.5rem","cursor":"pointer"}}>
                    <div>
                      <div style={{"display":"flex","alignItems":"center","gap":"0.5rem","marginBottom":"0.25rem"}}>
                        <strong style={{"fontSize":"0.9rem","color":"var(--text-heading)"}}>Cash on Delivery (COD)</strong>
                        <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" style={{"fontSize":"0.72rem"}}>Doorstep Cash</span>
                      </div>
                      <div style={{"fontSize":"0.8rem","color":"var(--text-muted)"}}>Customers confirm order with pre-purchase
                        verification and pay cash upon package arrival.</div>
                    </div>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" id="toggleMethodCod" defaultChecked style={{"width":"20px","height":"20px","cursor":"pointer"}} />
                  </label>
                </div>
              </div>
    
              {/*  OFFLINE PAYMENT MODALITIES  */}
              <div id="panelOfflineMode" hidden className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
                <div style={{"fontSize":"0.88rem","fontWeight":"700","color":"var(--warning)","marginBottom":"0.75rem"}}>🏬 Offline
                  Counter Payment Options</div>
                <div style={{"display":"flex","flexDirection":"column","gap":"1rem"}}>
                  <div
                    style={{"display":"flex","alignItems":"flex-start","justifyContent":"space-between","padding":"0.85rem","background":"var(--bg-card)","border":"1px solid var(--border)","borderRadius":"0.5rem"}}>
                    <div>
                      <div style={{"display":"flex","alignItems":"center","gap":"0.5rem","marginBottom":"0.25rem"}}>
                        <strong style={{"fontSize":"0.9rem","color":"var(--text-heading)"}}>Digital UPI Payments (QR Code)</strong>
                        <span className="badge badge-success inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20" style={{"fontSize":"0.72rem"}}>Default · Always Enabled</span>
                      </div>
                      <div style={{"fontSize":"0.8rem","color":"var(--text-muted)"}}>Customer scans dynamic QR code on screen at
                        billing counter.</div>
                    </div>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" checked disabled style={{"width":"20px","height":"20px","opacity":"0.85"}} />
                  </div>
    
                  <label
                    style={{"display":"flex","alignItems":"flex-start","justifyContent":"space-between","padding":"0.85rem","background":"var(--bg-card)","border":"1px solid var(--border)","borderRadius":"0.5rem","cursor":"pointer"}}>
                    <div>
                      <div style={{"display":"flex","alignItems":"center","gap":"0.5rem","marginBottom":"0.25rem"}}>
                        <strong style={{"fontSize":"0.9rem","color":"var(--text-heading)"}}>Cash</strong>
                        <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" style={{"fontSize":"0.72rem"}}>Billing Till</span>
                      </div>
                      <div style={{"fontSize":"0.8rem","color":"var(--text-muted)"}}>Customer pays physical cash at till. Cashier
                        verifies note and approves in Cashier Dock.</div>
                    </div>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" id="toggleMethodCash" defaultChecked style={{"width":"20px","height":"20px","cursor":"pointer"}} />
                  </label>
    
                  <label
                    style={{"display":"flex","alignItems":"flex-start","justifyContent":"space-between","padding":"0.85rem","background":"var(--bg-card)","border":"1px solid var(--border)","borderRadius":"0.5rem","cursor":"pointer"}}>
                    <div>
                      <div style={{"display":"flex","alignItems":"center","gap":"0.5rem","marginBottom":"0.25rem"}}>
                        <strong style={{"fontSize":"0.9rem","color":"var(--text-heading)"}}>Card</strong>
                        <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" style={{"fontSize":"0.72rem"}}>Store POS Terminal</span>
                      </div>
                      <div style={{"fontSize":"0.8rem","color":"var(--text-muted)"}}>Customer swipes or taps card on physical store
                        POS machine.</div>
                    </div>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" id="toggleMethodCard" defaultChecked style={{"width":"20px","height":"20px","cursor":"pointer"}} />
                  </label>
                </div>
              </div>
    
              {/*  Offline Instructions  */}
              <div className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
                <div style={{"fontSize":"0.88rem","fontWeight":"700","color":"var(--text-heading)","marginBottom":"1rem"}}>🏪 In-Store
                  Till &amp; POS Instructions</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Cash at Till
                      Counter Instructions</label>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingCounterInstructions" type="text"
                      placeholder="e.g. Please proceed to Billing Counter and present this screen to Cashier"
                      style={{"width":"100%"}} />
                  </div>
                  <div>
                    <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Card POS
                      Counter Instructions</label>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingCardCounterInstructions" type="text"
                      placeholder="e.g. Please swipe, insert, or tap your card on the store POS terminal."
                      style={{"width":"100%"}} />
                  </div>
                </div>
              </div>
    
              <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"width":"100%","padding":"0.75rem"}}
                onClick={(e) => { try { (window.saveMerchantBrandingAndToggles()); } catch(err) { console.error(err); } }}>
                💾 Save Selling Mode &amp; Payment Modalities
              </button>
            </div>
          </div>
    </>
  );
}
