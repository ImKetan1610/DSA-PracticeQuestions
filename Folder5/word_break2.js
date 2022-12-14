/*

Description:
You are given a word of length N and a dictionary containing some non-empty words.
You need to check how many ways are there 
    such that the given word can be segmented into a space-separated sequence of one or more dictionary words 
    i.e, you can choose some words from the dictionary 
    such that it is possible to obtain the exact original word by joining them in some order.
Note:
You can use any word of the dictionary any number of times in the segmentation.
As the answer can be huge, so you need to calculate the result in mod 10^9+7.
All dictionary words are unique.

Input:
The first line contains T denoting the number of test cases.
For each test case, the first line contains two positive integers N and M denoting the length of the word 
    and size of the dictionary.
The next line contains a string of length N in lowercase Latin letters.
The next M lines of input contain the strings present in the dictionary in lowercase Latin letters.

Constraints:
1 <= T <= 10
1 <= N<= 200
1 <= M <= 10^6
The sum of the length of the strings present in the dictionary <= 10^6

Output:
For each test case, you should print the number of ways in which you can do the segmentation.

Sample Input:
1
3 3
aaa
a
aa
aaa

Sample Output:
4

Sample Input:
2
5 4
masai
as
mas
ai
asai
4 2
hack
hac
ack

Sample Output:
1
0

Hint:
Explanation for Sample 1
Given dictionary is [a], [aa], [aaa]. We can form “aaa” in following ways 
( square brackets are used to differentiate words) :
[a][a][a]
[a][aa]
[aa][a]
[aaa]

*/

// not solved
