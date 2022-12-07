/*

Problem statement:
You are given a string str of size N
You have to find the count of all the substrings of the strings such that the there are at least two consecutive vowels in the string

For example, consider the string aac, then all the substrings of the given string are
a
aa
aac
Now, there is 1 substring aa such that it has two consecutive vowels, 
hence the required output is 1

Input:
First line contains the integer N, the size of the string
The second line contains the string stored in str
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
Therefore, the required output is 3

*/

function subString(N, S) {
  //write code here
  let count = 0;
  for (let i = 0; i <= S.length - 1; i++) {
    let bag = "";
    for (let j = i; j <= S.length - 1; j++) {
      bag = bag + S[j];
      if (checkStr(bag)) {
        count++;
      }
    }
  }
  console.log(count);
}
function checkStr(str) {
  for (let i = 0; i <= str.length - 1; i++) {
    if (
      (str[i] == "a" ||
        str[i] == "e" ||
        str[i] == "i" ||
        str[i] == "o" ||
        str[i] == "u") &&
      (str[i + 1] == "a" ||
        str[i + 1] == "e" ||
        str[i + 1] == "i" ||
        str[i + 1] == "o" ||
        str[i + 1] == "u")
    ) {
      return true;
    }
  }
  return false;
}
