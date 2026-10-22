import React from 'react';

export default function Header() {
  return (
    <>
{/*  TOP HEADER  */}
<header className="bg-white dark:bg-[#070a12] border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-3 flex flex-col md:flex-row md:items-center justify-between sticky top-0 z-[1000] backdrop-blur-md gap-3">
  <div className="flex items-center justify-between gap-3.5">
    <div className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
      <span>🛡️ YOUPI PG</span>
    </div>
    <span className="text-[0.72rem] font-bold py-1 px-2.5 rounded-full uppercase tracking-wider bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
      Merchant &amp; Supervisor Hub
    </span>
  </div>

  <div className="flex items-center gap-2.5 overflow-x-auto pb-1 sm:pb-0 w-full md:w-auto flex-nowrap md:flex-wrap">
    {/*  Real Light / Dark Mode Toggle Pill  */}
    <div
      className="theme-mode-pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 cursor-pointer select-none transition-all hover:border-slate-400 hover:-translate-y-0.5 shadow-sm"
      id="headerThemeBadge"
      onClick={(e) => { try { (window.toggleThemeManual()); } catch(err) { console.error(err); } }}
      title="Auto-switches to Dark Mode in Developer Hub and Bright White Mode in Operations &amp; Store Settings. Click to toggle manually anytime."
    >
      <span id="headerThemeIcon">☀️</span>
      <span id="headerThemeText">Bright White</span>
    </div>

    {/*  YOUPI Store Port 5000 Switch Badge  */}
    <div
      className="store-switch-badge is-offline inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 cursor-pointer select-none transition-all hover:brightness-105 [&.is-online]:bg-emerald-500/10 [&.is-online]:text-emerald-500 [&.is-online]:border-emerald-500/30 [&.is-offline]:bg-rose-500/10 [&.is-offline]:text-rose-500 [&.is-offline]:border-rose-500/30"
      id="headerStoreBadge"
      onClick={(e) => { try { (window.toggleYoupiStore()); } catch(err) { console.error(err); } }}
      title="Click to 1-Click Enable/Disable YOUPI Showcase Store on Port 5000"
    >
      <span id="headerStoreDot">●</span>
      <span id="headerStoreText">Store (5000): Checking...</span>
    </div>

    {/*  Active VPA Display  */}
    <span
      className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 cursor-pointer transition-all hover:border-blue-400"
      id="accountVpaDisplay"
      onClick={(e) => { try { (window.switchSection('storeSettings', 'subTabVpa')); } catch(err) { console.error(err); } }}
    >
      VPA: Loading...
    </span>

    {/*  Environment Mode  */}
    <div
      className="flex items-center gap-1.5 bg-white dark:bg-slate-900 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 cursor-pointer"
      onClick={(e) => { try { (window.switchSection('developerHub', 'subViewDevCloudflare')); } catch(err) { console.error(err); } }}
    >
      <span className="text-[0.72rem] text-slate-500 dark:text-slate-400 font-bold">ENV:</span>
      <span
        className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-[0.72rem] font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20"
        id="headerEnvBadge"
      >
        💻 LOCALHOST
      </span>
    </div>

    {/*  Live Polling Indicator  */}
    <div className="live-pulse-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
      <div className="pulse-dot w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></div>
      <span>Live Syncing</span>
    </div>
  </div>
</header>

{/*  MAIN NAVIGATION BAR: 4 HIGH-LEVEL SECTIONS  */}
<nav className="main-nav-bar flex gap-2 px-6 sticky top-[57px] z-[999] overflow-x-auto bg-white dark:bg-[#0b1120] border-b border-slate-200 dark:border-slate-800">
  <button
    className="main-nav-btn active flex items-center gap-2.5 py-4 px-5 cursor-pointer font-extrabold border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 whitespace-nowrap text-sm transition-all duration-200 [&.active]:border-blue-600 [&.active]:text-blue-600 dark:[&.active]:border-sky-400 dark:[&.active]:text-sky-400 [&.active]:bg-blue-50/50 dark:[&.active]:bg-sky-500/10"
    id="mainNavOperations"
    onClick={(e) => { try { (window.switchSection('operations')); } catch(err) { console.error(err); } }}
  >
    <span>🏪</span>
    <span>Daily Merchant Operations</span>
  </button>
  <button
    className="main-nav-btn flex items-center gap-2.5 py-4 px-5 cursor-pointer font-extrabold border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 whitespace-nowrap text-sm transition-all duration-200 [&.active]:border-blue-600 [&.active]:text-blue-600 dark:[&.active]:border-sky-400 dark:[&.active]:text-sky-400 [&.active]:bg-blue-50/50 dark:[&.active]:bg-sky-500/10"
    id="mainNavStoreSettings"
    onClick={(e) => { try { (window.switchSection('storeSettings')); } catch(err) { console.error(err); } }}
  >
    <span>⚙️</span>
    <span>Store Settings</span>
  </button>
  <button
    className="main-nav-btn flex items-center gap-2.5 py-4 px-5 cursor-pointer font-extrabold border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 whitespace-nowrap text-sm transition-all duration-200 [&.active]:border-blue-600 [&.active]:text-blue-600 dark:[&.active]:border-sky-400 dark:[&.active]:text-sky-400 [&.active]:bg-blue-50/50 dark:[&.active]:bg-sky-500/10"
    id="mainNavDeveloperHub"
    onClick={(e) => { try { (window.switchSection('developerHub')); } catch(err) { console.error(err); } }}
  >
    <span>🛠️</span>
    <span>Developer &amp; Infrastructure Hub</span>
  </button>
  <button
    className="main-nav-btn flex items-center gap-2.5 py-4 px-5 cursor-pointer font-extrabold border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 whitespace-nowrap text-sm transition-all duration-200 [&.active]:border-blue-600 [&.active]:text-blue-600 dark:[&.active]:border-sky-400 dark:[&.active]:text-sky-400 [&.active]:bg-blue-50/50 dark:[&.active]:bg-sky-500/10"
    id="mainNavSecurity"
    onClick={(e) => { try { (window.switchSection('security')); } catch(err) { console.error(err); } }}
  >
    <span>🛡️</span>
    <span>Security</span>
  </button>
</nav>

{/*  SECONDARY SUB-NAVIGATION BAR (Dynamically adapts per section)  */}
<nav className="sub-nav-bar flex gap-2 py-2.5 px-6 overflow-x-auto bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800" id="subNavBar">
  {/*  Filled dynamically or toggled based on current section  */}
</nav>

    </>
  );
}
