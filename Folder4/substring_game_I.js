/*

Description:
You are given a string str of size N
You have to find the count of all the substrings of the strings 
    such that the there are at least two consecutive vowels in the string
For example, consider the string aac, then all the substrings of the given string are
a
aa
aac
Now, there is 1 substring aa such that it has two consecutive vowels, hence the required output is 1

Input:
First line contains the integerN, the size of the string
The second line contains the string stored instr
1 <=N<= 1000
The string contains only lower case characters

Output:
Print the count of all the substrings which have consecutive vowels in them

Sample Input:
4
cdea

Sample Output:
3

Hint:
All the substrings having consecutive vowels in the substring are
cdea
dea
ea
Therefore, the required output is3

*/

function subString(N, S) {
  let [n, str] = S.trim().split("\n");
  let c = 0;
  let v = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < n; i++) {
    let s = "";
    for (let j = i; j < n; j++) {
      s += str[j];
      for (let k = 0; k < s.length; k++) {
        if (v.includes(s[k]) && v.includes(s[k + 1])) {
          c++;
          break;
        }
      }
    }
  }
  console.log(c);
}
