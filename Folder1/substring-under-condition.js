/*

Problem Statement:
You are given a strings, you have to find the count of all such substrings 
which start and ends with the same character.

Input:
Input Format :
First and the only line contains a strings

Constraints:
1 <= Length of s <= 1000

Output:
Print the count of total number of such substrings starting and ending with same characters.

Sample Input:
abcab

Sample Output:
7

Hint:
Substrings of abcab which start and end with same characters, are 
a
abca
b
bcab
c
a
b
So total count is 7. Hence we print 7.

*/

function subStrUnderCond(s) {
  //write code here
  count = 0;
  for (let i = 0; i < s.length; i++) {
    let bag = "";
    for (let j = i; j < s.length; j++) {
      bag += s[j];

      if (bag[0] == bag[bag.length - 1]) count++;
    }
  }
  console.log(count);
}
