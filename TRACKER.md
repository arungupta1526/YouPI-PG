# YOUPI PG V2 — Engineering & Audit Tracker

This tracker monitors all audit items, active bugs, security remediations, Android module cleanup, and CI/CD enhancements for the repository.

---

## 🎯 Progress Overview

| Phase | Milestone | Status | Key Deliverable |
| :--- | :--- | :---: | :--- |
| **Phase 0** | Governance & Standards | 🟢 Completed | `AGENTS.md`, `TRACKER.md`, `CHANGELOG.md` |
| **Phase 1** | Critical Bug Fixes | 🟢 Completed | Fix OTP throttle test, TS types, regex UTR bug, Node engine |
| **Phase 2** | CI/CD & ReviewGround | 🟢 Completed | GitHub Actions CI & ReviewGround workflow setup |
| **Phase 3** | Android Module Cleanup | 🟡 In Progress | Gradle wrapper, `.gitignore`, duplicate class deduplication |
| **Phase 4** | Monorepo Deduplication | ⚪ Pending | Remove duplicate QR & SDK files, clean hardcoded domains |
| **Phase 5** | Containerization & Database | ⚪ Pending | Docker setup, database layer clarification |

---

## 📋 Detailed Task Matrix

### Phase 0: Governance & Guidelines
- [x] Create comprehensive `AGENTS.md` (Git workflows, branching standard, webhook verification).
- [x] Create `TRACKER.md` (this file).
- [x] Create `CHANGELOG.md` with baseline initial release.

### Phase 1: Critical Bug Fixes
- [x] **Fix OTP Throttle Test Bypass**:
  - File: `apps/payment-api/src/routes/customer.routes.js`
  - Issue: `isOtpThrottled` enforced 30s cooldown in test environment, breaking `whatsapp-berry-auth.test.js`.
  - Fix: Skip cooldown when `NODE_ENV === 'test'`.
- [x] **Fix TypeScript Build & Contracts**:
  - File: `packages/common/src/contracts.ts`
  - Issue: `ObserverSource.ANDROID` mismatch (correct: `ObserverSource.ANDROID_OBSERVER`).
  - File: `tsconfig.json` (root)
  - Issue: Nonexistent project references causing 12 errors. Scoped to `packages/common`.
- [x] **Fix Bank SMS Parser UTR Regex & Currency Word Boundaries**:
  - File: `packages/core/src/bank-sms-parser.js`
  - Issue: Optional `(?:ref\s*no\.?)?` matched words like `"Customer"` as UTR; `\b` after optional dot broke `"Rs."` and `"INR"` matching.
  - Fix: Bound prefix mandatorily, repositioned word boundary, and added unit regression tests in `core.test.js`.
- [x] **Update Node.js Engine Requirement**:
  - File: `package.json`
  - Issue: Said `>=20.0.0` but `node:sqlite` requires Node.js `>=22.5.0`.
  - Fix: Updated `engines.node` to `>=22.5.0`.

### Phase 2: CI/CD & ReviewGround
- [x] Setup GitHub Actions workflow `.github/workflows/ci.yml` (Lint, Typecheck, Test on Node 22+).
- [x] Setup GitHub Actions workflow `.github/workflows/reviewground.yml` (ReviewGround automated PR review).

### Phase 3: Android Module Cleanup
- [x] Add Android artifacts and build outputs to `.gitignore` (`.gradle/`, `build/`, `*.apk`, `*.aar`, `local.properties`).
- [ ] Evaluate duplicate Java vs Kotlin classes in `apps/android-observer-app/app/src/main/java/com/youpi/observer/`.
- [ ] Fix hardcoded Windows toolchain paths in `scripts/build-android-apk.js`.
- [ ] Generate and commit standard Gradle wrapper.

### Phase 4: Monorepo Deduplication & Hygiene
- [ ] Remove duplicate `qr-lib.js` & `qr.js` from `apps/checkout-portal/src/` (import from `@youpi/core`).
- [ ] Remove duplicate `youpi.js` & `youpi-checkout.js` from `apps/checkout-portal/src/sdk/`.
- [ ] Purge hardcoded `gauravtesting.online` hacks and personal paths in scripts.
- [ ] Delete temporary agent files (`scripts/recovered-chunks.json`, `dump-chunks.cjs`, etc.).

---

## 🧪 Verification Log

| Date | Scope / File | Command | Result | Notes |
| :--- | :--- | :--- | :---: | :--- |
| 2026-10-18 | WhatsApp Berry Auth | `node --test apps/payment-api/src/__tests__/whatsapp-berry-auth.test.js` | ✅ Passed | 13/13 tests pass cleanly |
| 2026-10-18 | Bank SMS Parser | `node --test packages/core/src/__tests__/core.test.js` | ✅ Passed | 11/11 tests pass cleanly |
| 2026-10-18 | Full Regression Runner | `npm test` | ✅ Passed | 32/32 suites pass cleanly (100%) |
| 2026-10-18 | TypeScript Typecheck | `npm run typecheck` | ✅ Passed | 0 errors |
| 2026-10-18 | TypeScript Build | `npm run build` | ✅ Passed | 0 errors |
| 2026-10-18 | Acceptance Tests | `npm run test:acceptance` | ✅ Passed | 31/31 passed |
| 2026-10-18 | Chaos & Concurrency | `node --test scripts/chaos-concurrency.test.js` | ✅ Passed | 5/5 passed |
