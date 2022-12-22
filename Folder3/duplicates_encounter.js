/*

Problem Statement:
Given a string of lowercase characters in range ascii[‘a’..’z’].
You can perform one operation on this string in which you can selects 
a pair of adjacent lowercase letters that match, and delete them.
For instance, the string aab could be shortened to b in one operation.
Your task is to delete as many characters as possible using this method and print the resulting string. 
If the final string is empty, print "Empty String" (without quotes).
Please note that characters can be deleted only if they form a pair and are same 
(i.e from aaa we can only delete 2 a's and will be left with a single a).


Input:
Input Format:
First and the only line contains string

Constraints:
Length of string < 1000

Output:
Output Format:
Length of string < 1000

Sample Input:
aaabccddd

Sample Output:
abd

*/

function duplicatesEncounter(s) {
  let stack = [];
  for (i = 0; i < s.length; i++) {
    if (stack.length != 0 && stack[stack.length - 1] == s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  if (stack.length == 0) {
    console.log("Empty String");
  } else {
    console.log(stack.join(""));
  }
}

function runProgram(input) {
  let s = input;
  duplicatesEncounter(s);
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
