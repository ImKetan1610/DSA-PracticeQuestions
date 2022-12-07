/*

Problem Statement:
Given a string containing both Uppercase and Lowercase characters, 
you need to change the Uppercase into Lowercase and Lowercase into Uppercase.

Note: "A" will be changed to "a"  and "b" will be changed to "B"

Input:
Input Format:
The first line will contain an integer N, denoting the size of the string.
The next line will contain the string of N size.

Constraints:
1<= N <= 10^5

Output:
output string as mentioned in the description.

Sample Input:
5
aBbcd

Sample Output:
AbBCD

*/

function convertStr(N, str) {
  //write code here
  let lcase = "abcdefghijklmnopqrstuvwxyz";
  let ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let bag = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < lcase.length; j++) {
      if (str[i] == lcase[j]) {
        bag += ucase[j];
      } else if (str[i] == ucase[j]) {
        bag += lcase[j];
      }
    }
  }
  console.log(bag);
}
