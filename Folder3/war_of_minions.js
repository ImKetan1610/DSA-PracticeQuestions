/*

Problem Statement:
Minions are of 26 types, from 'a' to 'z'. 
If two Minions of same type finds themselves besides each other, they will kill each other.
You are given a string of Minions. You need to find the final surviving string of Minions, 
after all the killings. i.e Further No Minion will kill other Minion.
If no Minion survived a after all the fighting, print "-1".


Input:
Input Format:
First Line contains 'N', size of strings of Minions.
Second Line contains S, string of Minions.

Constraints:
1 <= N <= 10^6

Output:
Single line with stable Minion string or "-1"

Sample Input:
5
aabbc

Sample Output:
c

Sample Input:
12
abbabaadcbbc

Sample Output:
bd

Sample Input:
2
aa

Sample Output:
-1

Hint:
1st Test case :-
aabbc => bbc => c

2nd Test Case:-
abbabaadcbbc => aabaadcbbc => aabdcbbc => aabdcc =>bdcc=> bd

*/

function runProgram(input) {
  input = input.split("\n");
  let str = input[1];
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack[stack.length - 1] == str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  console.log(stack.length == 0 ? -1 : stack.join(""));
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
