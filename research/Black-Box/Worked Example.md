# Stage 1
**System context:** You are looking at a black-box system for calculating shipping & processing fees for a commerce order.

**Trial 1 (Baseline):**

- **Inputs:**
    - Order Amount: R500
    - Customer Tier: Regular
    - Item Count: 2
    - Express Shipping: No

- **Output:**
    - Fee: R60

# Stage 2

Before doing the variance analysis we need to determine what the boundary values are. 

**Boundary Values**

*1. Order Amount*
- Max: Theoretically *infinite*
- Min: 1

*2. Customer Tier*
- **Valid Options:** Regular, Silver, Gold, Platinum _(Categorical input)_

*3. Item Count*
- Max: Theoretically infinite (whole numbers only)
- Min: 1

*4. Express Shipping*
- Valid Options: Yes, No

## Test 1 | Initial

| Index | Order Amount | Customer Tier | Item Count | Express Shipping | Output |
| ----- | ------------ | ------------- | ---------- | ---------------- | ------ |
| 0     | 500          | regular       | 2          | No               | 60     |
| 1     | 5000         | regular       | 2          | No               | 0      |
| 2     | 500          | platinum      | 2          | No               | 60     |
| 3     | 500          | regular       | 20         | No               | 150    |
| 4     | 500          | regular       | 2          | Yes              | 110    |

**Output Analysis**
1. Order Amount: 
    - Price Delta: -60
    - Conclusion: *Matters | Influence Grade:* **B** 
	    - Reason: Bigger order amount makes more profit per order 
2. Customer Tier:
    - Price Delta: 0
    - Conclusion: *No influence*
3. Item Count:
    - Price Delta: +90
    - Conclusion: *Matters | Influence Grade:* **A** 
	    - Reason: The amount of packages influences the price
4. Express Shipping:
    - Price Delta: +50
    - Conclusion: *Matters | Influence Grade:* **C**
	    - Reason: Express shipping requires elevated priority 

## Test 2 | Magnitude discovery

**Input Hyphothesis**
1. Order Amount *Trail 2 | 5 guesses*
    - Because the price dropped to zero a ceiling must exist. 
    - What is the ceiling?
    - Is the ceiling binary or sliding scale?
2. Customer Tier *Trail 3 | 1 guess*
    - Because no measurable difference was observed we drop this variable.
    - Check influence at Silver
3. Item Count *Trail 1 | 5 guesses*
    - Determine nature of the increase:
	    - Linear
	    - Polynomial
4. Express Shipping *No trail need*
    - Assume **Express Shipping** adds a flat *+50*

### Trail 1

| Index | Order Amount | Customer Tier | Item Count | Express Shipping | Output |
| ----- | ------------ | ------------- | ---------- | ---------------- | ------ |
| 0     | 500          | regular       | 5          | No               | 75     |
| 1     | 500          | regular       | 8          | No               | 90     |
| 2     | 500          | regular       | 11         | No               | 105    |
| 3     | 500          | regular       | 14         | No               | 120    |
| 4     | 500          | regular       | 17         | No               | 135    |
### Trail 2

| Index | Order Amount | Customer Tier | Item Count | Express Shipping | Output |
| ----- | ------------ | ------------- | ---------- | ---------------- | ------ |
| 0     | 900          | regular       | 2          | No               | 60     |
| 1     | 1800         | regular       | 2          | No               | 0      |
| 2     | 2700         | regular       | 2          | No               | 0      |
| 3     | 3500         | regular       | 2          | No               | 0      |
| 4     | 4400         | regular       | 2          | No               | 0      |
### Trail 3

| Index | Order Amount | Customer Tier | Item Count | Express Shipping | Output |
| ----- | ------------ | ------------- | ---------- | ---------------- | ------ |
| 0     | 500          | Silver        | 2          | No               | 60     |

**Output Inference**
1. Order Amount *Trail 4 | 4 guesses*
    - *Confirmation* of ceiling between 900-1800
2. Customer Tier 
    - **No Influence**
3. Item Count 
    - Item count is a **linear function**
$$
5x + 50
$$
4. Express Shipping 
    - Assume **Express Shipping** adds a flat *+50*

### Trail 5

| Index | Order Amount | Customer Tier | Item Count | Express Shipping | Output |
| ----- | ------------ | ------------- | ---------- | ---------------- | ------ |
| 0     | 1080         | regular       | 2          | No               | 60     |
| 1     | 1260         | regular       | 2          | No               | 0      |
| 2     | 1440         | regular       | 2          | No               | 0      |
| 3     | 1620         | regular       | 2          | No               | 0      |
**Output inference**
1. Order Amount 
    - Ceiling exists between 900-1080
    - Assume ceiling is **1000**

# Stage 3 A
**Initial Hyphotesis**

1. Express shipping is calculated in isolation
2. If order amount if over R1000 default amount written by order amount & item count to zero
$$
C(x, e, z) = \begin{cases} 
5x + 50 + 50e, & \text{if } z < 1000 \\ 
50e, & \text{if } z \ge 1000 
\end{cases}
$$

# Stage 4 

| Index | Order Amount | Customer Tier | Item Count | Express Shipping | Expected | Output |
| ----- | ------------ | ------------- | ---------- | ---------------- | -------- | ------ |
| 0     | 999          | regular       | 2          | No               | 60       | 60     |
| 1     | 1001         | regular       | 2          | No               | 0        | 0      |
| 2     | 1000         | regular       | 10         | No               | 0        | 0      |
| 3     | 1000         | regular       | 19         | No               | 0        | 0      |
| 4     | 1000         | regular       | 25         | No               | 0        | 0      |
| 5     | 1000         | regular       | 2          | Yes              | 50       | 50     |
| 6     | 1001         | gold          | 13         | Yes              | 50       | 50     |
