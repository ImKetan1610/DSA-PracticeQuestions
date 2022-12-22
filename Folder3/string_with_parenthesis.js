/*

Problem Statement:
Given a string containing three types of parenthesis : (), [], {}, 
write a program to check whether the string contains a valid sequence of parentheses.

Input:
Input Format:
Input contains one line which is the string with parentheses whose validity you have to check

Constraints:
length of string <= 1000

Output:
Output Format:
Print "balanced" (without quotes) if it has a sequence of valid parentheses, 
otherwise print "unbalanced" (without quotes)

Sample Input:
(((((((((())))))))))

Sample Output:
balanced

Sample Input:
[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]

Sample Output:
balanced

*/

function runProgram(input) {
  // Write Code Here
  input = input.trim().split("");
  let str = input;
  console.log(string(str));
}

function string(str) {
  let stack = [];
  let obj = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
      stack.push(str[i]);
    } else if (str[i] == ")" || str[i] == "]" || str[i] == "}") {
      if (stack[stack.length - 1] == obj[str[i]]) {
        stack.pop();
      } else {
        return "unbalanced";
      }
    }
  }
  if (stack.length == 0) {
    return "balanced";
  } else {
    return "unbalanced";
  }
}

if (process.env.USERNAME === "") {
  runProgram(``);
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
