/*

Problem Statement:
You need to print pattern as given in Sample Input.
Analyse the sample test case to understand the pattern.

Input
First line contains N. (1<= N <= 10)

Output
Print pattern for N

Sample Input 1 
1
Sample Output:
0

Sample Input:
5
Sample Output:
0 1 0 3 0
1 1 1 3 1
2 1 2 3 2
3 1 3 3 3
4 1 4 3 4

Hint:
Find pattern in numbers.

*/

function patternIndex(N) {
  //write code here
  for (let i = 0; i < N; i++) {
    bag = "";
    for (let j = 0; j < N; j++) {
      if (j % 2 == 0) {
        bag += i + " ";
      } else {
        bag += j + " ";
      }
    }
    console.log(bag);
  }
}
