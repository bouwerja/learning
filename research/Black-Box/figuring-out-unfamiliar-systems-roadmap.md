
A plain-language companion to the Black-Box System Deciphering Framework.

## Purpose

This roadmap shows how to work out the rules of a system you cannot see inside, using only what you put in and what comes out. It follows the same five-part structure as the formal framework, but replaces the notation with steps a person can carry out with a notebook.

**Where it works.** The method suits any system that gives the same result every time it receives the same input. Examples include a pricing calculator, an unfamiliar appliance, an inherited spreadsheet, a booking form, a tariff structure or a software setting.

**Where it does not work as written.** Systems that vary from one attempt to the next, such as people, markets or weather, require repeated trials and statistical methods. Section 5 explains how to recognise this.

---

## The method in one word: PROBE

The whole methodology can be recalled from one word.

| Letter | Action | The question it answers | Formal framework equivalent |
| --- | --- | --- | --- |
| **P** | **Pin down the baseline** | What does a normal case look like? | Frame and Baseline (Phases 0 to 1) |
| **R** | **Run one change at a time** | Which inputs matter, and how? | Screen, Profile and Test interactions (Module A) |
| **O** | **Offer the simplest explanation** | What rule would produce these results? | Hypothesise and Discriminate (Module B) |
| **B** | **Break it on purpose** | Where could that rule be wrong? | Attack (Module B) |
| **E** | **Evaluate and decide** | Is the rule good enough to rely on? | Validate and Deliver (Module C) |

Two shorter aids support it:

- **"Big, half, tiny"** describes how large each change should be (Section 3A).
- **"Rule plus three"** describes how many correct predictions a rule needs before it is trusted (Section 3C).

---

## 1. Core idea and the loop

The core idea is simple: **make a specific guess, then try to prove it wrong.** A rule that survives honest attempts to break it is worth relying on. A rule that has only ever been confirmed by easy tests is not.

Five principles guide every decision.

1. **Test to learn, not to cover.** Run a test only when you do not already know what will happen, or when two possible rules predict different results.
2. **One miss is enough.** If the system always behaves the same way, a single wrong prediction means the rule is wrong somewhere. Do not explain it away.
3. **Prefer the simplest rule.** Add complexity only when a result forces you to.
4. **Aim for the right answers, not the hidden design.** If your rule predicts every result correctly, it is good enough, even if the system is built differently inside.
5. **Hold every rule provisionally.** State where a rule applies, and be prepared to narrow it.

The loop runs as follows.

```
Pin down  ->  Run one change  ->  Offer an explanation  ->  Break it  ->  Evaluate
                   ^                       ^                    |             |
                   |                       +---- rule failed ---+             |
                   +------------------- not yet reliable ---------------------+
                                                                              |
                                                                     reliable: stop
```

A failed test sends you back to revise the explanation. An unreliable result at the end sends you back to run further changes.

---

## 2. Step-by-step roadmap

Each step lists what to do and how to know it is complete.

### Step P: Pin down the baseline

- [ ] Write one sentence stating what you want to be able to predict.
- [ ] List every input you can change, and the values each can take.
- [ ] List every output you can observe.
- [ ] Decide what "close enough" means for a prediction, before testing. For a price, this may be "exact to the cent". For a temperature, "within one degree".
- [ ] Decide how many tests you can afford in time, money or effort.
- [ ] Run one ordinary, middle-of-the-range case and record the result. This is the baseline.

**Complete when:** the baseline result is written down next to the exact inputs that produced it.

### Step R: Run one change at a time

- [ ] Return to the baseline. Change one input by a large amount. Record the result. Restore it.
- [ ] Repeat for every input. Mark each as "matters" or "no effect here".
- [ ] For each input that matters, run a few more values to see the shape of its effect.
- [ ] For each pair of inputs that matter, change both together once and compare the result with what the two separate changes would suggest.

**Complete when:** every input is marked, and you can describe in words how each one moves the output.

### Step O: Offer the simplest explanation

- [ ] Write the rule using the hypothesis template in Section 3B.
- [ ] Write one rival rule that also fits the results so far.
- [ ] Find a test where the two rules predict different results, and run it.

**Complete when:** only one rule remains that explains every recorded result.

### Step B: Break it on purpose

- [ ] Write your prediction before each test.
- [ ] Run the four stress tests in Section 3B: edges, extremes, combinations and "should not matter".
- [ ] If a prediction misses, return to Step O and revise the rule. Keep the failed case and re-check it against every later rule.

**Complete when:** the rule has survived at least one test of each kind.

### Step E: Evaluate and decide

- [ ] Count the correct predictions on the scorecard (Section 3C).
- [ ] Run a final set of fresh checks you have not tried before, with predictions written first.
- [ ] Decide: trusted, working or guess.
- [ ] Write down the final rule, where it applies and what remains untested.

**Complete when:** the rule meets the "trusted" level, or you have recorded honestly why it does not.

---

## 3. The three toolkits

### 3A. Toolkit for changing inputs

**Which input to change first.** Change the inputs you know least about first. After that, concentrate on the inputs that moved the output the most.

**How much to change it: "Big, half, tiny".**

| Stage | Size of change | What it reveals |
| --- | --- | --- |
| **Big** | The furthest value from the baseline | Whether the input matters at all |
| **Half** | The midpoint between two values that gave different behaviour | Roughly where the behaviour changes |
| **Tiny** | The smallest possible step either side of that point | Exactly where it changes, and which side the boundary falls on |

Halving is efficient. Finding one point among 1 000 possibilities takes about ten tests, not a thousand. Where a threshold is likely to sit on a round number, test the round number directly.

**How to change each kind of input.**

| Kind of input | First change | Then |
| --- | --- | --- |
| A number on a scale (amount, weight, time) | Jump to the other end of the range | Halve towards any point where behaviour changes |
| A whole number or count | Jump to the other end of the range | Try three consecutive values to reveal odd and even or repeating patterns |
| A choice from a list (region, plan, category) | Switch to any other option | Try every option once, then group options that behave identically |
| A yes or no setting | Switch it | Switch it again in a different situation, as it may only matter in some cases |
| Text, lists or forms | Change one feature at a time: length, order, duplicates, optional fields | Try empty, a single item and the largest permitted |

**How to detect inputs that work together.** Use the "two-by-two" check, which needs only one new test.

1. Record the baseline result.
2. Record the result with only input A changed.
3. Record the result with only input B changed.
4. Change both together. Before you do, add the two separate effects to the baseline to predict the result.

If the result matches, the inputs act independently. If it does not match, they interact: one input changes how the other behaves. Then examine the first input separately for each setting of the second.

**A caution on "no effect".** An input that does nothing at the baseline may still matter elsewhere. Before ignoring it, test it again in a very different situation. Afterwards, keep varying it in later tests at no extra cost. If a later prediction fails, it is the first suspect.

### 3B. Toolkit for creating and defending a hypothesis

#### What a hypothesis is

A hypothesis is a written rule that does three things.

1. It **explains** every result recorded so far.
2. It **predicts** a result you have not yet seen.
3. It **names the test** that would prove it wrong.

A statement that cannot be proven wrong by any test is not a hypothesis.

#### How to create one: five steps

1. **Compare.** Place two results side by side. Note what you changed and what changed in the output.
2. **Recognise.** Match what you see to a pattern in the table below.
3. **Write.** Complete the template.
4. **Rival.** Write a second rule that also fits. If none comes to mind, shift the threshold slightly or assume a gradual change instead of a sudden one.
5. **Risk.** Choose the test on which the two rules disagree. That is the next test to run.

#### The hypothesis template

> **Within** [the situations the rule covers], **when** [the input condition], **then** [the output result].
> **It is wrong if** [a specific test] gives [anything other than the predicted result].

Example: "Within local deliveries, when the basket is R500 or more, then the standard delivery fee is R0. It is wrong if a basket of R500 shows any fee."

#### Pattern table

| What you observe | The simplest rule to propose |
| --- | --- |
| Nothing changes | This input has no effect in the situations tested |
| The output moves by the same amount for each equal step | A fixed rate per unit |
| The output moves by the same percentage for each equal step | A multiplier |
| The output is flat, jumps suddenly, then is flat again | A threshold or a set of bands |
| The output rises steadily, then changes pace at one point | Two rates with a changeover point |
| The output rises, then stops rising | A cap or limit |
| The output repeats at regular intervals | A cycle or schedule |
| The effect of one input depends on another | One setting switches the rule for the other |

#### How to defend it: the four stress tests

A rule earns trust only from tests it could have failed. Run at least one of each kind.

| Stress test | What to try | What it catches |
| --- | --- | --- |
| **Edges** | The exact threshold, and the smallest step either side | A boundary in the wrong place, or "more than" confused with "at least" |
| **Extremes** | The smallest and largest permitted values, zero and empty | Caps, minimums and special handling |
| **Combinations** | Settings that have never been tried together | Inputs that interact |
| **"Should not matter"** | Change an input believed to have no effect, in a new situation | A hidden dependence |

#### What to do when a prediction misses

Attempt the repairs in this order, and stop at the first that works.

1. **Narrow the rule.** State that it applies only in certain situations, and find where the boundary lies.
2. **Make the rule one step more detailed.** For example, replace one rate with two.
3. **Add another input to the rule.** The miss may be caused by an interaction.

Keep every failed case. Each revised rule must explain it.

### 3C. Toolkit for measuring a hypothesis

A hypothesis is measured by three questions.

| Question | How to answer it | Pass mark |
| --- | --- | --- |
| **Does it fit?** | Check the rule against every recorded result | All of them, without exception |
| **Does it predict?** | Count correct predictions written down before the test was run | The number of values in the rule, plus three |
| **Has it been stressed?** | Tick off the four stress tests | At least one survived test of each kind |

#### "Rule plus three"

Count the specific values your rule contains, such as amounts, thresholds and percentages. Add three. That is the number of correct advance predictions required. A rule with two values needs five. A rule with five values needs eight. A more detailed rule has more room to be wrong, so it must prove more.

#### Scoring a single prediction

| Kind of output | How to score it |
| --- | --- |
| A number | Hit if the difference is within the "close enough" margin set in Step P. Record the size of any miss, as it often points to the cause. |
| A category, or yes or no | Hit only if it matches exactly |
| Text or a list | Hit only if the same items appear in the same order, unless a margin was agreed beforehand |
| An error or refusal | Treat it as a result in its own right. A predicted error that occurs is a hit. |

Because the system behaves consistently, misses are not averaged. One miss means the rule needs revision.

#### The scorecard

Keep one line per test.

| Test | What I changed | My prediction | What happened | Hit or miss | What I learnt |
| --- | --- | --- | --- | --- | --- |
| 1 | | | | | |

#### The confidence ladder

| Level | Requirement | How to use the rule |
| --- | --- | --- |
| **Guess** | Fits every result so far; no advance predictions yet | Do not rely on it |
| **Working rule** | At least three correct advance predictions and no miss since its last revision | Use with caution; continue testing |
| **Trusted rule** | Meets "rule plus three", has survived all four stress tests, and no simpler rule fits | Rely on it within the situations tested |

#### When to stop

Stop when all three are true.

1. The rule explains every recorded result.
2. The rule has reached the "trusted" level.
3. A final set of fresh checks, with predictions written first, produced no surprises.

A useful guide for the final checks is the **rule of three**: if a number of randomly chosen checks all pass, the rule is unlikely to be wrong more often than three divided by that number. Ten clean checks suggest it is wrong less than 30% of the time. Thirty suggest less than 10%. Sixty suggest less than 5%.

---

## 4. Worked example: an online delivery fee

This example is hypothetical. A shopper wishes to understand how an online store calculates its delivery fee. The checkout page displays the fee as the order is adjusted, so each test costs only a little time.

### P: Pin down the baseline

- **Goal:** predict the delivery fee for any order.
- **Inputs:** basket value (a number), delivery area (Local or Outlying), delivery speed (Standard or Same-day), gift note (free text).
- **Output:** the delivery fee in rand. "Close enough" is an exact match.
- **Baseline (test 1):** basket R300, Local, Standard, no gift note. The fee is **R60**.

### R: Run one change at a time

| Test | Change from baseline | Fee | Finding |
| --- | --- | --- | --- |
| 2 | Basket raised to R1 000 | R0 | Basket value matters |
| 3 | Area changed to Outlying | R100 | Area matters: R40 more |
| 4 | Speed changed to Same-day | R95 | Speed matters: R35 more |
| 5 | Gift note added | R60 | No effect here |

### O: Offer the simplest explanation

Two rules fit tests 1 and 2.

- **Rule 1:** "Within local standard deliveries, the fee falls gradually from R60 as the basket grows. It is wrong if a basket of R650 shows a fee other than about R30."
- **Rule 2:** "Within local standard deliveries, the fee is R60 below some threshold and R0 above it. It is wrong if a basket of R650 shows a fee between R0 and R60."

| Test | Basket | Fee | Finding |
| --- | --- | --- | --- |
| 6 | R650 | R0 | Rule 1 predicted R30 and is rejected. The threshold lies between R300 and R650. |
| 7 | R500 | R0 | A round number tested directly. The threshold is at or below R500. |
| 8 | R499 | R60 | The threshold is exactly R500, and R500 itself qualifies. |

Halving the range from R300 to R1 000 to the nearest rand would have taken about ten tests. "Big, half, tiny" with a round-number check took three.

### B: Break it on purpose

Each prediction below was written before the test.

| Test | Order | Prediction | Fee | Result |
| --- | --- | --- | --- | --- |
| 9 | R1 000, Outlying, Standard | R40. A rival rule, "free delivery waives everything", predicted R0. | R40 | Hit. The area charge survives the free threshold. |
| 10 | R1 000, Local, Same-day | R35 | R35 | Hit |
| 11 | R300, Outlying, Same-day | R135 (R60 + R40 + R35) | R155 | **Miss, by R20** |
| 12 | R1 000, Outlying, Same-day | R95, under the revised rule below | R95 | Hit |

Test 11 failed. Following the repair order, the rule was narrowed first: "Same-day adds R35" was restricted to Local, and a new statement was proposed for Outlying: "Within outlying deliveries, same-day adds R55. It is wrong if test 12 shows anything other than R95." Test 12 confirmed it.

### E: Evaluate and decide

**The final rule.** Delivery fee = basket charge + area charge + speed charge.

| Part | Rule |
| --- | --- |
| Basket charge | R60 below R500; R0 from R500 upwards |
| Area charge | Local R0; Outlying R40 |
| Speed charge | Standard R0; Same-day R35 for Local and R55 for Outlying |
| Gift note | No effect |

**Final checks.** Five fresh orders were predicted in advance, with the gift note changed each time.

| Test | Order | Prediction | Fee |
| --- | --- | --- | --- |
| 13 | R499, Outlying, Standard | R100 | R100 |
| 14 | R500, Local, Same-day | R35 | R35 |
| 15 | R120, Local, Standard | R60 | R60 |
| 16 | R2 000, Outlying, Same-day | R95 | R95 |
| 17 | R500, Outlying, Standard | R40 | R40 |

**The measurement.**

| Question | Evidence | Outcome |
| --- | --- | --- |
| Does it fit? | The final rule explains all 17 results, including the failed test 11 | Pass |
| Does it predict? | The rule contains five values (R60, R500, R40, R35, R55), so eight correct predictions are required. Tests 9, 10, 12 and 13 to 17 provide eight. | Pass |
| Has it been stressed? | Edges: tests 8, 13, 14, 17. Extremes: tests 15, 16. Combinations: tests 9 to 12. "Should not matter": gift note varied in tests 13 to 17. | Pass |

**Decision:** trusted rule, reached in 17 tests.

**What remains untested.** Baskets between the values tried could conceal a further band, for example a different fee above R1 500. The widest untested gap is R1 000 to R2 000. The five final checks were chosen deliberately, not at random, so the rule of three does not apply to them.

---

## 5. Pitfalls and what to do about them

### An input that appears to do nothing

- **Sign:** a large change produces no difference.
- **Action:** test it again in a very different situation before ignoring it. Keep varying it in later tests at no extra cost.
- **Remaining risk:** it may matter only in a combination you never tried. Record this.

### Sudden jumps and thresholds

- **Sign:** two nearby values give noticeably different results, with flat behaviour on either side.
- **Action:** halve the gap until the exact point is found. Then test the point itself and one small step either side.
- **Remaining risk:** a narrow band that rises and falls again between two tested values will be missed. Test round numbers and any limits stated in documentation, and note the widest gap left untested.

### Outputs that hide what is happening

| Situation | Sign | Action |
| --- | --- | --- |
| The output is capped | Inputs stop having any effect beyond a point | Move the baseline away from the cap, then locate where the cap begins |
| The output is rounded | Small changes show no difference; results move in fixed steps | Use larger changes, and do not expect more precision than one step |
| The output is only yes or no | Each test reveals very little | Concentrate on finding the dividing line by halving, and allow for more tests |
| One condition overrides everything | Every other input stops mattering while the condition holds | Find the edge of that condition first, then study the system outside it |
| The system returns an error | A message appears in place of a result | Record it as a result, and map which inputs trigger it |
| The output appears random | Nearby inputs give unrelated results and no rule survives | Stop. The system cannot be summarised by a simple rule within a reasonable number of tests. |

### Other pitfalls

| Pitfall | Sign | Action |
| --- | --- | --- |
| The system remembers earlier actions | Repeating the baseline gives a different result | Reset the system between tests, or treat the sequence of actions as the input |
| The system is not consistent | The same input gives different results with nothing else changed | The "one miss is enough" principle no longer holds. Repeat each test several times and compare averages. |
| Two effects cancel out | A combination looks independent in one test only | Repeat the two-by-two check at different values |
| Options grouped too early | Two options that matched at the baseline differ elsewhere | Check each option individually in every situation where its input interacts with another |
| Only running tests expected to pass | A long run of hits, none of them near an edge or an extreme | Return to the four stress tests |
| Changing several things at once | A result changes and the cause is unclear | Return to the last known case and change one input at a time |
| A test could cost money or cause harm | The action cannot be undone | Do not experiment. Consult the documentation or the system's owner. |
| Time runs out | The rule is still at "guess" or "working" level | Record what is known, what is uncertain and what was never tested |

---

## Pocket card

**PROBE**

1. **P**in down the baseline: one normal case, written down.
2. **R**un one change at a time: big, half, tiny.
3. **O**ffer the simplest explanation: "Within..., when..., then... It is wrong if..."
4. **B**reak it on purpose: edges, extremes, combinations, "should not matter".
5. **E**valuate and decide: fits everything, rule plus three, all four stress tests.

**Three reminders**

- Write the prediction before the test.
- One miss means revise the rule.
- State what the rule covers and what was never tested.
