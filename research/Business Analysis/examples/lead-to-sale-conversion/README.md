> [!NOTE]
> This file was AI generated as a fictional worked example. All names, figures and events are illustrative.

# Example Project · Lead-to-Sale Conversion Decline

A worked example of a Business Analyst following the [BA Process Guide](../../BA%20Process%20Guide.md) from first request to close-out.

## The situation

The **Head of Distribution** reports that lead-to-sale conversion for **wills and estate planning** has fallen from **15% to 8% over 10 months**. Leads arrive through a **partner API** and the **company website**. The **call centre** qualifies each lead within a 1-hour SLA. Simple needs are closed by **telesales** on the first call; complex needs are booked with an **advisor**. The BA's task is to analyse the data and come up with a plan to solve the issue.

## Project documents

| Stage | Document | Key outcome |
| :-- | :-- | :-- |
| 0 | [Plan & Engage](./00%20-%20Plan%20%26%20Engage.md) | The request is logged as a symptom. Only the first and last funnel steps have documented targets. |
| 1 | [Define the Problem](./01%20-%20Define%20the%20Problem.md) | Two root gaps were found. **Gap A** (follow-ups dropped under load) was selected; the contact rate target is 51% → 70%. |
| 2 | [Analyse & Prioritise](./02%20-%20Analyse%20%26%20Prioritise.md) | Three levers: **L1** reserved follow-up capacity · **L2** dialler retry cadence · **L3** rebalanced contact KPIs |
| 3 | [Design & De-risk](./03%20-%20Design%20%26%20De-risk.md) | The pre-mortem flagged KPI gaming, boundary values and permission overrides. A redesign was made after a failed load test. |
| 3A | [Assurance](./03A%20-%20Assurance.md) | 8 NFRs; the capacity test failed, then passed after redesign; Compliance limits were confirmed. |
| 4 | [Validate & Evaluate](./04%20-%20Validate%20%26%20Evaluate.md) | Contact rate rose from 51% to **62%** (locked); conversion rose from 7.9% to **9.6%**. |

## Results at a glance

| Measure | Before | After |
| :-- | --: | --: |
| Attempts per lead | 1.9 | 4.3 |
| Follow-up compliance | 44% | 97% |
| Contact rate | 51% | **62%** |
| Lead-to-sale conversion | 7.9% | **9.6%** |

**Next:** REQ-2026-015 (qualification and niche saturation) is logged as the next CALM cycle. It is needed to move towards the 15% business objective.

## Where the CALM loops were used

- **Lineage Test (Stage 1):** a single 7-point drop was split into two independent root gaps, each worth about 3 points.
- **Sphere of Authority (Stage 1):** *"not enough agents"* was reframed as *"no follow-up standard or capacity-based prioritisation"*.
- **Fail → Redesign (3A):** the Monday-peak load test failed, which led to a revised flex rule that passed on re-test.
- **Plateau → Lock (Stage 4):** the contact rate levelled off short of 70%, so the target was revised and the plateau locked.
- **Degraded guardrail → Adjust lever (Stage 4):** an SLA dip led to the auto-dial escalation, which was re-tested and Compliance-checked.
