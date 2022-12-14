/*

Problem Statement:
You are provided a string S.
Write a program that returns length of the longest palindromic substring of that string.

Input
Input Format:
First line contains S, a string.

Constraints:
`1 <= Length of string <= 100

Output
Output Format

Output one number which is length of the longest substring which is a palindrome


Sample Input:
thisracecarisgood

Sample Output:
7

Hint:
Sample 1 Explanation
The given string contains a palindromic substring which is, "racecar" and 
it is of largest length(7) among all other palindromic substrings.
Hence the output is 7

*/

function masaiPalSubString(S) {
  //write code here
  let max = 0;
  for (let i = 0; i < S.length; i++) {
    let subStr = "";
    for (let j = i; j < S.length; j++) {
      subStr += S[j];
      let bag = "";
      for (let k = subStr.length - 1; k >= 0; k--) {
        bag += subStr[k];
      }
      if (bag == subStr && max < subStr.length) {
        max = subStr.length;
      }
    }
  }
  console.log(max);
}
