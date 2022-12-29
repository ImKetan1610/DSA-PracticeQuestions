/*

Description:
Given a string , reverse it in O(1) space.
Note : This problem was asked in BlueYonder.

Input:
1<=T<=10
next T lines contain string s consisting of lower case english letters
1<=len(string) <= 100000

Output:
output the reversed string for the given input for each test case.

Sample Input:
3
ab
cd
ef

Sample Output:
ba
dc
fe

*/

function runProgram(input) {
  input = input.trim().split("\n");
  var x = +input[0];
  var line = 1;
  for (var i = 0; i < x; i++) {
    var arr = input[line++].trim().split("");

    solution(arr);
  }
}

function solution(arr) {
  var arr1 = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    arr1.push(arr[i]);
  }
  console.log(arr1.join(""));
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
