> [!NOTE]
> This file was AI generated as a fictional worked example. All names, figures and events are illustrative.

# Stage 4 · Validate & Evaluate

**Project:** Lead-to-Sale Conversion Decline (REQ-2026-014)
**Target Gap:** GAP-014-A. Contact rate 51% → 70%, **revised to 62%** (see Part B).
**CALM principle:** MEASURE the Signal Delta. Prove the gap has closed with evidence; never assume it from delivery alone.
**Status:** Complete. Project closed.
**Date:** 30 April 2027

---

## Part A · Signal Discovery

### Step 1 · Anchor to the Target Gap

| Outcome signal | Current (October 2026) | Desired |
| :-- | --: | --: |
| Contact rate (leads reached within 7 days ÷ leads received) | 51% | 70% |
| Lead-to-sale conversion *(business objective, reported separately)* | 7.9% | 15% (6 months) / 20% (12 months) |

### Step 2 · Trace the lever paths

| Lever | Lever → first state change → Target Gap metric | Where the effect shows first |
| :-- | :-- | :-- |
| L2 Dialler cadence | Retry rules → more attempts per lead → more leads answer → contact rate | **Attempts per lead** (same day) |
| L1 Reserved capacity | Reserve → due follow-ups placed on time → more leads answer → contact rate | **Follow-up compliance** (same day) |
| L3 Contact KPIs | KPI visibility → team leaders act on gaps → compliance sustained → contact rate | **Disposition accuracy** (weekly QA) |

### Step 3 · Candidate signals on the 4 axes

| Axis | Candidates |
| :-- | :-- |
| Temporal | Time to first attempt; time between attempts; days to reach |
| Quantitative | Attempts per lead; contact rate; reach rate by attempt number; qualification rate |
| Qualitative | Disposition accuracy (QA sample); share of "No answer" dispositions |
| Resource | Agent talk time per lead reached; dialler utilisation |

### Step 4 · Viability filter

| Candidate | Measurable from existing data? | Attributable to one lever? | Short window? | Stable baseline? | Result |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Attempts per lead (7 days) | Yes (dialler log) | Yes (L2) | Yes (daily) | Yes (1.9, stable since June) | **Pass** |
| Follow-up compliance | Yes (dialler log) | Yes (L1) | Yes (daily) | Partly (newly measured; 2-week baseline taken) | **Pass** |
| Disposition accuracy | Yes (QA sample) | Yes (L3) | Weekly | Yes | **Pass** |
| Reach rate by attempt number | Yes | No (L1 and L2 both affect it) | Yes | Yes | Fail (not attributable) |
| Days to reach | Yes | No | No (up to 7 days) | Yes | Fail |
| Agent talk time | Partly | No | Yes | No (varies widely) | Fail |

### Steps 5–6 · Selection (Max-3) and guardrails

- **Primary signals:** one per lever (from step 4).
- **Outcome signals:** contact rate and conversion.
- **Guardrails:** the three from the Section 3A Assurance Pack.

### Steps 7–8 · Signal Register (confirmed with the CRM Administrator and BI)

| Signal ID | Name | Type | Lever | Formula | Data source | Owner | Baseline | Target | Minimum meaningful change | Window | Frequency |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | --: | --: | :-- | :-- | :-- |
| SIG-O1 | Contact rate | Outcome | All | Leads reached within 7 days ÷ leads received | CRM | Head of Distribution | 51% | 70% | 2 pp | 7 days | Weekly |
| SIG-O2 | Lead-to-sale conversion | Outcome (business objective) | All | Sales (signed and paid) ÷ leads received | CRM | Head of Distribution | 7.9% | 15% | 0.5 pp | Monthly | Monthly |
| SIG-P1 | Attempts per lead | Primary | L2 | Dialler attempts within 7 days ÷ leads | Dialler log | CRM Administrator | 1.9 | ≥ 4.0 | 0.3 | Daily | Daily |
| SIG-P2 | Follow-up compliance | Primary | L1 | Due attempts placed on time ÷ due attempts | Dialler log | Call Centre Manager | 44% | ≥ 95% | 5 pp | Daily | Daily |
| SIG-P3 | Disposition accuracy | Primary (sustaining) | L3 | Correct dispositions ÷ QA sample | QA sample | Team leaders | 93% | ≥ 95% | 2 pp | Weekly | Weekly |
| SIG-G1 | 1-hour SLA | Guardrail | L1 | First attempts within 1 hour ÷ leads | Dialler log | Call Centre Manager | 88% | ≥ 88% | — | Daily | Daily |
| SIG-G2 | Contact-limit breaches | Guardrail | L2 | Persons with > 6 attempts in 7 days, or calls outside permitted hours | Dialler log | Compliance | 0 | 0 | Any breach | Daily | Daily |
| SIG-G3 | Monday follow-up deferral | Guardrail | L1 | Follow-ups deferred on Mondays ÷ follow-ups due on Mondays | Dialler log | Call Centre Manager | — | ≤ 35% | — | Weekly | Weekly |

---

## Part B · Test and Roll Out

### Pilot design (R.I.P.)

| Criterion | How it is met |
| :-- | :-- |
| **Reversible** | Each lever can be switched off by restoring the saved dialler configuration in under 5 minutes |
| **Isolated** | **Team A** receives one lever at a time, two weeks each (L2, then L1, then L3). **Team B** continues unchanged as a comparison. |
| **Proximal** | SIG-P1 and SIG-P2 move daily; SIG-O1 is read weekly |

### Pilot results (18 January – 26 February 2027)

| Period | Levers active (Team A) | Team A contact rate | Team B contact rate | Primary signal |
| :-- | :-- | --: | --: | :-- |
| Baseline | None | 51% | 51% | — |
| Weeks 1–2 | L2 | **56%** | 51% | SIG-P1: 1.9 → 4.2 attempts |
| Weeks 3–4 | L2 + L1 | **60%** | 52% | SIG-P2: 44% → 96% |
| Weeks 5–6 | L2 + L1 + L3 | **60%** | 51% | SIG-P3: 96% (no gaming found) |

| Guardrail | Result |
| :-- | :-- |
| SIG-G1 1-hour SLA | **Breached once:** 85% on one Monday. All other days ≥ 88%. |
| SIG-G2 Contact-limit breaches | 0 |
| SIG-G3 Monday deferral | Within limit (max 29%) |

### Reading the signal

| Observation | Reading | Decision |
| :-- | :-- | :-- |
| Contact rate rose with L2 and L1, then stayed level at 60% with L3 | **Plateau reached**, 10 pp short of the 70% target | The sponsor **locked** L1 and L2 and **revised the target** for GAP-014-A to the plateau achievable with current headcount (C1). It was later updated to the full-rollout result (62%). |
| L3 produced no measurable change in contact rate | No signal as a driver; disposition accuracy is healthy | **Kept as a sustaining control.** It keeps follow-ups visible and protects the gains. |
| The 1-hour SLA dipped to 85% on one Monday | **Degraded guardrail.** The lever needs adjusting. | **Auto-dial escalation added to L1.** When the SLA is about to be breached, first attempts switch to auto-dialling. Re-tested (T-01b) and Compliance-checked: passed. |

### Phased rollout (gradient)

| Step | Scope | Contact rate | Guardrails |
| :-- | :-- | --: | :-- |
| 1 | Team A (pilot) | 60% | Within limits after the auto-dial escalation |
| 2 | Half the call centre (8–19 March 2027) | **61%** | Within limits |
| 3 | Full call centre (from 22 March 2027) | **62%** | Within limits |

> **Reading:** *still improving* at each step, as KPI visibility (L3) spread good practice across teams. At full scale, the contact rate held at **62% for four consecutive weeks**, so the plateau was confirmed. **Locked** on 23 April 2027. The new process is baselined at 62%.

---

## Part C · Report and Close

### Questions answered

| Question | Answer |
| :-- | :-- |
| **Is the Target Gap closed?** | **Against the revised target (62%): yes.** Contact rate rose from 51% to 62%. The original 70% target was not reached; the remaining 8 pp is linked to reduced agent capacity (C1) and possibly to lower answer rates in the saturated niche (REQ-2026-015). |
| Did conversion improve? | Yes. **7.9% → 9.6%** (2 000 leads; 1 240 reached; 446 qualified; 192 sales in April 2027). Downstream rates were unchanged, as predicted. |
| Is the business objective (15% by May 2027) on track? | **No.** As flagged at Gate 1, 15% also requires Chain B (qualification) to be resolved. 20% is above the historic baseline, and the analysis does not yet support it. |

### Metrics, data points and decisions

| Item | Value |
| :-- | :-- |
| Attempts per lead (SIG-P1) | 1.9 → 4.3 |
| Follow-up compliance (SIG-P2) | 44% → 97% |
| Contact rate (SIG-O1) | 51% → **62%** (locked) |
| Conversion (SIG-O2) | 7.9% → **9.6%** |
| Guardrails | SLA ≥ 88% since the auto-dial escalation; 0 contact-limit breaches; Monday deferral ≤ 35% |
| Locked settings | Reserve 30%, flexing to 0% for up to 3 hours; auto-dial escalation; 6 attempts in 7 days in varied time bands |
| Key decisions | Gap A chosen over Gap B (Gate 1); flex floor lowered after test failure (Stage 3); target revised at plateau; L3 kept as a sustaining control |

### Recommendations

1. **Start REQ-2026-015** (qualification and niche saturation) as the next CALM cycle. It is the largest remaining contributor to the conversion gap.
2. **Present the capacity evidence to Operations / HR (C1).** The pilot shows that contact rate levels off under the current headcount.
3. **Revisit the business objective** with the Head of Distribution, using the contribution model from Stage 1.

### Close-out

| Item | Status |
| :-- | :-- |
| Final report | Issued to the Head of Distribution on 30 April 2027 |
| Handover | Dialler rules and the reserve → CRM Administrator; KPIs, QA sample and guardrails → Call Centre Manager |
| Monitoring | SIG-O1, SIG-P2, SIG-G1 and SIG-G2 stay on the daily dashboard |

### Lessons learnt

- **What gets measured gets protected.** Only first contact was measured, so under pressure the unmeasured follow-ups were dropped.
- **The pre-mortem earned its place.** The boundary-value failure it predicted was confirmed by the load test before go-live, not discovered in production.
- **Isolating levers paid off.** Adding one lever at a time showed that L3 sustains the gains rather than driving them, which would have been invisible if all three had launched together.
- **Flag the expectation gap early.** Separating the project's Target Gap from the business objective at Gate 1 avoided a "failed project" perception at close-out.

### Checklist

- [x] Signal Register completed and confirmed by data owners
- [x] UAT / pilot designed with R.I.P.
- [x] Phased rollout executed and signals recorded at each step
- [x] Plateau reached and the new process baselined
- [x] Target Gap closure confirmed with evidence (against the revised target)
- [x] Final report issued
- [x] Handover to operations completed
- [x] Lessons learnt recorded

---

## Traceability Matrix (complete)

| Request (T0) | Target Gap (T1) | Requirement / Lever (T2) | Anti-pattern rule / AC (T3) | NFR / Test (T3A) | Signal (T4) | Gap closed? |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| REQ-2026-014 | GAP-014-A | R2 / L1 | EB2 / AC-03; EB3 / AC-04 | NFR-01 / T-01, T-01b; NFR-04 / T-02 | SIG-P2, SIG-G1, SIG-G3 | Yes (revised target) |
| REQ-2026-014 | GAP-014-A | R1 / L2 | EB4–EB6 / AC-05 to AC-07 | NFR-03 / T-03 | SIG-P1, SIG-G2 | Yes (revised target) |
| REQ-2026-014 | GAP-014-A | R3 / L3 | EB1 / AC-01, AC-02; EB7 / AC-08 | NFR-06 / T-05 | SIG-P3 | Sustaining control |
| REQ-2026-014 | GAP-014-A | All | EB8 / AC-09 | NFR-05 / T-04 | — | Audit evidence |
| REQ-2026-014 | Chain B | R9 | — | — | — | → REQ-2026-015 |
