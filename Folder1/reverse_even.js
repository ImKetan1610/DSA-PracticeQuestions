/*

Problem statement:
Given an array A of N positive integers, print the Even integers in reverse order.

Input:
Input Format:-
The first line of input contains a single integerN, number of integers.
The second line of input contains N space-separated integers ,A[0], A[1], .., A[N-1]

Constraints:-
1 <= N <= 10^5
1 <= A[i] <= 10^6

Output:
Output Format:
The first line of output contains a single integer K, number of even integers.
The second line of output contains K space-separated even integers in reverse order.

Sample Input:
5
1 2 3 4 5

Sample Output:
2
4 2

Sample Input:
2
96 13 

Sample Output:
1
96

*/

function reverseEvens(N, A) {
  //write code here
  var count = 0;
  var revarr = "";
  for (var i = N - 1; i >= 0; i--) {
    if (A[i] % 2 == 0) {
      revarr += A[i] + " ";
      count++;
    }
  }
  console.log(count + "\n" + revarr);
}
