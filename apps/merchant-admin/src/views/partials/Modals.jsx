import React from 'react';
import GmailGuideModal from './modals/GmailGuideModal.jsx';
import BanDetailsModal from './modals/BanDetailsModal.jsx';
import UnbanConfirmModal from './modals/UnbanConfirmModal.jsx';
import ManualBanModal from './modals/ManualBanModal.jsx';

export default function Modals() {
  return (
    <>
      <GmailGuideModal />
      <BanDetailsModal />
      <UnbanConfirmModal />
      <ManualBanModal />
      {/* Global Cashier Floating Dock */}
      <div id="cashierFloatingDock" className="cashier-floating-dock fixed bottom-6 right-6 z-[100000] flex flex-row-reverse flex-wrap-reverse gap-3 max-w-[calc(100vw-48px)] pointer-events-none"></div>
    </>
  );
}
