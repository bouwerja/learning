> [!NOTE]
> This file was AI generated as a fictional worked example. All names, figures and events are illustrative.

# Section 3A · Assurance: Testing, Audit & Constraints

**Project:** Lead-to-Sale Conversion Decline (REQ-2026-014)
**CALM principle:** Every quality, audit and compliance need is a measurable gap with a guardrail signal.
**Status:** Complete. The Assurance Pack was submitted to Gate 3.
**Date:** 15 January 2027

---

## 1. Classification of Anti-Pattern Rules

| Rule | Type | Destination |
| :-- | :-- | :-- |
| EB1 (dialler-only attempts, QA sample) | Functional | Stage 3: AC-01, AC-02 |
| EB4 (stop cadence on status change) | Functional | Stage 3: AC-05 |
| EB5 (deduplicate by phone number) | Functional | Stage 3: AC-06 |
| EB2 (flexing reserve vs 1-hour SLA) | **Non-functional** | NFR-01 |
| EB3 (reserve change permissions) | **Non-functional** | NFR-04 |
| EB6 (contact limits, hours, opt-out) | **Non-functional** | NFR-03 |
| EB7 (silent failure alert) | **Non-functional** | NFR-06 |
| EB8 (attempt log) | **Non-functional** | NFR-05 |

---

## 2. Constraints Register (maintained here)

| ID | Constraint / Assumption / Dependency | Type | Source | Owner | Status |
| :-- | :-- | :-- | :-- | :-- | :-- |
| C1 | Agent headcount about 30% below baseline | Dependency | Change history | Operations / HR | Open |
| C2 | Partner lead volume fixed by contract | Constraint | Partner contract | Partner Integration Owner | Open |
| C3 | The 1-hour first-contact SLA must be met | Constraint | Call centre SLA | Head of Distribution | Open |
| C4 | Consent covers phone and SMS, **including automated dialling** | Constraint | POPIA; capture wording | Compliance | **Confirmed by Compliance** |
| C5 | **Maximum of 6 call attempts per person in 7 days**, within permitted calling hours | Constraint | Compliance ruling | Compliance | **Confirmed by Compliance** |
| C6 | Dialler and CRM changes follow the IT change process | Constraint | IT policy | IT | Open |
| C7 | Reserve % changes need Head of Distribution approval | Constraint | Stage 3 (EB3) | Head of Distribution | **New** |
| C8 | A non-production dialler test instance with test numbers is available | Assumption | IT | CRM Administrator | **Confirmed** |

---

## 3. NFR Specification

| NFR ID | Category | Requirement | **Measurable threshold** | Source |
| :-- | :-- | :-- | :-- | :-- |
| NFR-01 | Performance & capacity | The reserve and the 1-hour SLA hold together under peak load | 1-hour SLA ≥ 88% at **1.8× average daily volume**, with agent capacity at 70% of baseline | EB2, C1, C3 |
| NFR-02 | Performance | Follow-ups are placed within the cadence | ≥ 98% of due attempts placed within the 7-day cadence window; every deferral is logged *(revised after the redesign, because peak-day deferrals move attempts out of their original band)* | US-02 |
| NFR-03 | Data privacy & compliance | Contact limits are never exceeded | **0** persons with more than 6 attempts in 7 days; **0** calls outside permitted hours; opt-outs stop **100%** of further attempts | EB6, C4, C5 |
| NFR-04 | Security & access | Only authorised roles can change the reserve | **100%** of reserve change attempts by unauthorised roles are blocked; 100% of changes are logged | EB3, C7 |
| NFR-05 | Auditability & record-keeping | Contact history can be reconstructed | 100% of attempts logged; full history for any lead produced within 1 working day | EB8 |
| NFR-06 | Supportability | Silent failures are detected | An alert is raised within **1 hour** when placements fall more than 20% below expected | EB7 |
| NFR-07 | Recovery | The cadence resumes correctly after an outage | RTO 1 hour; RPO 0 attempts lost; **0** duplicate attempts after restart | Prompt: Recovery |
| NFR-08 | Usability & accessibility | Team leaders can read and act on the dashboard | All team leaders complete a dashboard walkthrough without help | Prompt: Accessibility |

---

## 4. Audit & Record-Keeping Requirements

| Item | Requirement |
| :-- | :-- |
| What is recorded | For every attempt: lead ID, person (deduplicated), timestamp, source (dialler or agent), outcome, and any disposition change, with before and after values |
| Configuration changes | Reserve %, cadence rules and calling-hour settings: who, when, old value, new value, reason, approver |
| Retention | **As confirmed by Compliance** for sales and direct-marketing records |
| Integrity | The attempt log is append-only. Agents cannot edit or delete attempts. |
| Retrieval | Full contact history for any lead can be produced within 1 working day for complaints, audits or regulator requests |
| POPIA | Dashboards show aggregated figures. Agents see only the leads assigned to them. Opt-outs are recorded and honoured across both channels. |

---

## 5. Risk Prioritisation (Max-3)

| NFR | Likelihood (1–5) | Impact (1–5) | **Risk** | Test depth |
| :-- | --: | --: | --: | :-- |
| NFR-01 Capacity vs SLA | 5 | 5 | **25** | **Full** |
| NFR-04 Reserve permissions | 4 | 4 | **16** | **Full** |
| NFR-03 Contact limits | 3 | 5 | **15** | **Full** |
| NFR-05 Audit reconstruction | 3 | 5 | 15 | Lighter: sample of 20 leads |
| NFR-06 Silent failure alert | 3 | 4 | 12 | Lighter: one induced failure |
| NFR-02 Placement in cadence | 2 | 4 | 8 | Lighter: observed during NFR-01 |
| NFR-07 Recovery | 2 | 4 | 8 | Lighter: one restart test |
| NFR-08 Usability | 2 | 2 | 4 | Lighter: walkthrough |

---

## 6. Test Scenarios (Designed by Inversion)

| Test | NFR | Scenario: *"How would this break the design?"* |
| :-- | :-- | :-- |
| T-01 | NFR-01 | Load the test instance with a Monday spike at 70% agent capacity and check whether the reserve, the flex and the SLA hold |
| T-02 | NFR-04 | Attempt to change the reserve as a team leader, as an agent, and by bulk import |
| T-03 | NFR-03 | Submit the same person through the partner API and the website within 7 days; place calls at the edge of permitted hours; opt out mid-cadence |
| T-04 | NFR-05 | Reconstruct the full contact history for 20 test leads from the log |
| T-05 | NFR-06 | Disable a dialler retry rule and time how long the alert takes |
| T-06 | NFR-07 | Stop the dialler mid-cadence for 30 minutes, restart it, and check for lost or duplicate attempts |
| T-07 | NFR-08 | Team leaders complete set tasks on the dashboard unaided |

### Gradient load plan for T-01 (R.I.P.)

Runs on the **dialler test instance**, with the configuration backed up before each run. One variable (lead volume) changes per run.

| Run | Lead volume (× average day) | Agent capacity |
| :-- | :-- | :-- |
| 1 | 1.0× | 70% |
| 2 | 1.4× | 70% |
| 3 | 1.8× (Monday peak) | 70% |
| 4 | 2.2× (stress) | 70% |

---

## 7. Test Results

### T-01 · Capacity vs 1-hour SLA (gradient, 70% agent capacity)

| Run | Volume | SLA: first run (15% floor) | SLA: re-test (0% floor) | Threshold |
| :-- | :-- | --: | --: | :-- |
| 1 | 1.0× | 93% | 94% | ≥ 88% |
| 2 | 1.4× | 89% | 91% | ≥ 88% |
| 3 | **1.8× (Monday peak)** | **79% ✗** | **89% ✓** | ≥ 88% |
| 4 | 2.2× (stress) | 66% | 80% | Not required |

> **First run: FAIL.** This triggered the *Fail → Redesign* loop to Stage 3 (see the [Redesign Log](./03%20-%20Design%20%26%20De-risk.md#7-redesign-log)).
> **Re-test: PASS.** The capacity limit now sits between **1.8× and 2.2×** average daily volume. During the 1.8× run, 31% of that day's follow-ups were deferred to later bands, and all of them were still placed within the cadence window.

### Summary of all tests

| Test | NFR | Depth | Result | Evidence |
| :-- | :-- | :-- | :-- | :-- |
| T-01 | NFR-01 Capacity | Full | **Pass on re-test** (89% at 1.8×) | Gradient runs above |
| T-01b | NFR-01 Capacity (auto-dial escalation, added after the pilot) | Full | **Pass.** SLA 91% at 1.8× and 88% at 2.4×; abandoned-call rate within the Compliance limit. | Re-test log; Compliance sign-off (2 March 2027) |
| T-01 | NFR-02 Placement | Lighter | **Pass** (98.4% within the cadence window) | Observed during the re-test |
| T-02 | NFR-04 Permissions | Full | **Pass.** All team leader, agent and bulk-import attempts were blocked and logged. | Access test log |
| T-03 | NFR-03 Contact limits | Full | **Pass.** Cross-channel duplicates shared one cadence; 0 persons had more than 6 attempts; 0 calls outside permitted hours; opt-outs stopped at once. | Dialler attempt log |
| T-04 | NFR-05 Audit | Lighter | **Pass.** Histories for 20 leads were reconstructed in under 1 working day. | Reconstruction pack |
| T-05 | NFR-06 Alerting | Lighter | **Pass.** An alert was raised 40 minutes after the induced failure. | Alert log |
| T-06 | NFR-07 Recovery | Lighter | **Pass.** 0 lost and 0 duplicate attempts after a 30-minute stop. | Dialler log |
| T-07 | NFR-08 Usability | Lighter | **Pass.** All team leaders completed the tasks unaided. | Walkthrough notes |

---

## 8. Assurance Pack

| Component | Status |
| :-- | :-- |
| NFR Specification (NFR-01 to NFR-08) | Complete |
| Audit & Record-Keeping requirements | Complete; retention confirmed by Compliance |
| Test results (T-01 to T-07) | All passed (T-01 after one redesign) |
| Constraints Register | Updated (C4, C5 and C8 confirmed; C7 added) |
| **Guardrail signals for Stage 4** | 1-hour SLA ≥ 88% · 0 contact-limit breaches · **Monday follow-up deferral ≤ 35%** (new, from the redesign) |

**Destination:** Gate 3 evidence (approved 15 January 2027) and the Stage 4 Signal Register.

---

## 9. Traceability (T3A)

| NFR | Source (constraint / failure prompt) | Test result | Guardrail signal |
| :-- | :-- | :-- | :-- |
| NFR-01 | C1, C3; Boundary Values (EB2) | T-01 pass on re-test | SIG-G1: 1-hour SLA ≥ 88%; SIG-G3: Monday deferral ≤ 35% |
| NFR-03 | C4, C5; Data Privacy (EB6) | T-03 pass | SIG-G2: 0 contact-limit breaches |
| NFR-04 | C7; Permission Boundaries (EB3) | T-02 pass | Monitored through the configuration change log |
| NFR-05 | Audit Trail (EB8) | T-04 pass | Covered by Compliance audit |

---

## Checklist

- [x] Anti-pattern rules classified
- [x] Constraints Register updated
- [x] NFR Specification written
- [x] Audit & Record-Keeping requirements written and retention periods confirmed by Compliance
- [x] Every requirement has a measurable threshold
- [x] Top 3 risk areas selected
- [x] Test scenarios designed and executed
- [x] Results validated by the BA
- [x] Assurance Pack compiled for Gate 3
