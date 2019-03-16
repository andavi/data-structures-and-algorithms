[![Build Status](https://travis-ci.com/andavi/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/andavi/data-structures-and-algorithms)

# Kth from end of linked list
Find the kth value from the end of a linked list.

## Challenge
Find the kth value from the end of a linked list catching all edge cases.

## Approach & Efficiency
We will use a leader and follower variable with the leader spaced k nodes ahead of the follower. Once the leader reaches the end, the follower will be the element we are looking for. Space will be O(1) because we won't be building an additional data structure in our approach. Time complexity will be O(n) because we only want to make one traversal of the LL.

## Solution
![alt text](https://raw.githubusercontent.com/andavi/data-structures-and-algorithms/master/code-challenges/401/ll-kth-from-end/assets/ll-kth-from-end.jpg)'