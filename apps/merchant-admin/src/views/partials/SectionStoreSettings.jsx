import React from 'react';
import SubViewBrandCustomizer from './store-settings/SubViewBrandCustomizer.jsx';
import SubViewReceivingVpa from './store-settings/SubViewReceivingVpa.jsx';
import SubViewSellingModes from './store-settings/SubViewSellingModes.jsx';

export default function SectionStoreSettings() {
  return (
    <>
      {/* SECTION 2: STORE SETTINGS */}
      <div id="sectionStoreSettings" hidden>
        <SubViewBrandCustomizer />
        <SubViewReceivingVpa />
        <SubViewSellingModes />
      </div>
    </>
  );
}
