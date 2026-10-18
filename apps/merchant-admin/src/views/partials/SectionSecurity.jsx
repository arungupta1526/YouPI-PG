import React from 'react';
import SubViewBannedUsers from './security/SubViewBannedUsers.jsx';
import SubViewSecurityEvents from './security/SubViewSecurityEvents.jsx';
import SubViewBanHistory from './security/SubViewBanHistory.jsx';

export default function SectionSecurity() {
  return (
    <>
      {/* SECTION 4: SECURITY & BAN MANAGEMENT (Sections 4, 5, 6, 7, 9) */}
      <div id="sectionSecurity" hidden>
        <SubViewBannedUsers />
        <SubViewSecurityEvents />
        <SubViewBanHistory />
      </div>
    </>
  );
}
