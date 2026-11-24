> **From the data alone, you can prove that values are consistent. You cannot prove that they are correct.**

A rule applied wrongly but uniformly to every record will look perfect. The method below therefore aims for a signal that is **internally consistent, explainable and transparent about its limits**, which is the most the evidence can support.

## Step 1: Restate the fundamental truths

With no outside sources, only these remain as truths:

1. **Structure is evidence.** Column names, data types, units and value ranges reveal intent, even without documentation.
2. **Calculations leave dependencies.** A derived value can always be predicted exactly from other values; a gathered value cannot.
3. **Consistency is the substitute for truth.** If a rule explains nearly every record exactly, the few records that break it are the likely errors.
4. **Universal rules still apply.** Mathematics, logic and time cannot be broken: parts sum to totals, ages cannot be negative, end dates follow start dates.
5. **Redundancy exposes errors.** Where two columns carry the same information, such as date of birth and age, they must agree.

## Step 2: Infer the purpose from the data itself

Instead of asking someone else, interrogate the dataset:

1. **Read the evidence:** column names, units, formats, typical values and record grain (one row per client, per policy, per month?).
2. **Locate the signal:** it is the column that depends on many others while nothing depends on it. It sits at the end of the chain.
3. **Write a hypothesis:** "This dataset appears to calculate X per Y, using A, B and C." Treat it as provisional and test it in the steps that follow.

## Step 3: Map the dependency chain

1. For every column, test whether it can be predicted exactly from the others. Group records with identical values in the other columns; if this column is always the same within each group, it is derived.
2. Arrange the columns into a chain:
    - **Roots:** gathered values with no dependencies.
    - **Intermediates:** derived values that feed other calculations.
    - **Signal:** the end point.
3. Columns that fit nowhere are recorded as unknowns.

## Step 4: Recover the rules, from the roots upward

1. Start with the intermediates closest to the roots, because an error early in the chain spreads to everything after it.
2. For each derived column, find the rule that explains the **largest number of records exactly**, using ratios, pivot tables and decision trees.
3. Split the data by date and segment. If one rule fits before a certain date and another fits after, the logic changed, and that change is a prime suspect.
4. If two rules fit equally well, choose the simpler one and flag the choice as an assumption.

## Step 5: Test against universal rules

Run checks that require no outside knowledge:

|Check type|Example|
|---|---|
|Mathematical|Totals equal the sum of their parts|
|Logical|Effective date is after application date|
|Range|Percentages fall between 0 and 100; amounts are not negative|
|Redundancy|Age matches date of birth at the record date|
|Uniqueness|No duplicate records for the same entity and period|

Records that fail these checks are errors regardless of what the original logic was.

## Step 6: Classify the errors by what can be proven

|Error type|Description|Detectable from data alone?|
|---|---|---|
|Calculation error|The value does not follow the rule used by all other records|Yes|
|Impossible input|A gathered value breaks a universal rule|Yes|
|Plausible wrong input|A gathered value is wrong but looks reasonable|Only if redundancy exposes it|
|Logic error|The rule itself is wrong for every record|No; it can only be suspected if the rule contradicts the inferred purpose|

## Step 7: Produce the signal with confidence grades

1. Recalculate the signal for every record using the recovered rules.
2. Grade each record:
    - **Consistent:** inputs pass all checks and the recalculated signal matches the existing value.
    - **Corrected:** inputs pass all checks, but the existing value broke the rule and has been recalculated.
    - **Unresolved:** inputs fail checks or no rule can reproduce the value.
3. Publish an **assumptions register** alongside the output: the inferred purpose, each recovered rule, each judgement call between equally fitting rules, and the logic-error risk that cannot be ruled out.

## Step 8: Close the gap you cannot close alone

The assumptions register is the most important deliverable. It turns what the data could not prove into a short, specific list of questions that someone must eventually answer before the signal is used for decisions that matter.