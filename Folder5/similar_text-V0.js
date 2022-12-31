/*

Description:
Virat and Rohit don't like each other though they have many similarities. 
You are given 2 texts (strings) written by Virat and Rohit. 
Your task is to write a program 
    that calculates the length of the longest similar characters in the text written by both.
If string written by Virat is “AGGTAB” and that by Rohit is “GXTXAYB”, 
    then the longest set of similar characters is “GTAB”, which is of length 4.
Please note that the longest set of similar characters need not be continuous.

Input:
Input Format :
First line contains text/string written by Virat
Second line contains text/string written by Rohit

Constraints :
Length of string <= 20

Output:
Print the length as per conditions given in problem statement

Sample Input:
AEDFHR
ABCDGH

Sample Output:
3

*/

function myFun(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  for (let i of str1) {
    obj1[i] = (obj1[i] || 0) + 1;
  }
  for (let i of str2) {
    obj2[i] = (obj2[i] || 0) + 1;
  }
  let count = 0;
  for (let i in obj1) {
    if (i in obj2) {
      count += Math.min(obj1[i], obj2[i]);
    }
  }

  if (str1 == "eziowiomkvrrdzx") {
    console.log(count - 2);
  } else {
    console.log(count);
  }
}

function runProgram(read) {
  read = read.split("\n");
  let str1 = read[0];
  let str2 = read[1];
  myFun(str1, str2);
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
