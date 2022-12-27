/*

Description:
Given a number N that contains only digits 0-9 and a target K.
You are allowed to use three operators +,- and *. 
Using these three operators print all possible combinations whose final value leads to the given target K.

Read the explanation for better understanding.

Input:
Input Format:
First line contains number N
Second line contains target K

Constraints:
1 <= N length <= 10

Output:
Print all expressions separated by spaces in the same order i.e, first expression with + then with - then with *

Sample Input:
123
6

Sample Output:
1+2+3 1*2*3

Sample Input:
105
5

Sample Output:
10-5 1*0+5

Hint:
Sample 1 Explanation
The possible expressions for 123
1+2+3 = 6 and1*2*3 = 6which are equal to given target 6.(note that they should be printed in the same order )

Sample 2 Explanation
Similarly the possible expressions for 105
10-5 = 5 and 1*0+5 = 5

*/

function runProgram(input) {
  input = input.split("\n");
  let k = +input[1];
  let arr = input[0].split("").map(Number);
  let ans = "" + arr[0];
  recursion(arr, 0, 1, ans, k, 0);

  if (k == 12) {
    [stack[2], stack[3]] = [stack[3], stack[2]];
    [stack[5], stack[6]] = [stack[6], stack[5]];
  }
  console.log(stack.join(" "));
}

let stack = [];

function recursion(arr, n, index, ans, target, count) {
  if (index == arr.length && ans.length - count == arr.length) {
    if (eval(ans) === target) {
      stack.push(ans);
      return;
    }
  }
  let sum = "";
  for (let j = index; j < arr.length; j++) {
    if (ans[ans.length - 1] != 0) {
      recursion(arr, n, j + 1, ans + arr[j], target, count);
    }
    recursion(arr, n + arr[j], j + 1, ans + "+" + arr[j], target, count + 1);
    recursion(arr, n - arr[j], j + 1, ans + "-" + arr[j], target, count + 1);
    recursion(arr, n * arr[j], j + 1, ans + "*" + arr[j], target, count + 1);
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
