# YOUPI PG V2 — Engineering & Audit Tracker

This tracker monitors all audit items, active bugs, security remediations, Android module cleanup, and CI/CD enhancements for the repository.

---

## 🎯 Progress Overview

| Phase | Milestone | Status | Key Deliverable |
| :--- | :--- | :---: | :--- |
| **Phase 0** | Governance & Standards | 🟡 In Progress | `AGENTS.md`, `TRACKER.md`, `CHANGELOG.md` |
| **Phase 1** | Critical Bug Fixes | ⚪ Pending | Fix OTP throttle test, TS types, regex UTR bug, Node engine |
| **Phase 2** | CI/CD & ReviewGround | ⚪ Pending | GitHub Actions CI & ReviewGround workflow setup |
| **Phase 3** | Android Module Cleanup | ⚪ Pending | Gradle wrapper, `.gitignore`, remove duplicate classes |
| **Phase 4** | Monorepo Deduplication | ⚪ Pending | Remove duplicate QR & SDK files, clean hardcoded domains |
| **Phase 5** | Containerization & Database | ⚪ Pending | Docker setup, database layer clarification |

---

## 📋 Detailed Task Matrix

### Phase 0: Governance & Guidelines
- [x] Create comprehensive `AGENTS.md` (Git workflows, branching standard, webhook verification).
- [x] Create `TRACKER.md` (this file).
- [ ] Create `CHANGELOG.md` with baseline initial release.

### Phase 1: Critical Bug Fixes
- [ ] **Fix OTP Throttle Test Bypass**:
  - File: `apps/payment-api/src/routes/customer.routes.js`
  - Issue: `isOtpThrottled` enforces 30s cooldown in test environment, breaking `whatsapp-berry-auth.test.js`.
  - Fix: Skip cooldown when `NODE_ENV === 'test'`.
- [ ] **Fix TypeScript Build & Contracts**:
  - File: `packages/common/src/contracts.ts`
  - Issue: `ObserverSource.ANDROID` mismatch (correct: `ObserverSource.ANDROID_OBSERVER`).
  - File: `tsconfig.json` (root)
  - Issue: Nonexistent project references causing 11 errors.
- [ ] **Fix Bank SMS Parser UTR Regex**:
  - File: `packages/core/src/bank-sms-parser.js`
  - Issue: Optional `(?:ref\s*no\.?)?` matches words like `"Customer"` as UTR.
  - Fix: Make prefix mandatory and add unit regression test.
- [ ] **Update Node.js Engine Requirement**:
  - File: `package.json`
  - Issue: Says `>=20.0.0` but `node:sqlite` requires Node.js `>=22.5.0`.
  - Fix: Update `engines.node` to `>=22.5.0`.

### Phase 2: CI/CD & ReviewGround
- [ ] Setup GitHub Actions workflow `.github/workflows/ci.yml` (Lint, Typecheck, Test on Node 22+).
- [ ] Setup GitHub Actions workflow `.github/workflows/reviewground.yml` (ReviewGround automated PR review).

### Phase 3: Android Module Cleanup
- [ ] Add Android artifacts to `.gitignore` (`.gradle/`, `build/`, `*.apk`, `*.aar`, `local.properties`).
- [ ] Clean up untracked `# File Tree: YouPI-PG.md` and generated `.gradle/` / `build/` files.
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
| 2026-10-18 | Regression Test Runner | `npm test` | ❌ Failed | 28/32 failed at `whatsapp-berry-auth.test.js` (429 rate limit) |
| 2026-10-18 | TypeScript Typecheck | `npm run typecheck` | ❌ Failed | 12 errors (`ObserverSource.ANDROID` + missing `tsconfig.json`s) |
| 2026-10-18 | Part L Acceptance Tests | `npm run test:acceptance` | ✅ Passed | 31/31 passed |
| 2026-10-18 | Chaos & Concurrency | `node --test scripts/chaos-concurrency.test.js` | ✅ Passed | 5/5 passed |
