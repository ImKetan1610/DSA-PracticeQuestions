/*

Problem Statement:
You are given two numbers, stored in variables with the following names a, b
If both the numbers are prime, printTrue, else print False

Input:
The first and the only line of input contains the value stored ina, b respectively

Output:
Print the output as explained in the problem statement

Sample Input:
11 17

Sample Output:
True

Hint:
In the sample test case, the value stored ina = 11, and the value stored inb = 17. 
Since, both the numbers are prime, we print True

*/

function twoPrimes(a, b) {
  // write code here
  let prime1 = true;
  let prime2 = true;
  let max = (a, b);
  for (let i = 2; i <= max; i++) {
    if (i !== a && i !== b) {
      if (a % i === 0) {
        prime1 = false;
      } else if (b % i === 0) {
        prime2 == false;
      }
    }
  }
  if (prime1 == true && prime2 == true) {
    console.log("True");
  } else {
    console.log("False");
  }
}
