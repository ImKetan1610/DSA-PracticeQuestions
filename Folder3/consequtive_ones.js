/*

Problem Statement:
You are given a binary string consisting of characters '0' and '1' only. 
    In one move you can choose any contiguous subsegment of this string of length less than 
    or equal to k and convert all elements of this segment to 1.
Your task is to find the maximum length of contiguous '1' you can get after one move.

Input:
Input Format:
The first line contains the number of testcases t.
Next 2*t lines we have the description of the t testcases.
For each testcase first line contains n the length of the string and k. Next line contains binary string.

Constraints:
1 <= t <=1000
1 <= n <= 1000
1 <= k <= n

Output:
Output Format:
For each testcase output the maximum length of contiguos segment with all elements '1' after one move.

Sample Input:
2
12 2
011001001010
3 3
000

Sample Output:
5
3

Hint:
In the first testcase if we choose the subsegment from index 3 of length 2 and convert it to '1' 
    then we get he result, i.e. 5 continuos '1's.
In the second testcase if the entire string is converted to '1' , that gives the maximum

*/

function fun(n, k, s) {
  let max = 0;

  for (let i = 0; i <= n - k; i++) {
    let count = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (s[j] !== "1") break;
      count++;
    }

    for (let j = k + i; j < n; j++) {
      if (s[j] !== "1") break;
      count++;
    }

    if (count > max) max = count;
  }

  console.log(max + k);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let s = input[line].trim().split(" ").map(Number);
    let n = s[0],
      k = s[1];
    line++;
    let arr = input[line];
    line++;
    fun(n, k, arr);
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
