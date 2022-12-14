/*

Problem Statement:
Given a string of lowercase characters in range ascii[āaā..āzā].
You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.
For instance, the string aab could be shortened to b in one operation.
Your task is to delete as many characters as possible using this method and print the resulting string. 
If the final string is empty, print "Empty String" (without quotes).
Please note that characters can be deleted only if they form a pair and are same
(i.e from aaa we can only delete 2 a's and will be left with a single a).
I know there exists a simple implemented String entation based solution of this question, 
but please try to come up with an approach that uses stack data structure to solve the purpose

Input:
Input Format:
First and the only line contains string

Constraints:
Length of string < 1000

Output:
Output Format:
If the final string is empty, print Empty String; otherwise, print the final non-reducible string.

Sample Input:
aaabccddd

Sample Output:
abd

Hint:
Sample 1 Explanation:
You can perform the following sequence of operations to get the final string:
aaabccddd -> abccddd -> abddd -> abd

*/

function runProgram(input) {
  // Write Code Here
  input = input.trim().split("\n");
  let str = input[0];
  print(str);
}

function print(str) {
  let top = -1;
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (arr.length == 0) {
      arr.push(str[i]);
      top++;
    } else if (arr.lenght != 0) {
      if (str[i] == arr[top]) {
        arr.pop();
        top--;
      } else {
        arr.push(str[i]);
        top++;
      }
    }
  }
  if (arr.length == 0) {
    console.log("Empty String");
  } else {
    let x = arr.join("");
    console.log(x);
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
