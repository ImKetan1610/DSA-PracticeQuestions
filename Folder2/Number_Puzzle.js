/*

Problem Statement:
You are given an array of positive integers. 
You can append all the integers present in the array in any order to form one single integer. 
Your task is to make the final integer as large as possible.

Input
The first line of input contains a single integer T denoting the number of test cases.
The first if each test case contains a single positive integer N denoting the size of the array.
The second line of each test case contains N space-separated integers denoting the elements of the array.

Constraints:
1 <= T <= 10
1 <= N <= 10^4
1<= A[i] <= 10^9

Output:
The single line of output should contain the largest possible integer obtained by appending all the elements of the array.


Sample Input:
1
4
1 2 3 4

Sample Output:
4321

Sample Input:
1
2
80 8

Sample Output:
880

Hint:
Explanation for Sample 1

We are given 4 elements as [1, 2, 3, 4]. 
To make the largest possible integer from the elements of the array in this case, 
we need to arrange the elements in the lexicographical greater order. 
Hence the final integer will be 4321.

*/

//Enter code here
function runProgram(input) {
  // Write Code Here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();

    let arr = input[line++].trim().split(" ").map(Number);

    NumberPuzzel(arr, n);
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

function NumberPuzzel(arr, n) {
  arr.sort(function (a, b) {
    let a1 = a.toString();
    let b1 = b.toString();
    let ab = a1 + b1;
    let ba = b1 + a1;
    return ba - ab;
  });

  let max = -Infinity;
  for (let i = 0; i <= arr.length - 1; i++) {
    max = Math.max(arr[i], max);
  }

  if (max == 0) {
    console.log(0);
  } else {
    console.log(arr.join(""));
  }
}
