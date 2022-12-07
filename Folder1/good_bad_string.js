/*

Problem Statement:
We do not like strings which have same consecutive letters. No one has any idea why it is so.
We call these strings as Bad strings. 
So, Good strings are the strings which do not have same consecutive letters. 
Now, the problem is simple. 
Given a string S, you need to convert it into a Good String.

Input:
Input Format:
The first line contains an integer T, denoting the number of test cases.
Each test case consists of a string S, which consists of only lower case letters.

Constraints:
1 <= T <= 10
1 <= Length of string <= 30

Output:
For each test case, print the answer to the given problem.
The answer is the modified good string

Sample Input:
3
abb
aaab
ababa

Sample Output:
ab
ab
ababa

*/

function goodBadStr(str) {
  let bag = "";
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== str[i + 1]) {
      bag = bag + str[i];
    }
  }
  console.log(bag + str[str.length - 1]);
}
