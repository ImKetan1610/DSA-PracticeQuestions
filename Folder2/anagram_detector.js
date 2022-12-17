/*

Problem Statement:
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once. 
For example, the word anagram can be rearranged into nag a ram.
Given 2 phrases, write a program that detects if both are anagrams of each other.
If both are anagrams, print "True"
Else print "False"

Input:
Input Format :
First line of input contains first phrase
Second line of input contains second phrase

Constraints :
Length of each phrase < 1000

Output:
Output a string based on conditions mentioned above

Sample Input:
anagram
nag a ram

Sample Output:
True

*/

function string(str1, str2) {
  let newstr1 = "";
  let newstr2 = "";

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] == " ") {
      continue;
    } else {
      newstr2 += str2[i];
    }
  }

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == " ") {
      continue;
    } else {
      newstr1 += str1[i];
    }
  }

  let obj = {};

  for (let i = 0; i < newstr1.length; i++) {
    let x = newstr1[i];
    if (obj[x] == undefined) {
      obj[x] = 1;
    } else {
      obj[x]++;
    }
  }

  if (check(obj, newstr2) == true) {
    console.log("True");
  } else {
    console.log("False");
  }
}

function check(obj, str1) {
  for (let i = 0; i < str1.length; i++) {
    if (obj[str1[i]] === undefined) {
      return false;
    } else {
      obj[str1[i]]--;
    }
  }

  let res = false;

  for (let key in obj) {
    if (obj[key] != 0) {
      res = true;
    }
  }
  if (res == true) {
    return false;
  } else {
    return true;
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let str1 = input[0];
  let str2 = input[1];
  string(str1, str2);
}

if ((process.env.USER = "")) {
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
    process.et(0);
  });
}
