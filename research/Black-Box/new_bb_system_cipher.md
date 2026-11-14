
**Framework Requirements**
- Predict answer based on observed inputs, and resulting outputs
- Able to capture:
	- Linear relationships
	- Multivariate relationships
	- Expected Error bound
	- Operating assumptions
- Only one testing round exists with N amount of iterative tests
	- Testing guidelines need to be set out and account for inference of all the capturing objectives set out above.
- Guidelines for proper system formulation.

1. What is a solid foundation for testing?
2. How can we discover linear, and multivariate relationships?
3. Method for reliably discovering error bounds, and operating assumptions?
4. What does a proper formulation system look like?

## 1. Experiment Design
The experiment design phase is probably the most important phase. If the design isn't setup to be able to capture all other inference then the testing rounds and inference strategies are meaningless. The below general guide sets out checkpoints that needs to be fulfilled in order to ensure a well structured testing/data-gathering round.

Before we can start designing and actually testing we need to define a couple of key characteristics about the system.

- Inputs
- Internal State
- Variance/error

### Inputs
These are the variables that are within our control. We can actively change, manipulate, or control their values, or states. However, I think it is also valuable to understand that their is a difference between us controlling something and controlling something that controls the input. 

- Active control: This refers to an input that is directly controlled by the user. It does not include inputs that are "influenced" by the user.

> “Some things are within our power, while others are not. Within our power are opinion, motivation, desire, aversion, and, in a word, whatever is of our own doing; not within our power are our body, our property, reputation, status, and, in a word, whatever is not of our own doing.
> Epictetus

