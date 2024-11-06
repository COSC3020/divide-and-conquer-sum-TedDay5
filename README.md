# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Recurrence relation: T(n) = 1 if n <= 2 otherwise T(n) = 3T(n/3) + 1

The base case would be 1 since when n <= 2 we return the current answer so it'll be added with the others.
The 3T takes in to consideration of the 3 recursive calls that are taken each time.
The n/3 takes in to consideration we're dividing the size of the array by 3 everytime we make a recursive call.
The + 1 is due to the if statement used to check if we are in the base case.

T(n) = 3T(n/3) + 1
= 3(3T(n/9)) + 1 + 1
= 9T(n/9) + 2
= 9T(3T(n/27)) + 2 + 1
= 27T(n/27) + 3
= 3^iT(n/3^i) + i

(i = log_3 n because it gives us the base case for T)

= 3^(log_3 n)T(n/3^(log_3 n)) + log_3 n
= nT(1) + log_3 n
= n + log_3 n ∈ Θ(n)

The final answer is Θ(n) even since we are using recursion, we're only adding elements to an array, if we had to sort this array it would take much longer.
