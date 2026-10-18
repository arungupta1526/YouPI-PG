import React from 'react';

export default function SubViewBrandCustomizer() {
  return (
    <>
          <div id="subViewStoreBrand">
            <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
              <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
                <div>
                  <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">🎨 White-Label Branding &amp; Visual Gateway Customizer</div>
                  <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Customize every visual, textual, and brand asset of your customer checkout
                    experience. Live reflection on smartphone mockup.</div>
                </div>
                <span className="badge badge-success inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">100% White-Label Capable</span>
              </div>
    
              <div
                style={{"display":"grid","gridTemplateColumns":"minmax(0, 1.4fr) minmax(340px, 1fr)","gap":"2rem","alignItems":"start"}}>
    
                {/*  LEFT COLUMN: CONTROLS & SETTINGS  */}
                <div>
                  {/*  SECTION 1: CORE BRAND IDENTITY  */}
                  <div className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
                    <div className="group-box-title text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                      🏷️ 1. Core Brand Identity &amp; Title
                    </div>
                    <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1rem","marginBottom":"1rem"}}>
                      <div>
                        <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Merchant
                          Store / Business Name</label>
                        <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingBusinessName" type="text" placeholder="e.g. YOUPI Store or MSPCARE"
                          style={{"width":"100%"}} onInput={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }} />
                      </div>
                      <div>
                        <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Gateway
                          Title / App Name</label>
                        <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingAppName" type="text" defaultValue="YOUPI PG" placeholder="e.g. YOUPI Pay"
                          style={{"width":"100%"}} onInput={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }} />
                      </div>
                    </div>
                    <div>
                      <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Brand Logo
                        Image URL</label>
                      <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingLogoUrl" type="url" placeholder="https://yourbrand.com/logo.png" style={{"width":"100%"}}
                        onInput={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }} />
                      <span
                        style={{"fontSize":"0.72rem","color":"var(--text-muted)","display":"block","marginTop":"0.25rem"}}>Transparent
                        PNG or SVG recommended. When left blank, your store initial letter is used.</span>
                    </div>
                  </div>
    
                  {/*  SECTION 2: VISUAL THEME & COLOR PALETTE  */}
                  <div className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
                    <div className="group-box-title text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                      🎨 2. Visual Theme &amp; Color Palette
                    </div>
                    <div style={{"display":"grid","gridTemplateColumns":"1.2fr 1fr","gap":"1rem","marginBottom":"1rem"}}>
                      <div>
                        <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Primary
                          Brand Color (Hex)</label>
                        <div style={{"display":"flex","gap":"0.5rem","alignItems":"center"}}>
                          <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingColorPicker" type="color" defaultValue="#0b63e5"
                            style={{"width":"44px","height":"40px","border":"none","background":"transparent","cursor":"pointer","padding":"0"}}
                            onInput={(e) => { try { (new Function('e', "syncColorPickerToText(e.currentTarget.value)"))(e); } catch(err) { console.error(err); } }} />
                          <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingPrimaryColor" type="text" defaultValue="#0b63e5"
                            style={{"flex":"1","fontFamily":"monospace","fontWeight":"700"}}
                            onInput={(e) => { try { (new Function('e', "syncTextColorToPicker(e.currentTarget.value)"))(e); } catch(err) { console.error(err); } }} />
                        </div>
                      </div>
                      <div>
                        <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Header
                          Styling Theme</label>
                        <select className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingHeaderTheme" style={{"width":"100%"}} onChange={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }}>
                          <option value="gradient">Dynamic Gradient (Brand to Deep Accent)</option>
                          <option value="solid">Solid Brand Color</option>
                          <option value="dark">Obsidian Dark Navy (#0b1329)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <span
                        style={{"fontSize":"0.75rem","color":"var(--text-muted)","fontWeight":"700","display":"block","marginBottom":"0.4rem"}}>Quick
                        FinTech Brand Palettes:</span>
                      <div style={{"display":"flex","gap":"0.5rem","flexWrap":"wrap"}}>
                        <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.3rem 0.65rem","fontSize":"0.75rem"}}
                          onClick={(e) => { try { (new Function('e', "applyQuickPalette('#0b63e5', 'gradient')"))(e); } catch(err) { console.error(err); } }}>🔵 Sapphire Blue</button>
                        <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.3rem 0.65rem","fontSize":"0.75rem"}}
                          onClick={(e) => { try { (new Function('e', "applyQuickPalette('#10b981', 'gradient')"))(e); } catch(err) { console.error(err); } }}>🟢 Emerald Green</button>
                        <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.3rem 0.65rem","fontSize":"0.75rem"}}
                          onClick={(e) => { try { (new Function('e', "applyQuickPalette('#8b5cf6', 'gradient')"))(e); } catch(err) { console.error(err); } }}>🟣 Violet Purple</button>
                        <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.3rem 0.65rem","fontSize":"0.75rem"}}
                          onClick={(e) => { try { (new Function('e', "applyQuickPalette('#f43f5e', 'gradient')"))(e); } catch(err) { console.error(err); } }}>🔴 Rose Crimson</button>
                        <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.3rem 0.65rem","fontSize":"0.75rem"}}
                          onClick={(e) => { try { (new Function('e', "applyQuickPalette('#d97706', 'gradient')"))(e); } catch(err) { console.error(err); } }}>🟡 Amber Gold</button>
                        <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.3rem 0.65rem","fontSize":"0.75rem"}}
                          onClick={(e) => { try { (new Function('e', "applyQuickPalette('#0f172a', 'dark')"))(e); } catch(err) { console.error(err); } }}>⚫ Obsidian Dark</button>
                      </div>
                    </div>
                  </div>
    
                  {/*  SECTION 3: TRUST BADGE & SUB-BANNER CONTROLS  */}
                  <div className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
                    <div className="group-box-title text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                      🛡️ 3. Badges &amp; Conversion Banners
                    </div>
                    {/*  Hidden inputs preserve existing trust badge settings without merchant UI access  */}
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="hidden" id="settingHideTrustBadge" />
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="hidden" id="settingTrustBadgeText" />
                    <div style={{"marginBottom":"1rem","paddingBottom":"1rem","borderBottom":"1px dashed var(--border)"}}>
                      <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.35rem"}}>
                        <label style={{"fontSize":"0.82rem","fontWeight":"700"}}>Header Sub-banner Text</label>
                        <label
                          style={{"fontSize":"0.78rem","color":"var(--text-muted)","display":"flex","alignItems":"center","gap":"0.35rem","cursor":"pointer"}}>
                          <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" id="settingHideSubbanner" onChange={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }} />
                          <span>Hide Sub-banner</span>
                        </label>
                      </div>
                      <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingSubbannerText" type="text" placeholder="e.g. ⚡ 5-Second Instant UPI Activation"
                        style={{"width":"100%"}} onInput={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }} />
                    </div>
                    <div>
                      <label
                        style={{"fontSize":"0.78rem","color":"var(--text-muted)","display":"flex","alignItems":"center","gap":"0.35rem","cursor":"pointer"}}>
                        <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" id="settingHideTimeSavingBanner" onChange={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }} />
                        <span>Hide Psychological Time-Saving Banner</span>
                      </label>
                    </div>
                  </div>
    
                  {/*  SECTION 4: TRUST GUARANTEES & NOTICES  */}
                  <div className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
                    <div className="group-box-title text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                      🛡️ 4. Guarantees &amp; Conversion Notices
                    </div>
                    <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1rem"}}>
                      <div>
                        <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Sidebar Trust Notice</label>
                        <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingSidebarNotice" type="text" placeholder="e.g. Fast & Secure 256-Bit Encrypted Payments" style={{"width":"100%"}} onInput={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }} />
                      </div>
                      <div>
                        <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Footer Guarantee Text</label>
                        <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingFooterGuarantee" type="text" placeholder="e.g. 100% Payment Protection Guaranteed" style={{"width":"100%"}} onInput={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }} />
                      </div>
                    </div>
                  </div>
    
                  {/*  SECTION 5: SUPPORT & LEGAL POLICIES  */}
                  <div className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
                    <div className="group-box-title text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                      📞 5. Support &amp; Legal Policies
                    </div>
                    <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1rem","marginBottom":"1rem"}}>
                      <div>
                        <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Customer
                          Support Email(s)</label>
                        <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingSupportEmails" type="text" placeholder="support@brand.com, help@brand.com"
                          style={{"width":"100%"}} />
                      </div>
                      <div>
                        <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Customer
                          Support Mobile(s)</label>
                        <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingSupportMobiles" type="text" placeholder="+91 9876543210, +91 9123456789"
                          style={{"width":"100%"}} />
                      </div>
                    </div>
                    <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1rem"}}>
                      <div>
                        <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Privacy
                          Policy URL</label>
                        <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingPrivacyPolicyUrl" type="url" placeholder="https://yourbrand.com/privacy-policy"
                          style={{"width":"100%"}} />
                      </div>
                      <div>
                        <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Terms of
                          Service URL</label>
                        <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingTermsUrl" type="url" placeholder="https://yourbrand.com/terms"
                          style={{"width":"100%"}} />
                      </div>
                    </div>
                  </div>
    
                  <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{"padding":"0.85rem 1.75rem","fontSize":"0.95rem","width":"100%","justifyContent":"center"}}
                    onClick={(e) => { try { (new Function('e', "saveMerchantBrandingAndToggles()"))(e); } catch(err) { console.error(err); } }}>
                    💾 Save &amp; Apply All White-Label Settings
                  </button>
                </div>
    
                {/*  RIGHT COLUMN: INTERACTIVE SMARTPHONE CHECKOUT MOCKUP PREVIEW  */}
                <div style={{"position":"sticky","top":"130px"}}>
                  <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.75rem"}}>
                    <div
                      style={{"fontSize":"0.82rem","fontWeight":"800","textTransform":"uppercase","color":"#94a3b8","display":"flex","alignItems":"center","gap":"0.4rem"}}>
                      <span
                        style={{"display":"inline-block","width":"8px","height":"8px","borderRadius":"50%","background":"#10b981"}}></span>
                      Live Gateway Mockup Preview
                    </div>
                    <span style={{"fontSize":"0.72rem","color":"var(--text-muted)"}}>Real-time reflection</span>
                  </div>
    
                  {/*  PHONE CHASSIS  */}
                  <div
                    style={{"width":"100%","maxWidth":"380px","margin":"0 auto","background":"#ffffff","borderRadius":"36px","border":"9px solid #1e293b","boxShadow":"0 25px 50px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.1)","overflow":"hidden","position":"relative","minHeight":"580px","display":"flex","flexDirection":"column"}}>
                    {/*  PHONE NOTCH  */}
                    <div
                      style={{"background":"#0b0f19","height":"24px","display":"flex","alignItems":"center","justifyContent":"space-between","padding":"0 16px","color":"#ffffff","fontSize":"10px","fontWeight":"700"}}>
                      <span>9:41</span>
                      <div style={{"width":"50px","height":"4px","background":"#334155","borderRadius":"4px"}}></div>
                      <div style={{"display":"flex","gap":"4px","alignItems":"center"}}><span>5G</span><span>100%</span></div>
                    </div>
    
                    {/*  LIVE CHECKOUT HEADER  */}
                    <div id="mockupHeader"
                      style={{"background":"linear-gradient(180deg, #0b63e5 0%, #0747a6 100%)","padding":"12px 14px 10px 14px","color":"#ffffff","transition":"background 0.2s ease"}}>
                      <div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","marginBottom":"8px"}}>
                        <div style={{"display":"flex","alignItems":"center","gap":"10px"}}>
                          <div
                            style={{"width":"36px","height":"36px","borderRadius":"50%","background":"#ffffff","display":"flex","alignItems":"center","justifyContent":"center","overflow":"hidden","boxShadow":"0 2px 5px rgba(0,0,0,0.15)","flexShrink":"0"}}>
                            <span id="mockupAvatarLetter" style={{"fontWeight":"900","color":"#0b63e5","fontSize":"16px"}}>M</span>
                            <img id="mockupAvatarImg" alt="Logo"
                              style={{"display":"none","width":"100%","height":"100%","objectFit":"contain"}} />
                          </div>
                          <div>
                            <div id="mockupHeaderMerchantName"
                              style={{"fontSize":"13.5px","fontWeight":"800","lineHeight":"1.2","color":"#ffffff"}}>Merchant Checkout
                            </div>
                            <div id="mockupTrustBadge"
                              style={{"display":"inline-flex","alignItems":"center","gap":"3px","marginTop":"2px"}}>
                              <span style={{"fontSize":"11px"}}>🛡️</span>
                              <span id="mockupTrustBadgeText"
                                style={{"fontSize":"10px","fontWeight":"700","color":"rgba(255,255,255,0.92)"}}>YouPI PG Verified
                                Business</span>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{"width":"28px","height":"28px","borderRadius":"50%","background":"rgba(255,255,255,0.18)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"12px"}}>
                          👤</div>
                      </div>
    
                      <div id="mockupSubbanner"
                        style={{"background":"rgba(255,255,255,0.15)","borderRadius":"6px","padding":"4px 8px","fontSize":"10.5px","fontWeight":"700","display":"flex","alignItems":"center","gap":"5px","backdropFilter":"blur(4px)"}}>
                        <span>🛒</span>
                        <span id="mockupSubbannerText"
                          style={{"whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"}}>Verified &amp; Protected by
                          YOUPI PG</span>
                      </div>
                    </div>
    
                    {/*  BODY PREVIEW  */}
                    <div style={{"padding":"12px","background":"#f8fafc","flex":"1","display":"flex","flexDirection":"column","gap":"10px"}}>
                      <div id="mockupTimeSavingBanner"
                        style={{"background":"#f0fdf4","border":"1px solid #86efac","borderRadius":"8px","padding":"7px 10px","display":"flex","alignItems":"center","justifyContent":"space-between","gap":"6px"}}>
                        <div style={{"fontSize":"10px","color":"#14532d","fontWeight":"700","lineHeight":"1.3"}}>⚡ Skip wait: Instant
                          billing counter checkout available</div>
                        <span
                          style={{"background":"#10b981","color":"#fff","fontSize":"9px","fontWeight":"800","padding":"3px 7px","borderRadius":"5px","whiteSpace":"nowrap"}}>Switch</span>
                      </div>
    
                      <div
                        style={{"background":"#ffffff","border":"1px solid #e2e8f0","borderRadius":"10px","padding":"10px","display":"flex","justifyContent":"space-between","alignItems":"center"}}>
                        <div>
                          <div style={{"fontSize":"9.5px","color":"#64748b","fontWeight":"700","textTransform":"uppercase"}}>Order
                            #ORD-78921</div>
                          <div style={{"fontSize":"17px","fontWeight":"900","color":"#0f172a","marginTop":"2px"}}>₹1,500.00</div>
                        </div>
                        <span
                          style={{"background":"#eff6ff","color":"#2563eb","fontSize":"10px","fontWeight":"800","padding":"3px 8px","borderRadius":"6px"}}>Direct
                          UPI</span>
                      </div>
    
                      <div
                        style={{"background":"#ffffff","border":"1px solid #e2e8f0","borderRadius":"10px","padding":"12px","textAlign":"center"}}>
                        <div
                          style={{"width":"110px","height":"110px","margin":"0 auto 8px auto","borderRadius":"8px","border":"2px solid #0f172a","padding":"4px","display":"flex","alignItems":"center","justifyContent":"center","background":"#ffffff"}}>
                          <div
                            style={{"width":"100%","height":"100%","background":"repeating-linear-gradient(45deg, #0f172a, #0f172a 6px, #ffffff 6px, #ffffff 12px)","borderRadius":"4px","opacity":"0.85"}}>
                          </div>
                        </div>
                        <div style={{"fontSize":"10px","fontWeight":"700","color":"#334155"}}>Scan with any UPI App (GPay, PhonePe,
                          Paytm)</div>
                      </div>
                    </div>
    
                    {/*  LIVE STICKY FOOTER  */}
                    <div style={{"background":"#ffffff","borderTop":"1px solid #e2e8f0","padding":"10px 14px","marginTop":"auto"}}>
                      <div
                        style={{"display":"flex","alignItems":"center","justifyContent":"center","gap":"5px","fontSize":"10px","fontWeight":"700","color":"#0b63e5","marginBottom":"5px"}}>
                        <span>🛡️</span>
                        <span id="mockupFooterGuarantee">100% Payment Protection by YOUPI PG</span>
                      </div>
                      <div id="mockupLegalDisclaimer"
                        style={{"fontSize":"9px","color":"#64748b","textAlign":"center","marginBottom":"8px"}}>
                        Secured by YOUPI PG &amp; 256-Bit Bank Encryption &bull; Privacy Notice
                      </div>
                      <div
                        style={{"display":"flex","justifyContent":"space-between","alignItems":"center","background":"#0f172a","borderRadius":"8px","padding":"8px 12px","color":"#ffffff"}}>
                        <div>
                          <div style={{"fontSize":"8.5px","color":"#94a3b8","fontWeight":"600"}}>Total Payable</div>
                          <div style={{"fontSize":"13px","fontWeight":"800","color":"#ffffff"}}>₹1,500.00</div>
                        </div>
                        <span id="mockupCtaButton"
                          style={{"background":"#2563eb","color":"#ffffff","fontSize":"10.5px","fontWeight":"800","padding":"5px 12px","borderRadius":"6px"}}>Continue
                          &rsaquo;</span>
                      </div>
                    </div>
    
                    {/*  PHONE HOME BAR  */}
                    <div style={{"background":"#ffffff","height":"14px","display":"flex","alignItems":"center","justifyContent":"center"}}>
                      <div style={{"width":"90px","height":"4px","background":"#cbd5e1","borderRadius":"4px"}}></div>
                    </div>
                  </div>
                </div>
    
              </div>
            </div>
          </div>
    </>
  );
}
