[![Build Status](https://travis-ci.com/andavi/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/andavi/data-structures-and-algorithms)

# Merge linked lists
Zip two linked lists.

## Challenge
Merge two linked lists as efficiently as possible.

## Approach & Efficiency
We will have a first and second node that use temp pointers to interleave themselves together until a null is reached. At that point the last node not pointing to a null will be appended to the linked list and LL1 will be returned. No extra space will be used so space complexity will be O(1) and time O(n) where n = length of LL1 + plus length of length of LL2. 

## Solution
![alt text](https://raw.githubusercontent.com/andavi/data-structures-and-algorithms/ll_merge/code-challenges/401/ll-merge/assets/ll-merge.jpg)'
