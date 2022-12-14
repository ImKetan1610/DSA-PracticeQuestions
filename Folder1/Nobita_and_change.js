/*

Problem Statement:
Nobita is given a number N (length of the string) and a string, 
the string contain both Lowercase and Uppercase English Alphabet characters , 
convert all Uppercase characters
into lowercase then output the entire string.
e.g. "abAbC"  should be changed to "ababc"

Input:
Input Format:
First line of input contains the number N , denoting the length of the string.
Second line of input contains the string.

Constraints:
1<=N<=1000

Output:
Output the string after changing the uppercase characters into lowercase

Sample Input:
5
abAbC

Sample Output:
ababc

*/

function nobitaChange(N, str) {
  let lower = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let bag = "";
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < 52; j++) {
      if (str[i] == upper[j]) bag += lower[j];
    }
  }
  console.log(bag);
}
