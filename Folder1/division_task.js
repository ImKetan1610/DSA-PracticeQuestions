/*

Problem Statement:
You are given a number N.
Let’s say you derive a variable x which is equal to the floor of a number you get when32is divided by N.
In case x is 0, print Too Low
In case it is not possible to generate a valid number, print-1
In all other cases, print x.

Input:
Input Format :
First line contains N

Constraints :
0 <= N <= 100

Output:
Output string or number based on the conditions mentioned above.


Sample Input:
4

Sample Output:
8


Sample Input:
3

Sample Output:
10

Hint:
When 32 is divided by 4, answer is 8. Floor value of 8 is 8. So x is 8.
As per our conditions we need to print the number itself, so we print 8.

When 32 is divided by 3, answer is10.66. Floor value of 10.66 is 10. So x is 10.
As per our conditions we need to print the number itself, so we print 10.

*/

function divisionTask(N) {
  // Write code here
  let x = Math.floor(32 / N);

  if (x == 0) {
    console.log("Too Low");
  } else if (x == isNaN) {
    console.log("-1");
  } else if (x == Infinity) {
    console.log("-1");
  } else {
    console.log(x);
  }
}
