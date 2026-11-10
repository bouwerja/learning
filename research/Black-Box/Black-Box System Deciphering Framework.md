
## Scope and use

This framework infers a functionally equivalent surrogate model of a deterministic system from input-output experiments alone, selecting every query for the most logic discovered per run. It applies to any system that meets the four stated constraints: a strict black-box boundary, full input-output access, strict determinism and a cost per query.

Determinism shapes the whole method. No query is ever repeated to average out noise, and a single contradicted prediction is conclusive proof that a hypothesis is wrong.

| Symbol | Meaning |
| --- | --- |
| f | The system under study, mapping an input vector x = (x1 … xn) to an output y |
| Ω | The declared input domain over which equivalence is claimed |
| M | The surrogate model assembled from accepted hypotheses |
| H | The set of live hypotheses, each a triple of scope, form and parameters |
| D | The query log: every input executed and the output observed |
| d(y, ŷ) | Divergence between the actual and the predicted output, scaled to the range 0 to 1 |
| ε | The acceptable divergence, set per output before testing begins |
| δ | The input resolution: the smallest meaningful step for a variable |
| B | The query budget |


## 1. Core philosophy and conceptual loop

The framework treats the system as a scientific unknown: it proposes the simplest explanation that fits every observation, then spends each query trying to break that explanation. Five principles govern every decision.

1. **Information over coverage.** A query is executed only when live hypotheses predict different outputs for it. A query on which all hypotheses agree teaches nothing and is reserved for validation.
2. **One contradiction is final.** Because the system is deterministic, a single mismatch refutes a hypothesis. Nothing is repeated, and every result is cached for reuse.
3. **Simplest explanation first.** Candidates are ranked by description length. Complexity is added only when a counterexample demands it.
4. **Function, not implementation.** The surrogate is judged solely on its predictions over Ω. Two models that agree within ε are treated as the same model.
5. **Acceptance is provisional.** Every accepted hypothesis carries a scope and may be demoted by a later counterexample.

A failed attack returns to hypothesis formation, and a failed convergence test returns to probing. The loop ends only when the surrogate meets the criteria in Module C or the budget is spent.

## 2. Step-by-step execution workflow

The workflow runs ten phases in order, and returns to an earlier phase only when a prediction fails. Each phase has a fixed query cost and an explicit exit condition.

| Phase | Action | Query cost | Exit condition |
| --- | --- | --- | --- |
| 0. Frame | Declare each input's type, legal range and resolution δ. Declare Ω, ε and B. Open the query cache. | 0 | Schema and tolerances recorded |
| 1. Baseline | Execute one anchor input x0, placed in the interior of every range and away from any suspected boundary. | 1 | Anchor output y0 recorded |
| 2. Screen | Mutate each variable once to its far contrast, with all others held at the anchor. | n; about k × log2(n) by group testing when only k of n variables are active | Every variable classed active or inert at the anchor |
| 3. Profile | For each active variable, in descending order of effect, sample until its shape is unambiguous. | 2 to 6 per numeric variable; L − 1 per categorical variable with L levels | One shape hypothesis and one rival per variable |
| 4. Test interactions | Complete a two-by-two contrast for each pair of active variables. | 1 per pair, as three corners are already cached | Each pair classed additive, multiplicative or regime-dependent |
| 5. Hypothesise | Compose the per-variable forms into candidate global models. | 0 | At least two rival models that reproduce all of D |
| 6. Discriminate | Execute the query on which the rivals disagree most. | 1 per round | One model of minimal complexity remains |
| 7. Attack | Execute the adversarial cases of Module B against the survivor. | 1 per case | Acceptance criteria met; a counterexample returns to Phase 5 |
| 8. Validate | Register predictions for a held-out sample, then execute it. | N, from the bound in Module C | Convergence criteria met; a failing region returns to Phase 3 |
| 9. Deliver | Record the surrogate, its validity domain, the measured divergence and the open risks. | 0 | Model signed off |

Three rules apply across all phases.

- **Cache rule.** D is consulted before every query, and new queries are designed to share corners with cached ones.
- **Reserve rule.** A validation reserve is set aside before Phase 2. One fifth of B is the suggested default.
- **Stop rule.** If B is exhausted, the workflow moves directly to Phase 9 and reports which regions remain provisional or unexplored.

## 3. Formal sub-frameworks

### Module A: Input mutation strategy

Module A selects the next query by one rule: execute the input with the highest expected information per unit of cost.

#### A.1 Variable selection

Before any hypothesis exists, variables are ranked by a priority score.

$$
P_i = \frac{U_i \cdot R_i}{c_i}
$$

- U is the uncertainty weight: 1 if never mutated, 0.5 if active with an unresolved shape, 0.25 if inert at one anchor only, 0 if fully characterised. These weights are defaults.
- R is the largest normalised output divergence that mutating the variable has produced so far, taken as 1 if it has never been mutated.
- c is the cost of mutating the variable.

Unknown variables are therefore tested first, followed by the most influential unresolved ones. Once hypotheses exist, each candidate query is scored by how evenly it splits them.

$$
V(x) = -\sum_{c} p_c(x)\,\log_2 p_c(x), \qquad x^{*} = \arg\max_{x \in \Omega} \frac{V(x)}{\mathrm{cost}(x)}
$$

Here p is the combined weight of the live hypotheses whose predictions for x fall in the same output cell. Two predictions share a cell when they diverge by no more than ε, and each hypothesis has weight proportional to 2 to the power of minus its description length.

Because the system is deterministic, the observed output eliminates every cell but one, so V(x) is the expected information in bits. Candidates are drawn from the points of greatest disagreement between pairs of hypotheses and from the attack list in Module B, not from a search of all of Ω.

#### A.2 Magnitude of variance

Magnitude follows a fixed progression: far, then halved, then minimal.

| Stage | Magnitude | Purpose | Query cost |
| --- | --- | --- | --- |
| Detect | Far contrast: the legal value most distant from the anchor | Reveal whether any dependence exists and bound its size | 1 per variable |
| Localise | Bisection of the interval that the current hypothesis cannot join | Locate thresholds, kinks and regime changes | At most log2(range ÷ δ), rounded up, per boundary |
| Confirm | One step of δ either side of a located boundary | Establish inclusivity, continuity and rounding | 2 to 3 per boundary |

Where two fitted segments intersect, the boundary is calculated and the Localise stage is skipped.

#### A.3 Execution sequence

1. Screen every variable one at a time from the anchor.
2. Profile active variables in descending order of R.
3. Test pairs of active variables in descending order of the product of their R values.
4. Re-screen every inert variable at one maximally different anchor, and again inside each regime discovered.
5. Select all further queries by V(x).

One factor changes at a time until the main effects are known. Variables believed inert are then varied freely in later queries at no extra cost, so that any hidden dependence surfaces as a failed prediction.

#### A.4 Domain universality

| Input type | Far contrast | Refinement | Special probes |
| --- | --- | --- | --- |
| Continuous numeric | Opposite end of the legal range | Bisection where the hypothesis fails to join observed points | Minimum, maximum, zero, sign change, one step of δ |
| Discrete numeric | Opposite end of the legal range | Integer bisection, then a run of three consecutive values | Zero, one, minus one, parity and modulo patterns |
| Categorical | Any other level, as unordered levels are equidistant | One observation per level, then levels with identical outputs merged into classes | Unlisted level, empty value, case and whitespace variants |
| Boolean | The opposite value | None at the anchor; the flip is repeated inside each discovered regime | Null or missing, where permitted |
| Structured (string, list, record) | Decomposition into features: size, element values, order, duplicates, optional fields and depth, mutated one at a time | Repeated halving of the structure to find the smallest part that changes the output | Empty, single element, maximum size, permuted, malformed |

Merged categorical classes are provisional. Each member is checked once in every regime where its variable interacts with another.

#### A.5 Multi-variable interaction

Two variables interact when the effect of one depends on the level of the other. The test is the interaction contrast, which costs one new query when three corners are cached.

$$
I_{ij} = f(x_i', x_j') - f(x_i', x_j) - f(x_i, x_j') + f(x_i, x_j)
$$

1. **Detect.** A non-zero contrast proves an interaction at those levels.
2. **Classify.** If the cross-products f(x\_i', x\_j') × f(x\_i, x\_j) and f(x\_i', x\_j) × f(x\_i, x\_j') are equal, the interaction is multiplicative and vanishes on a logarithmic scale. Otherwise one variable switches the other's function, and the pair is regime-dependent.
3. **Isolate.** All other variables are held at the anchor, and the first variable is profiled separately inside each regime of the second.
4. **Extend to higher orders.** A set of variables is moved together and compared with the prediction from main effects and pairwise terms. A non-zero residual is bisected to find the smallest interacting subset.
5. **Scale.** Pairwise testing of k active variables costs k(k − 1) ÷ 2 queries. For large k, the variables are split into two blocks, the contrast is applied to the blocks, and only blocks with a non-zero contrast are subdivided.
6. **Unmask.** A variable that is inert at the anchor may be gated by another, which is why step 4 of A.3 re-screens it.
7. **Limit.** A zero contrast at one pair of levels does not prove absence everywhere. High-effect pairs receive a second contrast at different levels, and the residual risk is carried into validation.

### Module B: Hypothesis generation and defence protocol

Module B converts output deltas into the simplest hypothesis that reproduces every observation, then attempts to refute it before it enters the model.

#### B.1 Inference pipeline

1. **Describe the deltas.** For each mutation, the first difference, second difference, ratio, sign and any invariance of the output are recorded.
2. **Match the signature.** The pattern is matched to a form class in the table below.
3. **Generate minimal candidates.** Candidates are drawn in order of description length: constant, identity, linear, piecewise linear, polynomial, multiplicative, lookup table, composition.
4. **Fit exactly.** Parameters are solved from the observations. One unexplained observation rejects the hypothesis or narrows its scope.
5. **Keep a rival.** At least two hypotheses stay alive. Where only one fits, the nearest more complex alternative is constructed deliberately, such as a shifted threshold or a slight curvature.
6. **Compose.** Local hypotheses are joined by the interaction structure from Module A: additive, multiplicative or regime switch.

| Observed signature | Minimal candidate form |
| --- | --- |
| Zero delta | Variable inert within the tested scope |
| Constant first difference for equal steps | Linear |
| Constant second difference | Quadratic |
| Constant ratio for equal steps | Exponential, or a multiplicative factor |
| Slope changes at a point while the output stays continuous | Piecewise linear: tier, cap, floor, maximum or minimum |
| Output flat over intervals with jumps between them | Step function or banded lookup |
| Output flat beyond a point | Saturation or clamp |
| Output repeats at a fixed interval | Modulo or cyclic rule |
| Output unchanged when inputs are reordered | Symmetric aggregate: sum, count or maximum |
| Few distinct outputs across many inputs | Classification or decision table |

#### B.2 Falsification and defence

Each candidate is attacked with the predictions it is most likely to fail. A test that the hypothesis could not fail is not executed.

| Attack class | Construction | Fault exposed |
| --- | --- | --- |
| Boundary | The claimed threshold, and one step of δ either side of it | Misplaced threshold or wrong inclusivity |
| Extrapolation | The limits of Ω beyond the profiled range | Cap, floor or overflow |
| Interpolation | The midpoint of the widest gap between observed points | Hidden segment or band |
| Cross-regime | Combinations of extremes never observed together | Undetected interaction |
| Invariance | A variable held to be inert, changed inside a different regime | Gated or masked dependence |
| Rival-derived | The point of greatest disagreement with the nearest rival | Wrong functional form |
| Degenerate | Zero, negative, empty, null, duplicate and maximum-size inputs | Special-case handling |
| Metamorphic | A relation the hypothesis implies, such as symmetry, scaling or monotonicity, tested at fresh points | Wrong structure |
| Precision | Inputs that place the output on a rounding midpoint | Rounding rule confused with truncation |

A counterexample rejects the hypothesis in its current form. Repairs are attempted in this order.

1. Narrow the scope: split the region at the counterexample and bisect to locate the boundary.
2. Raise the form to the next complexity class.
3. Add a variable, treating the failure as an interaction.

Every counterexample is retained as a permanent regression case that all later hypotheses must reproduce.

#### B.3 Acceptance criteria

A hypothesis is accepted into the model when all five thresholds below hold.

| Criterion | Threshold |
| --- | --- |
| Consistency | Reproduces 100% of the observations in its scope within ε |
| Risky predictions | At least p + 3 correct predictions on points not used to fit its p parameters (default) |
| Attack coverage | At least one survived attack from every applicable class in B.2 |
| Uniqueness | No rival of equal or lower description length remains consistent with D |
| Boundary resolution | Every threshold located to within δ, with inclusivity determined |

The uniqueness criterion may also be stated as a posterior weight, with α defaulting to 0.05.

$$
\Pr(h \mid D) = \frac{w_h}{\sum_{g \in H,\ g \text{ consistent with } D} w_g} \geq 1 - \alpha
$$

This weight is relative to the candidates enumerated, which is why attack coverage is required in addition. A hypothesis that meets only consistency and uniqueness is provisional: it may be used in M, but its region is flagged and reported separately.

### Module C: Divergence and convergence metrics

Module C measures how far the surrogate's predictions fall from the system's outputs, and declares convergence when no tested region exceeds ε.

#### C.1 Error measurement

Each output type has a divergence function scaled from 0, meaning identical, to 1.

| Output type | Divergence d(y, ŷ) | Match rule |
| --- | --- | --- |
| Continuous numeric | Absolute difference ÷ the larger of the absolute value of y and a scale floor s, which prevents division by values near zero | d ≤ ε, with ε no smaller than the output's rounding quantum |
| Discrete numeric | 0 if equal, otherwise 1; the signed difference is logged for diagnosis | Exact |
| Boolean and categorical | 0 if equal, otherwise 1; a cost matrix may weight confusions of differing severity | Exact |
| Ordinal | Rank distance ÷ (number of levels − 1) | d ≤ ε |
| String | Edit distance ÷ length of the longer string | d ≤ ε; exact for identifiers |
| Set | 1 − (size of intersection ÷ size of union) | d ≤ ε |
| Ordered list | Edit distance over elements ÷ length of the longer list | d ≤ ε |
| Record | Weighted mean of the field divergences, with a missing or extra field scored as 1 | Every field within its own ε |
| Error or rejection | Treated as a categorical outcome | Error class must match exactly |

Three aggregates are calculated over a test set T.

$$
D_{\max} = \max_{x \in T} d\big(f(x), M(x)\big), \qquad D_{\text{mean}} = \frac{1}{|T|}\sum_{x \in T} d\big(f(x), M(x)\big), \qquad \rho = \frac{\big|\{x \in T : d > \varepsilon\}\big|}{|T|}
$$

The maximum divergence is the primary measure, because in a deterministic system any point above ε is a real defect and not noise. All three are reported per regime, so that a small failing region is not diluted by a large passing one.

#### C.2 Model convergence

The surrogate has converged when all five criteria below hold.

| Criterion | Threshold |
| --- | --- |
| Blind validation | On N held-out queries, with predictions registered before execution, the maximum divergence is at most ε |
| Regime coverage | At least 3 validation points in every regime, and one pair straddling every boundary (default) |
| Information exhaustion | No candidate query remains on which live hypotheses disagree by more than ε |
| Stability | M unchanged over the 10 most recent queries (default) |
| No open anomalies | Every observation in D reproduced within ε |

The size of the held-out sample follows from the confidence required. If N randomly drawn inputs all pass, the mismatch rate over Ω is bounded as follows.

$$
\rho \leq \frac{\ln(1/\alpha)}{N} \quad \text{with confidence } 1 - \alpha
$$

At 95% confidence, 59 passing queries bound the mismatch rate below 5%, and 299 bound it below 1%. The bound covers only the randomly drawn portion, so the held-out sample combines random inputs with targeted boundary and corner cases.

A converged surrogate is claimed to be equivalent to the system over Ω and within ε only. Parameters that no query can separate, such as two constants that always appear as a sum, are reported as a single quantity. Where the budget ends before convergence, the model is delivered with its divergence per regime and a list of the criteria not met.

## 4. Worked example

Eighteen exploratory queries and six validation queries recover a four-input pricing rule exactly, against 3 968 combinations in an exhaustive grid. The hypothetical system returns a delivery price in rand, and its internal rule is unknown to the investigator.

| Input | Type | Domain |
| --- | --- | --- |
| w, parcel weight | Continuous numeric | 0.5 kg to 50 kg, with δ = 0.1 kg |
| z, delivery zone | Categorical | A, B, C, D |
| e, express service | Boolean | true, false |
| r, customer reference | String | Free text |

The output is a price to two decimal places, and ε is set to an exact match to the cent.

#### Query log

| # | w (kg) | z | e | Price (R) | What the query established |
| --- | --- | --- | --- | --- | --- |
| 1 | 25 | A | false | 160.00 | Anchor, with r set to "REF001" |
| 2 | 50 | A | false | 260.00 | Screen: weight is active |
| 3 | 25 | D | false | 210.00 | Screen: zone is active |
| 4 | 25 | A | true | 240.00 | Screen: express is active |
| 5 | 25 | A | false | 160.00 | Screen: r changed to an empty string; inert at the anchor |
| 6 | 0.5 | A | false | 43.00 | Profile: slopes of 4.78 below 25 kg and 4.00 above; not linear |
| 7 | 12.5 | A | false | 110.00 | Discriminate: the quadratic rival predicted 102.66 and is rejected; upper line is 60 + 4w |
| 8 | 6.5 | A | false | 79.00 | Profile: lower line is 40 + 6w; the two lines intersect at 10 kg |
| 9 | 9.9 | A | false | 99.40 | Boundary attack: the lower line predicted 99.40 |
| 10 | 10.1 | A | false | 100.40 | Boundary attack: the upper line predicted 100.40 |
| 11 | 25 | B | false | 160.00 | Profile: B equals A; the two are merged provisionally |
| 12 | 25 | C | false | 185.00 | Profile: C is A plus 25; D is A plus 50 |
| 13 | 50 | D | false | 310.00 | Interaction of w and z: contrast of 0; additive |
| 14 | 50 | A | true | 390.00 | Interaction of w and e: contrast of 50, cross-products equal; multiplicative factor of 1.5 |
| 15 | 25 | D | true | 210.00 | Interaction of z and e: predicted 315.00; counterexample |
| 16 | 25 | C | true | 277.50 | Repair: the factor of 1.5 holds in zone C; scope narrowed to exclude D |
| 17 | 25 | B | true | 240.00 | Class check: B behaves as A under express |
| 18 | 6.5 | D | true | 129.00 | Invariance attack: r changed again at a distant anchor; predicted 129.00 |

#### Three decisions that saved queries

**The kink was calculated, not searched for.** After queries 7 and 8, two fitted lines intersected at 10 kg. Bisecting from 6.5 kg to 12.5 kg at a resolution of 0.1 kg would have cost up to six queries; two boundary attacks confirmed the calculated point instead. The price is continuous at 10 kg, so the inclusivity of the boundary does not affect equivalence.

**The counterexample narrowed a scope.** The hypothesis that express multiplies every price by 1.5 predicted R315.00 for query 15. The system returned R210.00, the non-express price for zone D. The first repair move restricted the rule to zones other than D, and query 16 confirmed it in zone C.

**One query attacked three hypotheses.** Query 18 changed r, used the lower weight segment and combined zone D with express. A single correct prediction supported the inertness of r, the additivity of weight and zone, and the zone D exception.

#### Delivered surrogate

$$
\text{price} = \big(B(z) + G(w)\big) \cdot E(z, e), \qquad G(w) = \begin{cases} 6w & w \leq 10 \\ 20 + 4w & w > 10 \end{cases}, \qquad E(z, e) = \begin{cases} 1.5 & e = \text{true and } z \neq D \\ 1 & \text{otherwise} \end{cases}
$$

The zone constants B(z) are 40 for A and B, 65 for C and 90 for D. The reference r does not appear in the model.

#### Validation

Six held-out queries were predicted before execution, with r varied in each.

| w (kg) | z | e | Predicted (R) | Actual (R) |
| --- | --- | --- | --- | --- |
| 10.0 | C | true | 187.50 | 187.50 |
| 50 | C | true | 427.50 | 427.50 |
| 0.5 | B | false | 43.00 | 43.00 |
| 9.9 | D | false | 149.40 | 149.40 |
| 10.1 | B | true | 150.60 | 150.60 |
| 37.3 | C | false | 234.20 | 234.20 |

The maximum divergence is zero. These six are targeted cases, so the statistical bound in C.2 does not apply; 59 random queries would be needed to claim a mismatch rate below 5% at 95% confidence.

#### Stated limits

- Only the sum of the zone constant and the weight intercept is observable. The surrogate assigns the whole constant to the zone by convention.
- A narrow band between sampled weights would not have been detected. The widest unsampled weight interval is 12.7 kg.

## 5. Edge cases and failure modes

Each condition below has a detection signal and a prescribed response. Where no response exists, the limit is reported in the delivered model and not concealed.

#### Unmapped input parameters

An unmapped parameter is an input that the system accepts but does not use. The risk is confusing it with a parameter that is merely gated by another variable.

- **Signal.** A far-contrast mutation at the anchor produces a zero output delta.
- **Response.** The parameter is classed as inert within Ω only after re-screening at a maximally different anchor and inside each discovered regime. It is then excluded from M and recorded.
- **Continued monitoring.** The parameter is varied freely in all later queries at no extra cost. If a prediction then fails, one further query with its earlier value restored isolates the cause.
- **Residual limit.** A dependence gated by a combination that was never tested remains possible and is stated as such.

The opposite case is a hidden input, such as a clock or counter outside the declared schema. This breaches the determinism assumption. As a sentinel, the anchor query is executed once more at the end, and a changed output voids the model's guarantees.

#### Step-function boundary thresholds

- **Signal.** The output jumps between two adjacent samples by more than the current form explains, or is flat on both sides of the jump.
- **Response.** The interval is bisected down to δ, at a cost of log2(range ÷ δ) queries, rounded up. The full weight range in the worked example would cost nine.
- **Inclusivity.** The threshold and one step of δ either side of it are then tested, to separate "less than" from "less than or equal to".
- **Several thresholds.** Each interval between observed jumps is bisected separately.
- **Residual limit.** A band that rises and returns between two samples leaves both endpoints equal and is invisible to bisection.

Three measures reduce the residual limit. Conventional values such as round numbers and documented limits are probed directly. Validation points are spread evenly by a low-discrepancy sequence. The widest unsampled interval is reported as the smallest feature the model can guarantee to have detected.

#### Masked outputs

| Form of masking | Signal | Response |
| --- | --- | --- |
| Saturation: the output is capped or floored | Variables appear inert beyond a point | Move the anchor out of the saturated region; treat the cap as a regime boundary and bisect to it |
| Quantisation: the output is rounded or banded | Small mutations give a zero delta, and the output moves in fixed steps | Use mutations large enough to cross several steps; probe rounding midpoints; set ε no finer than one step |
| Reduction: only a category or a pass or fail is returned | Each query yields at most 1 bit for a boolean output | Model the decision boundary, not the hidden score; bisect along each variable to trace it; budget for more queries |
| Override: one condition forces a fixed output | All other variables are inert while the condition holds | Treat the forced output as a regime; map the edge of the condition first, then profile outside it |
| Rejection: invalid inputs return an error | An error appears in place of a value | Treat the error class as an output category and map the validity boundary |
| Scrambling: the output behaves like a hash | No hypothesis survives attack, and neighbouring inputs give unrelated outputs | Report the system as not compressible within budget; the surrogate is limited to observed points |

#### Other failure modes

| Failure mode | Signal | Response |
| --- | --- | --- |
| Hidden state: the output depends on earlier queries | The repeated anchor query returns a different output | Redefine the input as the sequence of queries since a reset, and infer a finite-state machine by active automata learning |
| Cancelling effects | An interaction contrast of zero at one pair of levels only | Apply a second contrast at different levels; rely on random validation for the remainder |
| Over-merged categorical class | Levels that match at the anchor diverge elsewhere | Check each member once in every interacting regime |
| High dimensionality | Too many variables to screen one at a time | Screen by group testing under a sparsity assumption; report if most groups prove active |
| Over-fitted surrogate | The model reproduces D but fails blind validation | Rank candidates by description length and never tune on the held-out sample |
| Budget exhausted before convergence | The stop rule is triggered | Deliver the model with each region marked accepted, provisional or unexplored |
