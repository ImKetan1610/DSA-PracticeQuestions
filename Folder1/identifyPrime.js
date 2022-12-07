/*

Problem Statement:
You are given a number stored in a variable with the name num
Check if the number is a prime number or not
If the value stored in num, is a prime number print Yes, else print No
Note : A prime number is a number, that is divisible by only 1 and the number itself

Input:
The first and the only line of the input contains the value stored in num

Output:
If the value stored in num, is a prime number print Yes, else print No

Sample Input:
13

Sample Output:
Yes

Hint:
In the sample test case, the value stored in num = 13. 
Since, 13 is a prime number, the output is Yes

*/

function identifyPrime(num) {
  // Write code here
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  } //console.log(count);
  if (count == 2) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
