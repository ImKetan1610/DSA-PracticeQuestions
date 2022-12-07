/*

Problem statement:
Given an array A of N positive integers, print the Odd integers in reverse order.

Input:
Input Format:-
The first line of input contains a single integerN, number of integers.
The second line of input contains N space-separated integers ,A[0], A[1], .., A[N-1]

Constraints:-
1 <= N <= 10^5
1 <= A[i] <= 10^6

Output:
Output Format:-
The first line of output contains a single integerK, number of odd integers.
The second line of output contains K space-separated odd integers in reverse order.

Sample Input:
5
38 1 67 23 31 

Sample Output:
4
31 23 67 1 

Sample Input:
2
96 13 

Sample Output:
1
13

*/

function reverseOdds(N, A) {
  //write code here
  var revarr = "";
  let count = 0;
  for (var i = N - 1; i >= 0; i--) {
    if (A[i] % 2 !== 0) {
      revarr += A[i] + " ";
      count++;
    }
  }
  console.log(count + "\n" + revarr);
}
