/*

Description:
Given an array A having N positive integers. 
Check if there exists any subsequence of array A that starts and ends with an odd number.

Input:
First line: Single integer denoting the value of T - the number of test cases.
For each test case:
First line: Single integer denoting the value of N.
Next line: N single space-separated integers denoting the elements of array A.

Constraints:
1 <= T <= 100
1 <= N <= 15
1 <= A[ i ] <= 100

Output
For each test case, print in a new line, 
    "yes" (without quotes) if there exists any subsequence of array A that starts and ends with an odd number. 
Else print "no" (without quotes).

Sample Input:
2
4
4 3 2 1
2
2 4

Sample Output:
yes
no

Hint:
Given test cases:
Test case 1:
N = 4, A: [ 4, 3, 2, 1 ].
Subsequences which start and end with odd numbers in array A are:
{3}, { 3, 2,1}, {3, 1}, {1}.
Hence a subsequence which starts and ends with odd numbers exists. Hence the answer is "yes".

Test case 2:
N = 2, A: [ 2, 4].
All subsequence of A are:
{2}, {4}, {2, 4}.
None of them start and end with an odd number. Hence the answer is "no".

*/
