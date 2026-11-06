> [!NOTE]
> This file was AI generated as a fictional worked example. All names, figures and events are illustrative.

# Stage 3 · Design & De-risk

**Project:** Lead-to-Sale Conversion Decline (REQ-2026-014)
**Target Gap:** GAP-014-A. Contact rate 51% → 70%.
**Levers:** L1 Reserved follow-up capacity · L2 Dialler retry rules · L3 Rebalanced contact KPIs
**CALM principle:** LIMIT Failure Modes. Ask how the chosen levers could break the process, then write the rules that prevent it.
**Status:** Complete. Gate 3 approved after one redesign loop.
**Date:** 15 January 2027

---

## 1. Future-State Options

| Lever | Options considered | Selected | Rationale |
| :-- | :-- | :-- | :-- |
| **L1** Queue rule | (a) Reserved capacity · (b) Fixed follow-up windows · (c) Dynamic priority score | **(a) Reserved capacity: 30% of agent time for due follow-ups** | Simple to explain, configure and audit. (c) was judged too opaque for team leaders to manage. |
| **L2** Dialler cadence | (a) Fixed intervals · (b) Varied time bands across days | **(b) Varied time bands** | Reaches leads who cannot answer at one time of day |
| **L3** KPIs | (a) Replace the SLA KPI · (b) Add contact KPIs alongside the SLA | **(b) Add alongside** | The 1-hour SLA (C3) must still be met |

### Proposed future-state cadence (L2), within Compliance limits

| Attempt | Timing | Time band |
| :-- | :-- | :-- |
| 1 | Within 1 hour of lead creation (existing SLA) | Any permitted hour |
| 2 | Day 1, at least 3 hours after attempt 1 | Different band from attempt 1 |
| 3 | Day 2 | Morning |
| 4 | Day 3 | Afternoon |
| 5 | Day 5 | Early evening (within permitted hours) |
| 6 | Day 7 | Morning |

**Stop conditions:** the lead is reached · the lead moves to telesales or an advisor · the lead opts out · 6 attempts have been made · 7 days have passed.

---

## 2. Pre-Mortem Workshop (Bounded Inversion)

**Participants:** Head of Distribution, Call Centre Manager, two team leaders, two agents, CRM Administrator, Compliance representative, BA.
**Question:** *"Using only L1, L2 and L3, within constraints C1–C6, how would we make this solution fail?"*

| Failure prompt | How the solution could fail | Workshop rating |
| :-- | :-- | :-- |
| **Misuse & Invalid Inputs** | Agents log quick "no answer" attempts or close leads early to hit the new follow-up KPI (L3) without real effort | **High** |
| **Boundary Values** | On high-volume days, reserving 30% for follow-ups causes the 1-hour SLA to be breached (L1 vs C3) | **High** |
| **Permission Boundaries** | Team leaders override the reserved capacity in busy periods, quietly undoing L1 | **High** |
| Out-of-Order Execution | A lead already passed to telesales or an advisor stays in the cadence and is called again | Medium |
| Idempotency & Retries | Duplicate partner and website leads for the same person each start a cadence, so the client is over-called | Medium |
| Scale Extremes | Monday spikes of weekend website leads overload the queue | Medium (covered by Boundary Values) |
| Error Visibility & Feedback | A dialler rule fails silently and follow-ups stop without anyone noticing | Medium |
| Race Conditions | The dialler retries a lead at the moment an agent reaches it manually | Low |
| External Interruptions | A dialler outage stops all attempts | Low |
| Null & Partial States | A lead with no valid phone number enters the cadence | Low |
| Audit Trail & Record-Keeping *(3A)* | The company cannot prove that contact limits were respected | Medium |
| Data Privacy (POPIA) *(3A)* | An opt-out is not honoured by the dialler | Medium |
| Recovery (RPO / RTO) *(3A)* | After an outage, the cadence restarts and repeats attempts | Low |
| Accessibility *(3A)* | The KPI dashboard is unreadable for some team leaders | Low |

---

## 3. Execution Bridge

| ID | Lever | Inverted sabotage | Anti-pattern rule | Rule type | Action |
| :-- | :-- | :-- | :-- | :-- | :-- |
| EB1 | L3 | Agents log fake or rushed attempts to hit the KPI | An attempt counts only if the **dialler** placed it and it rang for at least 20 seconds. Agents cannot log attempts manually. A weekly QA sample checks 5% of "No answer" and "Not interested" dispositions. | Business rule + acceptance criterion | AC-01, AC-02 |
| EB2 | L1 | A 30% reserve breaches the 1-hour SLA on peak days | The reserve **flexes automatically**. If the new-lead queue is projected to breach the 1-hour SLA, the reserve drops to a **0% floor for up to 3 hours**, then restores. Deferred follow-ups move later within the cadence window and are never dropped. *(Revised; see Redesign Log.)* | **NFR** (capacity) | AC-03 → 3A |
| EB3 | L1 | Team leaders override the reserve | Only the CRM Administrator role can change the reserve, and only with Head of Distribution approval. Every change is logged with a reason. The automatic flex (EB2) removes the need for manual overrides. | **NFR** (access) + audit | AC-04 → 3A |
| EB4 | L2 | Leads already with telesales or an advisor are called again | The cadence stops automatically on any status change beyond *New / Attempting* | Functional | AC-05 |
| EB5 | L2 | Duplicate leads start several cadences | Deduplicate by phone number over a rolling 7-day window. Each person has one cadence. | Functional | AC-06 |
| EB6 | L2 | The client is over-called or called outside permitted hours | Hard cap of **6 attempts per person in 7 days**, across all duplicates. Calls only within the permitted hours set by Compliance. Opt-out stops the cadence immediately. | **NFR** (privacy / compliance) | AC-07 → 3A |
| EB7 | L2 / L3 | Dialler rules fail silently | Alert team leaders and the CRM Administrator within 1 hour if follow-up placements fall more than 20% below expected | **NFR** (supportability) | AC-08 → 3A |
| EB8 | All | No proof that limits were respected | Every attempt is logged with lead ID, timestamp, outcome and source (dialler or agent), and retained per the Compliance-confirmed schedule | **NFR** (audit) | AC-09 → 3A |

> Rules marked **→ 3A** are non-functional and are specified and tested in [Section 3A](./03A%20-%20Assurance.md).

---

## 4. Solution Specification

### US-01 · Reserved follow-up capacity (L1)

*As a call centre team leader, I want 30% of agent capacity reserved for due follow-ups, so that follow-ups are not dropped when new leads arrive.*

| AC | Acceptance criterion |
| :-- | :-- |
| AC-03 | The reserve is applied by the dialler's queue rules and flexes to a 0% floor for up to 3 hours when the 1-hour SLA is at risk. Deferred follow-ups remain within the 7-day cadence. If the SLA is still about to be breached, first attempts on new leads switch to auto-dialling until the queue recovers *(added 2 March 2027)*. |
| AC-04 | Only the CRM Administrator role can change the reserve %, and every change is logged with user, time, old value, new value and reason |

### US-02 · Follow-up cadence (L2)

*As the call centre, I want the dialler to schedule up to 6 attempts over 7 days at varied times, so that more leads are reached without relying on agents' memory.*

| AC | Acceptance criterion |
| :-- | :-- |
| AC-05 | The cadence stops when the lead is reached, moves to telesales or an advisor, opts out, or reaches 6 attempts or 7 days |
| AC-06 | Leads with the same phone number in a rolling 7-day window share one cadence |
| AC-07 | No person receives more than 6 attempts in 7 days; no call is placed outside permitted hours; opt-outs stop the cadence immediately |

### US-03 · Contact KPIs and reporting (L3)

*As the Head of Distribution, I want contact rate and follow-up compliance reported daily alongside the 1-hour SLA, so that follow-ups are managed as measured work.*

| AC | Acceptance criterion |
| :-- | :-- |
| AC-01 | KPIs count only dialler-placed attempts that rang for at least 20 seconds |
| AC-02 | A weekly QA sample of 5% of "No answer" and "Not interested" dispositions is reviewed by team leaders |
| AC-08 | An alert is raised within 1 hour if follow-up placements fall more than 20% below expected |
| AC-09 | The full contact history of any lead can be produced from the attempt log |

KPI definitions:

- **Contact rate** = leads reached within 7 days ÷ leads received
- **Follow-up compliance** = due attempts placed on time ÷ due attempts
- **1-hour SLA** = unchanged

---

## 5. Change & Transition Plan

| Area | Plan |
| :-- | :-- |
| Configuration | Configure and test the dialler rules on the **dialler test instance** (Section 3A) before any production change |
| Rollout | Pilot with one call centre team, then a phased rollout (Stage 4) |
| Training | 1-hour session for agents (cadence, dispositions, QA sample); 2-hour session for team leaders (reserve, flex, dashboard, alerts) |
| Communication | Head of Distribution briefs the call centre on the new KPIs before the pilot |
| Data | No data migration. The January and October 2026 funnel baselines are retained for comparison. |
| **Rollback** | Restore the saved dialler configuration (first-contact rules only) in under 5 minutes. KPIs revert to the 1-hour SLA only. |

---

## 6. Traceability (T3)

| Acceptance criterion | Anti-pattern rule | Requirement | Lever |
| :-- | :-- | :-- | :-- |
| AC-01, AC-02 | EB1 | R3 | L3 |
| AC-03 | EB2 | R2 | L1 |
| AC-04 | EB3 | R2 | L1 |
| AC-05 | EB4 | R1 | L2 |
| AC-06 | EB5 | R1 | L2 |
| AC-07 | EB6 | R1 | L2 |
| AC-08 | EB7 | R1, R3 | L2, L3 |
| AC-09 | EB8 | R1, R2, R3 | All |

---

## Checklist

- [x] Design options documented per lever
- [x] Pre-mortem completed against all failure prompts
- [x] Anti-pattern rules written and classified
- [x] Section 3A completed and the Assurance Pack produced
- [x] Functional requirements and acceptance criteria written
- [x] Change & Transition Plan prepared
- [x] Acceptance criteria traced to rules and requirements

## 7. Redesign Log

| Date | Trigger | Change | Result |
| :-- | :-- | :-- | :-- |
| 8 January 2027 | **3A test T-01 failed.** At the Monday peak (1.8× volume, 70% agents), the 1-hour SLA fell to 79% even with the reserve flexing to 15%. | Followed the *Fail → Redesign* loop back to the pre-mortem. Options considered: lower the flex floor (within L1); re-time paid lead generation (R5 from the backlog, which would add a 4th lever); escalate the capacity dependency C1 to Operations / HR. **Selected: lower the flex floor to 0% for up to 3 hours**, because it stays within L1 and within the sponsor's control. | Re-test **passed** (SLA 89% at 1.8×). See [3A results](./03A%20-%20Assurance.md#7-test-results). |
| 2 March 2027 | **Stage 4 pilot guardrail breach.** The 1-hour SLA dipped to 85% on one Monday. | **Auto-dial escalation added to L1:** when the 1-hour SLA is about to be breached, first attempts on new leads switch to auto-dialling until the queue recovers. | Re-tested as T-01b and checked by Compliance for abandoned or silent calls: **passed** (see [3A results](./03A%20-%20Assurance.md#7-test-results)). |

> **Trade-off accepted:** On peak days, follow-ups are deferred to later time bands. A new guardrail signal (Monday follow-up deferral) is carried to Stage 4 so that this trade-off is monitored.

## Gate 3 · Design Sign-off

| Item | Outcome |
| :-- | :-- |
| Approvers | Head of Distribution; CRM Administrator (IT); Compliance |
| Evidence | Solution Requirements Specification (this document) and the [Assurance Pack](./03A%20-%20Assurance.md#8-assurance-pack) |
| Decision | **Approved** |
| Conditions | The pilot must monitor the Monday follow-up deferral guardrail. The capacity dependency C1 remains open with Operations / HR. |
| Date | 15 January 2027 |

**Next:** [Stage 4 · Validate & Evaluate](./04%20-%20Validate%20%26%20Evaluate.md)
