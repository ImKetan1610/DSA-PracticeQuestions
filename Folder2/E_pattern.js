/*

Problem statements:
It is the end of the unit, 
and to celebrate you decide to write a code to print the letter E, with the help of the character *
You are given a number stored in a variable with the name N. 
You have to make the letterE, with reference to the value stored in N.
For example, consider the value stored in N = 5, then the corresponding pattern will be

* * * * *
*
*****
*
* * * * *

Note : The value stored in N, will always be odd

Input:
The first and the only line of the input contains the value stored inN

Output:
Print the pattern as shown in the problem statement according to the value stored inN

Sample Input:
5

Sample Output:
* * * * *
*
*****
*
* * * * *

Hint:
In the sample test case, the value stored inN = 5, therefore, the required pattern will be

* * * * *
*
*****
*
* * * * *

In the following figure, the character_denotes the empty spaces required in the pattern.

*_*_*_*_*
*
*****
*
*_*_*_*_*

Please note, that the character_is given only for the purpose of understanding and to help you debug, 
and should not be included in the actual program

*/

function endOfUnit(N) {
  //write code here
  let m = Math.floor(N / 2);

  for (let i = 0; i < N; i++) {
    let bag = "";
    for (let j = 0; j < N; j++) {
      if (i === 0 || j === 0 || i === N - 1) {
        if (i == m) {
          bag += "*";
        } else {
          bag += "*" + " ";
        }
      } else if (i == m) {
        bag += "*";
      }
    }

    console.log(bag);
  }
}
