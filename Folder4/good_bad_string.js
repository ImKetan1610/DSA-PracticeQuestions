/*

Description:
We do not like strings which have same consecutive letters. No one has any idea why it is so.
We call these strings as Bad strings. So, Good strings are the strings which do not have same consecutive letters. 
Now, the problem is simple. Given a string S, you need to convert it into a Good String.

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

function runProgram(input) {
  input = input.trim().split("\n");
  var x = +input[0];
  var line = 1;
  for (var i = 0; i < x; i++) {
    var arr = input[line++].trim();
    solution(arr);
  }
}

function solution(arr) {
  let arr2 = [];
  let arr3 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null) {
      arr2.push(arr[i + 1]);
    }
    if (arr[i] == arr2[0]) {
      arr2.pop();
    } else {
      arr2.pop();
      arr3.push(arr[i]);
    }
  }
  console.log(arr3.join(""));
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
  process.on("SIGNINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.et(0);
  });
}
