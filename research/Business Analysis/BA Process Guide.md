> [!NOTE]
> This file was AI generated. Please review it for accuracy before use.

# Business Analysis Process Guide (CALM)

**Purpose:** a step-by-step procedure for carrying out business analysis according to *business analysis workflow (CALM).canvas*.
**How to use:** work through the stages in order. Complete every checklist item and template before you request the gate approval at the end of each stage.

---

## Roles

| Role | Responsibility in this process |
| :-- | :-- |
| **Business Analyst (BA)** | Owns the process, runs elicitation, produces every deliverable and maintains traceability |
| **Sponsor / Business Owner** | Approves the problem and scope (Gate 1) and the design (Gate 3) |
| **Stakeholders and Users** | Take part in process walks, workshops and pilots; agree priorities (Gate 2) |
| **QA / IT** | Run non-functional tests (Section 3A) and support the pilot and rollout |
| **Data Owners** | Confirm that data is available and reliable for signals and tests |
| **Compliance / Legal** | Review regulatory, audit and record-keeping requirements where applicable |

---

## Stage 0 · Plan & Engage

**CALM principle: set the boundary first.**
**Entry criteria:** a request has been received.

### Procedure

1. Log the request exactly as stated, and assign a **Request ID** (trace T0).
2. Record whether the request describes a *symptom* or a *proposed solution*. Do not treat it as the problem yet.
3. Identify and record the stakeholders:
   - Sponsor / business owner
   - Primary users (interface users, API submission point)
   - Secondary users (people who use the outputs)
   - Administrative users
   - Tool and data owners
4. Define the **Baseline Contract**:
   - Entry point and Exit point of the process
   - Trigger events
   - Documented SLAs and target metrics
5. Agree the BA approach (meetings, workshops, timelines, how approvals will be obtained).

### Checklist

- [ ] Request logged with Request ID
- [ ] Stakeholder register completed
- [ ] Entry, Exit and trigger events documented
- [ ] SLAs and target metrics collected
- [ ] BA approach agreed with the sponsor

**Output:** BA approach, stakeholder register and system boundary.

---

## Stage 1 · Define the Problem

**CALM principle: CLARIFY the Target Gap.**
**Entry criteria:** Stage 0 outputs are complete.

### Procedure

1. **Walk the as-is process** with users, from Entry to Exit. At each hand-off, record the expected state and the observed state.
2. **Elicit on the 4 axes** at every step:
   - *Temporal:* how long does it take? Where does work wait?
   - *Quantitative:* what volumes come in, and where do they drop off?
   - *Qualitative:* what errors or missing data occur?
   - *Resource:* what does it cost in effort, money or rework?
3. **List candidate gaps.** Every case where Expected ≠ Observed becomes a candidate.
4. **Apply the Lineage Test** to each gap. Trace one level upstream; if the gap exists only because of another gap, keep the root gap and record the symptom as evidence.
5. **Apply the Sphere of Authority Test**:
   - Controllable by the project → in scope.
   - Dependent on a third party → reframe it as an internal gap, or log it as a dependency.
6. **Fallback:** if no gap is controllable, narrow the system boundary and return to step 1.
7. Write the **Problem Statement** using the template below, and assign a **Target Gap ID** (trace T1).
8. Present the Problem Statement to the sponsor for **Gate 1**.

### Template: Problem Statement

| Field | Entry |
| :-- | :-- |
| Target Gap ID | |
| Gap description | |
| Current verifiable state (metric and value) | |
| Desired target state (metric and value) | |
| **Target Gap (Current − Desired)** | |
| Evidence (symptoms observed) | |
| In scope | |
| Out of scope | |
| Dependencies | |

> If the gap cannot be stated as a number, a yes/no value or a structural fact, it is not yet defined.

### Checklist

- [ ] As-is process walked from Entry to Exit with users
- [ ] All 4 axes covered
- [ ] Candidate gaps listed
- [ ] Root gap isolated (Lineage Test)
- [ ] Scope set (Sphere of Authority Test)
- [ ] Problem Statement completed and measurable

### Gate 1: Problem & Scope Approval

- **Approver:** Sponsor
- **Agreed:** proceed to Stage 2.
- **Not agreed:** return to step 1 of this stage.

---

## Stage 2 · Analyse & Prioritise

**CALM principle: ANALYZE the Levers.**
**Entry criteria:** Gate 1 approved.

### Procedure

1. **Model the system context** in three categories:
   - **Actors:** users from the stakeholder register, plus primary, secondary and administrative tools.
   - **Inputs:** information required, data sources, volumes, time and budget.
   - **Rules:** business rules, policies, filtering and constraints, access rules and SLAs.
2. **Elicit candidate requirements.** For each variable, ask: *"What must change to close the Target Gap?"*
3. **Stress-test each requirement** in this order:
   1. **Elimination:** if removed, does the process collapse? If yes, mark it as a **core requirement** (protect it).
   2. **Amplification:** if changed, does the outcome move? If yes, mark it as a **value driver (lever)**.
   3. **Control:** can the project change it? If not, move it to the **Constraints Register**.
4. **Score each controllable requirement** using the Lever Score table below.
5. Select the **top 1–3 levers** as the scope for this release. Move all others to the **Backlog**.
6. Link every requirement to its lever and to the Target Gap (trace T2).
7. Present the Prioritised Requirements to stakeholders for **Gate 2**.

### Template: Lever Score

| Req ID | Requirement | Category (Actor / Input / Rule) | Core? | Lever? | Control (1–5) | Impact (1–5) | **Score (C × I)** | Decision (Top 3 / Backlog) |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| | | | | | | | | |

### Template: Constraints Register (initial)

| ID | Constraint / Assumption / Dependency | Type | Source | Owner | Review date |
| :-- | :-- | :-- | :-- | :-- | :-- |
| | | | | | |

### Checklist

- [ ] Context model completed (Actors, Inputs, Rules)
- [ ] Every requirement stress-tested
- [ ] Constraints Register started
- [ ] Lever Scores calculated
- [ ] Top 1–3 levers selected and the backlog ranked
- [ ] Every requirement traced to a lever and to the Target Gap

### Gate 2: Priorities & Constraints Approval

- **Approvers:** Stakeholders
- **Agreed:** proceed to Stage 3.

---

## Stage 3 · Design & De-risk

**CALM principle: LIMIT Failure Modes.**
**Entry criteria:** Gate 2 approved.

### Procedure

1. Draft one or more **future-state design options** per lever, within the Constraints Register.
2. Run a **pre-mortem workshop**. Ask: *"Using only these levers, within these constraints, how would this solution fail?"* Work through every failure prompt:

   | Behavioural | System & Data | Operational | Additional (from 3A) |
   | :-- | :-- | :-- | :-- |
   | Out-of-Order Execution | Scale Extremes | External Interruptions | Audit Trail & Record-Keeping |
   | Misuse & Invalid Inputs | Null & Partial States | Idempotency & Retries | Data Privacy (POPIA) |
   | Race Conditions | Boundary Values | Error Visibility & Feedback | Recovery (RPO / RTO) |
   | Permission Boundaries | | | Accessibility |

   RPO is the amount of data that may be lost; RTO is the time allowed for recovery.

3. Complete one **Execution Bridge** row per failure, using the template below.
4. **Write anti-pattern rules.** Each failure becomes a business rule, a non-functional requirement or an acceptance criterion.
5. **Hand all anti-pattern rules to Section 3A** for classification and testing. Complete Section 3A before step 8.
6. **Specify the solution**: user stories or functional requirements with acceptance criteria, per lever. Link each acceptance criterion to its anti-pattern rule and requirement (trace T3).
7. Prepare the **Change & Transition Plan**: data migration, training, rollout sequence and rollback plan.
8. Compile the **Solution Requirements Specification**, attach the Section 3A **Assurance Pack**, and submit both for **Gate 3**.

### Template: Execution Bridge

| Lever | Inverted sabotage (how it fails) | Anti-pattern rule (what prevents it) | Rule type (Business rule / NFR / Acceptance criterion) | Action / requirement |
| :-- | :-- | :-- | :-- | :-- |
| | | | | |

### Checklist

- [ ] Design options documented per lever
- [ ] Pre-mortem completed against all failure prompts
- [ ] Anti-pattern rules written and classified
- [ ] Section 3A completed and the Assurance Pack produced
- [ ] Functional requirements and acceptance criteria written
- [ ] Change & Transition Plan prepared
- [ ] Acceptance criteria traced to rules and requirements

### Gate 3: Design Sign-off

- **Approvers:** Business owner and IT, with Compliance / Legal review where applicable.
- **Evidence required:** Solution Requirements Specification and Assurance Pack.
- **Signed off:** proceed to Stage 4.

---

## Section 3A · Assurance: Testing, Audit & Constraints

**CALM principle: every quality, audit and compliance need is a measurable gap with a guardrail signal.**
**When:** runs alongside Stage 3 and must be complete before Gate 3. It requires a prototype or test environment.

### Procedure

1. **Classify the anti-pattern rules** received from Stage 3:
   - Functional rules → return them to Stage 3 as acceptance criteria.
   - Non-functional rules → continue below.
2. **Update the Constraints Register** (it is maintained here from this point onward):
   - Regulatory constraints: FAIS, FICA, POPIA, Companies Act
   - SLAs from the Baseline Contract
   - Access rules and technical limits
3. **Write the NFR Specification**, covering:
   - Performance and capacity
   - Availability and recovery (RPO / RTO)
   - Security and access
   - Data privacy (POPIA)
   - Auditability and record-keeping
   - Usability and accessibility
   - Maintainability and supportability
4. **Write the Audit & Record-Keeping requirements**:
   - What is recorded: who, what, when, before and after values
   - Retention periods, **as confirmed by Compliance**
   - Records are tamper-evident and retrievable on request
   - POPIA: minimise, secure and dispose of personal information
5. **Clarify thresholds.** Restate every requirement as a measurable target (see the template below).
6. **Prioritise (Max-3).** Score each area as Risk = Likelihood × Impact, focusing on the core components identified in Stage 2. The top 3 areas receive full testing; the rest receive lighter checks.
7. **Design test scenarios by inversion.** Ask: *"How would load, outage, misuse or bad data break this design?"* Cover load, stress, failover, security, privacy, audit-trail reconstruction and accessibility.
8. **Run the tests** (QA / IT run them; the BA validates the results):
   - **R.I.P.:** non-production environment, rollback ready, one variable per run, results visible quickly.
   - **Gradient:** increase the load step by step until performance levels off or degrades. Record that point as the **capacity limit**.
9. **Read the results** against each threshold:

   | Result | Action |
   | :-- | :-- |
   | **Pass** | Add the result to the Assurance Pack. The threshold becomes a **guardrail signal** for Stage 4. |
   | **Fail** | Return to the Stage 3 pre-mortem and design options. |
   | **New constraint found** | Update the Constraints Register. Return to Stage 2 if the scope changes. |

10. Compile the **Assurance Pack** and link each requirement to its source, test result and guardrail signal (trace T3A).

### Template: NFR Threshold & Test

| NFR ID | Category | Requirement | Measurable threshold | Source (Constraint / Prompt / SLA) | Risk (L × I) | Test scenario | Result | Pass / Fail |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| | | | | | | | | |

> Example threshold: *"95% of responses under 3 seconds at peak volume."* A requirement such as *"must be fast"* is not yet defined.

### Checklist

- [ ] Anti-pattern rules classified
- [ ] Constraints Register updated
- [ ] NFR Specification written
- [ ] Audit & Record-Keeping requirements written and retention periods confirmed by Compliance
- [ ] Every requirement has a measurable threshold
- [ ] Top 3 risk areas selected
- [ ] Test scenarios designed and executed
- [ ] Results validated by the BA
- [ ] Assurance Pack compiled for Gate 3

---

## Stage 4 · Validate & Evaluate

**CALM principle: MEASURE the Signal Delta.**
**Entry criteria:** Gate 3 signed off.

### Part A: Signal Discovery

1. **Anchor to the Target Gap.** Take the Stage 1 gap metric as the outcome signal, and record its current and desired values.
2. **Trace the lever path.** For each top lever, walk from the lever to the first change it causes, then to the Target Gap metric. Note where the effect first appears.
3. **List candidate signals** on the 4 axes:
   - *Temporal:* cycle time and wait time.
   - *Quantitative:* volumes, conversion and drop-off.
   - *Qualitative:* error rate and data completeness.
   - *Resource:* cost, effort and rework.
4. **Apply the viability filter.** Keep a signal only if it is:
   - measurable from an existing data source;
   - attributable to one lever;
   - visible within a short window;
   - set against a baseline stable enough to show a real change.

   If none pass, return to step 3.
5. **Select (Max-3).** Choose one primary signal per lever, preferring the earliest viable signal. Keep the gap metric as the outcome check.
6. **Add guardrail signals.** Add up to 3 measures that must not get worse, drawn from the Stage 3 failure modes, the constraints and the Section 3A guardrails.
7. **Specify each signal** using the template below.
8. **Confirm with the data owner** that the data is available, reliable and reportable. If not, return to step 4.
9. Finalise the **Signal Register**, and link each signal to its lever and the Target Gap (trace T4).

### Template: Signal Register

| Signal ID | Name | Type (Primary / Guardrail / Outcome) | Lever | Formula | Data source | Owner | Baseline | Target | Minimum meaningful change | Window | Frequency |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| | | | | | | | | | | | |

### Part B: Test and Roll Out

1. **Design the UAT / pilot** using the R.I.P. test:
   - *Reversible:* a rollback plan exists.
   - *Isolated:* one lever per test.
   - *Proximal:* the signal is visible quickly.
2. **Roll out in phases:** pilot group → wider group → full rollout. Measure the signals at each step.
3. **Read the signal** against the Target Gap baseline:

   | Reading | Action |
   | :-- | :-- |
   | **Still improving** | Continue to the next rollout step. |
   | **Plateau reached** | Lock the setting and baseline the new process. Proceed to Part C. |
   | **Degraded / no signal** | Adjust the lever, or return to Stage 2 (or to Stage 1 if the gap was wrong). |

### Part C: Report and Close

1. **Answer the key question:** is the Target Gap closed? Compare the current state with the desired state.
2. **Report the metrics, data points and decisions:** the signal per lever, the plateau setting and the decisions taken.
3. **Close out:** issue the final report, hand over to operations and record lessons learnt.

### Checklist

- [ ] Signal Register completed and confirmed by data owners
- [ ] UAT / pilot designed with R.I.P.
- [ ] Phased rollout executed and signals recorded at each step
- [ ] Plateau reached and the new process baselined
- [ ] Target Gap closure confirmed with evidence
- [ ] Final report issued
- [ ] Handover to operations completed
- [ ] Lessons learnt recorded

---

## Traceability Matrix

Maintain this matrix throughout the process. Every row should trace from the original request to the evidence of closure.

| Request ID (T0) | Target Gap ID (T1) | Requirement / Lever (T2) | Anti-pattern rule / Acceptance criterion (T3) | NFR / Test result (T3A) | Signal (T4) | Gap closed? |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| | | | | | | |

---

## Loop-back Summary

| If… | Then return to… |
| :-- | :-- |
| No gap is within the project's control | Stage 1, after narrowing the scope |
| The sponsor does not agree the problem or scope at Gate 1 | Stage 1, step 1 |
| No candidate signal passes the viability filter | Stage 4, Part A step 3 |
| Data for a signal is not available | Stage 4, Part A step 4 |
| A Section 3A test fails | Stage 3 pre-mortem |
| A new constraint is found in testing | Constraints Register (Stage 2 if the scope changes) |
| The rollout shows a degraded result or no signal | Stage 2 (or Stage 1 if the gap was wrong) |
