/*

Problem statement:
You are given two integers n and m and you have to find the floor value of the nth root of m.

Input:
Input Format:
First-line contains T, no of test cases.
First-line of each test case contains two integers n and m.

Constraints:
1 <= T <= 10
1 <= n <= 30
1 <= m <= 10^9

Output
For each test case print the floor value of nth root of m in a new line.

Sample Input:
3
2 9
6 4096
3 126

Sample Output:
3
4
5

Hint:
For the first test case, we have to find the square root of 9 which is 3.
For the second test case, we have to find the 6th root of 4096 and as 4^6 is equal to 4096, 
    therefore, the answer is 4.
For the third test case, the cube root of 126 is 5.... something whose floor value is 5.

*/

function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (var i = 0; i < tc; i++) {
    let [n, m] = input[line].split(" ").map(Number);
    line++;
    console.log(Root(n, m));
  }
}

function Root(n, m) {
  let left = 1;
  let right = m;
  let error = 0.001;
  while (left <= right) {
    let mid = ((left + right) / 2) | 0;
    if (Math.pow(mid, n) == m) {
      return mid;
    } else if (Math.pow(mid, n) < m) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}

if (process.env.USER === "") {
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
