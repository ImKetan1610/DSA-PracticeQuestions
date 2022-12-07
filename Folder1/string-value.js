/*
Problem Statement:
Given a string S of all lowercase letters and each letter has a value of its own
The value of the alphabet a is 1,b is 2,c is 3..... till z is 26.

Now you have to find the total value of the given string. 
The total value of a string is the sum of values of all characters present in string.

Input:
Input Format:
The first and only line of input contains the String S

Constraints:
1 <= Length of S <= 1000

Output:
Print the value of string

Sample Input:
aba

Sample Output:
4

Hint:
Sample 1 Explanation
For example, Consider the String aba
Here, the first character a has a weight of 1, the second character b has 2 
and the third character a again has a weight of 1.

So the sum of string aba here is equal to : 1 + 2 + 1 = 4.
*/

function stringValue(S) {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let sum = 0;
  for (let i = 0; i < S.length; i++) {
    for (let j = 0; j < lower.length; j++) {
      if (S[i] == lower[j]) {
        sum += j + 1;
      }
    }
  }
  console.log(sum);
}
