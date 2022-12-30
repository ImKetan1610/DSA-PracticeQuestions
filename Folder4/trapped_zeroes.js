/*

Description:
Given a binary matrix A, you have to count the number of trapped zeroes, 
    which means the 0's which are surrounded by 1's only.

Input:
Input Format:
First-line contains 2 integers n and m representing the number of rows and columns respectively of 2D array arr.
Following n lines contains m-integers.

Constraints:
1 <= n <= 100
1 <= m <= 100
1 <= arr[i][j] <= 10^4

Output:
Print the count of trapped zeroes.

Sample Input:
3 3
1 1 1
0 1 0
1 0 1 

Sample Output:
3

Hint:
So the zeroes at positions (2,1), (2,3), and (3,2) are only surrounded by 1 so these are the trapped zeroes.

*/
