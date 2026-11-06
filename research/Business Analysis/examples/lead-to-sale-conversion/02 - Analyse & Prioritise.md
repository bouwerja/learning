> [!NOTE]
> This file was AI generated as a fictional worked example. All names, figures and events are illustrative.

# Stage 2 · Analyse & Prioritise

**Project:** Lead-to-Sale Conversion Decline (REQ-2026-014)
**Target Gap:** GAP-014-A. Contact rate 51% → 70% (−19 pp).
**CALM principle:** ANALYZE the Levers. Every requirement must name the variable it changes and how that variable closes the Target Gap.
**Status:** Complete. Gate 2 approved.
**Date:** 4 December 2026

---

## 1. System Context Model

### Actors

| Actor | Current state | Relevance to GAP-014-A |
| :-- | :-- | :-- |
| Call centre agents | About 30% fewer experienced agents; about 40% more leads per agent per day | Make every contact and follow-up attempt |
| Call centre team leaders | Manage queues; aware that follow-ups are being dropped | Enforce queue priorities |
| **Auto-dialler** | Exists and supports retry rules, but is **configured for first contact only** | Could automate follow-up attempts |
| CRM | Holds lead records, statuses and the activity log | Holds follow-up tasks and the contact data |
| CRM Administrator / IT | Configure the dialler, routing and statuses | Make the configuration changes |
| Telesales agents and advisors | Downstream rates unchanged | Out of scope (stable) |

### Inputs

| Input | Current state | Controllable by Distribution? |
| :-- | :-- | :-- |
| Partner qualified leads (≈ 55%, ≈ 1 100 / month) | Volume and timing fixed by contract | **No** |
| Paid lead generation (website, ≈ 45%, ≈ 900 / month) | Volume and timing set by campaign spend | **Yes** |
| Contact consent | Both channels capture consent for **phone and SMS** | Fixed by capture wording |
| Lead contact data | Phone number, timestamp, source | — |
| Agent time | Reduced capacity after attrition | No (headcount sits with Operations / HR) |

### Rules

| Rule | Current state |
| :-- | :-- |
| 1-hour first-contact SLA | The **only** measured contact rule; mostly met (88%) |
| Follow-up cadence | **None documented**. Each agent decides. |
| Queue prioritisation | New leads always go first, so follow-ups wait |
| Dialler retry rules | Not configured for follow-ups |
| Call centre KPIs and incentives | Set by **Distribution**; centred on the first-contact SLA |
| Contact frequency and permitted calling hours | Must comply with applicable direct-marketing and conduct rules (**to be confirmed by Compliance**) |

---

## 2. Candidate Requirements

Elicited by asking, for each variable: *"What must change to close the contact-rate gap?"*

| Req ID | Candidate requirement | Category |
| :-- | :-- | :-- |
| R1 | Configure dialler retry rules for follow-ups: at least 4 attempts over 5 days, at varied times of day | Actor (tool) |
| R2 | Introduce a follow-up cadence standard and a **capacity-based queue rule** that reserves agent time for due follow-ups while still meeting the 1-hour SLA | Rule |
| R3 | Rebalance contact KPIs: add contact rate and follow-up compliance alongside the 1-hour SLA, with daily reporting to team leaders | Rule |
| R4 | Send an SMS after an unanswered attempt, offering a callback | Input / Actor |
| R5 | Re-time and cap **paid** lead generation to match daily call centre capacity | Input |
| R6 | Schedule attempts at the hours with the best answer rates, based on CRM data | Input |
| R7 | Backfill the lost agents | Actor |
| R8 | Reduce or re-time **partner** lead volumes | Input |
| R9 | Redesign the initial pitch for the saturated niche | Rule |

---

## 3. Stress Test

| Req ID | Elimination: collapses without it? | Amplification: moves the outcome? | Control: can Distribution change it? | Result |
| :-- | :-- | :-- | :-- | :-- |
| R1 | **Yes.** Without automated retries, follow-ups depend on scarce agent time. | Yes | Yes (IT configures) | **Core + Lever** |
| R2 | **Yes.** Without a rule, follow-ups are dropped under load. | Yes | Yes | **Core + Lever** |
| R3 | No | Yes. Agents work towards what is measured. | Yes | **Lever** |
| R4 | No | Yes (moderate) | Yes, with Compliance confirmation | **Lever** |
| R5 | No | Yes (moderate) | Yes, paid leads only | **Lever** |
| R6 | No | Yes (moderate) | Yes | **Lever** |
| R7 | — | Yes | **No.** It sits with Operations / HR. | → **Constraints Register** |
| R8 | — | Yes | **No.** It is fixed by contract. | → **Constraints Register** |
| R9 | — | Yes | Deferred by the sponsor | → **Backlog (REQ-2026-015)** |

> **Note on R5:** Reducing paid lead volume would raise the conversion *rate* without necessarily adding sales. Any use of R5 must carry a guardrail that the **total number of sales must not fall** (carried to Stage 4).

---

## 4. Lever Score

| Req ID | Requirement | Core? | Control (1–5) | Impact (1–5) | **Score** | Decision |
| :-- | :-- | :-- | --: | --: | --: | :-- |
| R2 | Follow-up cadence standard and capacity-based queue rule | Yes | 5 | 5 | **25** | **Top 3: Lever L1** |
| R1 | Dialler retry rules for follow-ups | Yes | 4 | 5 | **20** | **Top 3: Lever L2** |
| R3 | Rebalanced contact KPIs and daily reporting | No | 5 | 4 | **20** | **Top 3: Lever L3** |
| R4 | SMS after an unanswered attempt, with callback | No | 3 | 3 | 9 | Backlog (rank 1) |
| R6 | Best-time-to-call scheduling | No | 4 | 2 | 8 | Backlog (rank 2) |
| R5 | Re-time and cap paid lead generation | No | 4 | 2 | 8 | Backlog (rank 3) |

### Selected levers for this release

| Lever | Requirement | How it closes GAP-014-A |
| :-- | :-- | :-- |
| **L1** | R2: Follow-up cadence standard and capacity-based queue rule | Stops follow-ups being dropped when new leads arrive |
| **L2** | R1: Dialler retry rules | Restores the number of attempts per lead without depending on agents remembering |
| **L3** | R3: Rebalanced contact KPIs and reporting | Makes follow-ups measured work, so agents and team leaders give them priority |

> **Capacity consideration:** More attempts per lead means more dialling. The dialler (L2) only connects agents to answered calls, which offsets some of the extra load. Whether the reduced team can absorb the cadence is tested in **Section 3A** (Scale Extremes).

---

## 5. Constraints Register (initial)

| ID | Constraint / Assumption / Dependency | Type | Source | Owner | Review date |
| :-- | :-- | :-- | :-- | :-- | :-- |
| C1 | Agent headcount is about 30% below the experienced baseline; backfill sits outside this project | Dependency | Change history | Operations / HR | 15 January 2027 |
| C2 | Partner qualified lead volume and timing are fixed by contract | Constraint | Partner contract | Partner Integration Owner | Contract renewal |
| C3 | The 1-hour first-contact SLA must continue to be met | Constraint | Call centre SLA | Head of Distribution | Quarterly |
| C4 | Contact is limited to phone and SMS under existing consent. Compliance must confirm that the consent wording covers automated dialling and SMS. | Constraint | POPIA; capture wording | Compliance | Before Gate 3 |
| C5 | Contact frequency and calling hours must comply with applicable direct-marketing and conduct rules | Constraint | Regulatory (to be confirmed) | Compliance | Before Gate 3 |
| C6 | Dialler and CRM changes follow the IT change process | Constraint | IT policy | IT | Per change |
| A1 | Downstream rates (telesales, appointment, advisor close) stay stable | Assumption | Stage 1 analysis | BA | Monthly |
| A2 | Answer rates per attempt are similar to January 2026 | Assumption | Stage 1 analysis | BA | Tested in pilot |

---

## 6. Traceability (T2)

| Req ID | Lever | Target Gap |
| :-- | :-- | :-- |
| R2 | L1 | GAP-014-A |
| R1 | L2 | GAP-014-A |
| R3 | L3 | GAP-014-A |
| R4, R5, R6 | Backlog | GAP-014-A |
| R9 | — | REQ-2026-015 |

---

## Checklist

- [x] Context model completed (Actors, Inputs, Rules)
- [x] Every requirement stress-tested
- [x] Constraints Register started
- [x] Lever Scores calculated
- [x] Top 1–3 levers selected and the backlog ranked
- [x] Every requirement traced to a lever and to the Target Gap

## Gate 2 · Priorities & Constraints Approval

| Item | Outcome |
| :-- | :-- |
| Approvers | Head of Distribution; Call Centre Manager; CRM Administrator (IT) |
| Decision | **Approved.** Levers L1–L3 are in scope; R4–R6 are in the backlog. |
| Conditions | Compliance to confirm C4 and C5 before Gate 3 |
| Date | 4 December 2026 |

**Next:** [Stage 3 · Design & De-risk](./03%20-%20Design%20%26%20De-risk.md)
