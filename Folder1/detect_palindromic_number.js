/*

Problem Statement:
You are given an integer num
You need to print Yes if that integer is a palindrome or else print No
A palindrome is a word, number, phrase, 
or other sequence of characters that reads the same backward as forward, such as madam or racecar.

Input:
Input Format:
First line contains num, an integer

Constraints:
1 <= num <= 1000000

Output:
Print Yes or No depending upon the integer.

Sample Input:
1221

Sample Output:
Yes

Hint:
Sample 1 Explanation
We print Yes as 1221 is a palindrome.

*/

function detectPalindrome(num) {
  //write code here
  num = num + "";
  let bag = "";
  for (let i = num.length - 1; i >= 0; i--) {
    bag += num[i];
  }
  if (bag == num) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
