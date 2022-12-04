/*

Problem Statement:
Given a string str of length N, find the length of the largest substring which contains only consonants.

For example: str = "abced", the sub-strings containing only consonants are:"bc" and "d", 
largest among them is"bc", so the output will be 2, 
which is the length of largest sub-string containing only consonant.

Another example: str = "bfgedauty", here"bfg"is the largest substring without vowels or containing only consonants, 
so the output will be 3.

Note:Input contains only the lowercase English alphabet.

Input:
Input Format:
First line of input contains the number N , denoting the length of the string.
Second line of input contains the string.

Constraints:
1<=N<=1000

Output:
Output an integer which is the length of largest substring containing only consonant (non-vowels)

Sample Input:
5
abced

Sample Output:
2

Sample Input:
4
aetu

Sample Output:
1

Hint:
In Sample 1:
str = "abced" & N=5
The sub-string which contains only consonants are: "bc" and "d"
The longest is"bc", So the output will be2

In Sample 2:
str = "aetu" & N=4
The sub-string which contains only consonants is:"t"
The longest is"t", So the output will be 2

*/

function nonVowelSubString(N, str) {
  str = str.split("");
  let max = 0;
  for (let i = 0; i < N; i++) {
    let val = "";
    for (let j = i; j < N; j++) {
      if (
        str[j] == "a" ||
        str[j] == "e" ||
        str[j] == "i" ||
        str[j] == "o" ||
        str[j] == "u"
      ) {
        break;
      }
      val += str[j];
      if (val.length > max) {
        max = val.length;
      }
    }
  }
  console.log(max);
}
