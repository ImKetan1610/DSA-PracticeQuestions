/*

Description:
Given an integer n, you need to find out its binary representation using recursion.
Here multiple test cases exist and the expected time complexity is - O(t*logn) 
    where is t is the number of test cases.

Input:
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. 
Then t test cases follow.
The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) — the number.

Output:
For each test case, print the answer: The binary representation of the integer.

Sample Input:
2
15
128

Sample Output:
1111
10000000

*/

function binary(n, string) {
  if (n == 0) {
    console.log(string.reverse().join(""));
    return;
  }

  let r = n % 2;
  string.push(r);
  n = Math.floor(n / 2);

  binary(n, string);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let index = 1;
  for (let i = 0; i < tc; i++) {
    let string = [];
    binary(input[index++], string);
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
