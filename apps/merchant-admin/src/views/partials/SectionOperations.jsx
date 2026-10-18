import React from 'react';
import KpiSummary from './operations/KpiSummary.jsx';
import SubViewLiveQueue from './operations/SubViewLiveQueue.jsx';
import SubViewCounterDesk from './operations/SubViewCounterDesk.jsx';
import SubViewTransactionsLedger from './operations/SubViewTransactionsLedger.jsx';
import SubViewPaymentObservers from './operations/SubViewPaymentObservers.jsx';

export default function SectionOperations() {
  return (
    <>
      {/* SECTION 1: DAILY MERCHANT OPERATIONS */}
      <div id="sectionOperations">
        <KpiSummary />
        <SubViewLiveQueue />
        <SubViewCounterDesk />
        <SubViewTransactionsLedger />
        <SubViewPaymentObservers />
      </div>
    </>
  );
}
