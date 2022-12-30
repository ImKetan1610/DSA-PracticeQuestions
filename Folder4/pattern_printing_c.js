/*

Description:
You are given an integer stored in a variable with the name N
You have to print the following pattern according to the value stored in N
For example, consider the value stored inN = 5, then the required output will be
* * * * *
*
*
*
* * * * *
Note : Please check for spaces 

Input:
The first and the only line of the input contains the value stored inN

Output:
Print the pattern as shown in the problem statement

Sample Input:
5

Sample Output:
* * * * *
*
*
*
* * * * *

Hint:
In the sample test case, the value stored inN = 5, then the required output will be
* * * * *
*
*
*
* * * * *

The following figure shows the spaces in the pattern with the help of_. 
The_is only for your understanding, and not to be printed in the actual output
*_*_*_*_*
*
*
*
*_*_*_*_*

*/

function patternPrintingI(N) {
  for (let i = 1; i <= N; i++) {
    let bag = "";
    for (let j = 1; j <= N; j++) {
      if (i == 1 || j == 1 || i == N) {
        bag = bag + "*" + " ";
      } else {
        bag = bag + "";
      }
    }
    console.log(bag);
  }
}
