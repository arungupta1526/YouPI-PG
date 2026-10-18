import React from 'react';
import Header from './partials/Header.jsx';
import SectionOperations from './partials/SectionOperations.jsx';
import SectionStoreSettings from './partials/SectionStoreSettings.jsx';
import SectionDeveloperHub from './partials/SectionDeveloperHub.jsx';
import SectionSecurity from './partials/SectionSecurity.jsx';
import Modals from './partials/Modals.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main className="p-6 max-w-[1480px] w-full mx-auto flex-1">
        <SectionOperations />
        <SectionStoreSettings />
        <SectionDeveloperHub />
        <SectionSecurity />
      </main>
      <Modals />
    </>
  );
}
