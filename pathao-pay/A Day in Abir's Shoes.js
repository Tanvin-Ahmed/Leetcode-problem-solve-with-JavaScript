/*
Abir, a passionate settlement officer at Pathao Pay, is responsible for processing a long queue of payment settlements daily. Each settlement arrives with an associated transaction fee, and Abir must prepare a queue of settlements for processing.

Pathao Pay has specific rules for settlement queues:

Settlements must be in strictly decreasing order of transaction fees.
Settlements with a fee of 0 must be ignored.
Abir faces a challenge: he cannot rearrange the settlements after they arrive. For each settlement, he must make an immediate decision on how to handle it. He has the following three options:

Add the settlement to the beginning of the queue.
Add the settlement to the end of the queue.
Skip the settlement entirely.
Abir's goal is to create the longest possible sequence of settlements that satisfies the above rules.

Input Format

The first line is the number of days for which you have to help Abir. The days follow, one after another; the format of each day is the following:

Following an integer totalTransaction which is the total transaction number for the day.
Each of the following totalTransaction line contains a non-negative integer that gives the fees for a transaction. No two transactions have the same fees.
Constraints

0 <= totalTransaction <= 200

Output Format

Output a single integer representing the number of transactions in the longest settlement queue that can be formed under the given restrictions. Print each result on a separate line.

Sample Input 0

1
7
3
4
2
6
5
0
1
Sample Output 0

5

*/
