/*

Description:
You are given a word of length N and a dictionary containing some non-empty words.
You need to check whether the given word can be segmented into 
    a space-separated sequence of one or more dictionary words 
    i.e, you can choose some words from the dictionary such that 
    it is possible to obtain the exact original word by joining them in some order.
Note:
You can use any word of the dictionary any number of times in the segmentation.

Input:
The first line contains T denoting the number of test cases.
For each test case, the first line contains two single positive integers N and M 
    denoting the length of the word and size of the dictionary.
The next line contains a string of length N in lowercase Latin letters.
The next M lines of input contain the strings present in the dictionary in lowercase Latin letters.

Constraints:
1 <= T <= 10
1 <= N <= 200
1 <= M <= 10^6
The sum of the length of the strings present in the dictionary <= 10^6

Output
For each test case, you should print “Yes” (without quotes)  if the word can be segmented else “No” (without quotes).

Sample Input:
2
5 4
masai
as
mas
ai
asai
4 2
hack
hac
ack

Sample Output:
Yes
No

Sample Input:
1
3 1
aaa
a

Sample Output:
Yes

Hint:
Explanation for Sample 1
For first sample we can use 2nd( “mas” ) and 3rd( “ai” ) ( 1 based indexing ) 
    string of the dictionary to form “mas” + “ai” = “masai”
For the second case, there is no way to form “hack” using dictionary words.

*/

function find(n, arr, str) {
  let mem = new Array(n).fill(true);
  return dfs(0);
  function dfs(idx) {
    if (idx === n) {
      return true;
    }
    for (let i = idx + 1; i <= n; i++) {
      let word = str.substring(i, idx);
      if (arr.includes(word) && mem[idx]) {
        if (dfs(i)) {
          return true;
        }
      }
    }

    mem[idx] = false;
    return false;
  }
}

function takeInput(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let str = input[line++];
    let arr = [];
    for (let j = 0; j < k; j++) arr.push(input[line++]);
    let ans = find(n, arr, str);
    ans ? console.log("Yes") : console.log("No");
  }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  takeInput(read);
});
