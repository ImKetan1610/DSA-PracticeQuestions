/*

Problem Statement:
You are given an integer N.
Print the pattern as shown below.
If the value stored inN = 7, then the pattern required will be
* * * * * * * 
* *       * * 
*   *   *   * 
*     *     * 
*   *   *   * 
* *       * * 
* * * * * * * 

Input:
The first and only line contains the value of N

Output:
Print the pattern as shown in the problem statement

Sample Input:
7

Sample Output:
* * * * * * *
* *       * *
*   *   *   *
*     *     *
*   *   *   *
* *       * *
* * * * * * *

Sample Input:
3

Sample Output:
* * *
* * *
* * *

Hint:
Print the pattern as shown in the sample output.
Hint: 
The dimension of the Square is N x N

*/

function patternPrinting(N) {
  // Write code here
  for (let i = 1; i <= N; i++) {
    let str = "";
    for (let j = 1; j <= N; j++) {
      if (j == 1 || i == 1 || i == N || j == N || i + j == N + 1 || i == j) {
        str += "*" + " ";
      } else {
        str += "  ";
      }
    }
    console.log(str);
  }
}
