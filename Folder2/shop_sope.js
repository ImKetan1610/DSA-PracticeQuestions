/*

Problem Statement:
Piyush goes to buy soap from a shop.The shop contains N soaps. 
The prices of soap are given in the form of an array A. 
The price of ith soap is A[i]. 
Now Piyush has q queries, in each query he wants to know the number of soaps that have price less than 
the given amount M.


Input:
Input Format :
First line contains integer N total number of soaps available in the shop.
Second line contains N space separated integers.
Third line contains Q number of queries.
Each of the next Q lines contain integer M.

Constraints:
1 ≤ N ≤ 100000
1 ≤ A[i] ≤ 1000000000
1 ≤ Q ≤ 100000
1 ≤ M ≤ 100000


Output:
For each query output number of soaps having price less than M for that query.

Sample Input:
5
1 4 10 5 6
4
2
3
5
11

Sample Output:
1
1
2
5

*/

function findTheQuery(N, arr, p) {
  let ans = -1;

  let i = 0;
  let j = N - 1;
  while (i <= j) {
    let mid = Math.floor(i + (j - i) / 2);

    if (arr[mid] < p) {
      ans = mid;
      i = mid + 1;
    } else if (arr[mid] >= p) {
      j = mid - 1;
    }
  }

  if (ans === -1) {
    console.log(0);
  } else {
    console.log(ans + 1);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let arr = input[1].split(" ").map(Number);
  arr.sort((a, b) => a - b);
  let Q = +input[2];
  let line = 3;
  for (let i = 0; i < Q; i++) {
    let p = +input[line];
    line++;
    findTheQuery(N, arr, p);
  }
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
