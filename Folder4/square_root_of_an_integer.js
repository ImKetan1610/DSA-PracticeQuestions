/*

Description:
You are given an integer N, find the square root of the given integer N. 
If the integer is not a perfect square, print the floor value of the given integer.
Note:- The floor value is the largest integer value lesser than a given number K. 
For example if the value of K = 3.679, the floor value of K is 3
Note:You are not allowed to use any inbuilt function.
Note: Try printing output only once, then individually for each test case.

Input:
The first line of the input containsT, the number of test cases.
The first and the only line of each test case contains,N, the value of the given integer

Constraints:
1 <=T<= 1000000
0 <=N<= 1000000000

Output:
For each test case, print the square root of the integer N given if it is a perfect square, 
    else print the floor value of it, on a new line.

Sample Input:
2
4
8

Sample Output:
2
2

Hint:
In the sample test cases, the value of T = 2
In the first test cases, the value of N = 4, therefore, the square root of 4 is2, which is the required output.
In the second test cases, the value of N = 8 therefore, the square root of 8 is 2.82842..., 
    therefore, the floor value of it is 2, which is the required output.

*/

function squareRoot(n) {
  let low = 0;
  let high = n;
  let ans;

  while (low <= high) {
    let mid = low + parseInt((high - low) / 2);
    if (mid * mid <= n) {
      ans = mid;
      low = mid + 1;
    } else if (mid * mid > n) high = mid - 1;
  }
  return ans;
}

function runProgram(input) {
  let newInput = input.split("\n");
  let t = Number(newInput[0]);
  let ans = [];
  for (let i = 1; i <= t; i++) {
    let n = Number(newInput[i]);
    ans.push(squareRoot(n));
  }
  console.log(ans.join("\n"));
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
