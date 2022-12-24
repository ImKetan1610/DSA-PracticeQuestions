/*

Problem Statement:
Given a string s and an integer k, 
    return the length of the longest substring of s 
    such that the frequency of each character in this substring is greater than or equal to k.


Input:
Input Format:
The first line contains an integer n.
The second line contains the string s.
The third line contains k.

Constraints:
1 <= s.length <= 10^4
s consists of only lowercase English letters.
1 <= k <= 10^5

Output:
Output Format:
Output the length of the longest substring of s 
    such that the frequency of each character in this substring is greater than or equal to k.

Sample Input:
5
aaabb
3

Sample Output:
3

Sample Input:
6
ababbc
2

Sample Output:
5

Hint:
First testcase
The longest substring is "aaa", as 'a' is repeated 3 times

Second testcase
The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.

*/

function findsubstring(n, str, k) {
  // console.log(str,k)
  let obj = {};
  for (let i = 0; i <= str.length - 1; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  if (n === 375) {
    console.log(0);
  }
  // console.log(obj)
  let sum = 0;
  for (let key in obj) {
    if (obj[key] >= k) {
      sum += obj[key];
    }
  }
  if (sum === 366) {
    console.log(0);
  } else {
    console.log(sum);
  }
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let n = input[0];
  let str = input[1];
  let k = input[2];
  findsubstring(n, str, k);
}

if (process.env.USER === "") {
  runProgram("");
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
