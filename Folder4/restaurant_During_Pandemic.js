/*

Description:
You have a restaurant at a beach side which has N dining tables. 
Each dining table has only one chair so each table can accommodate only one person. 
These dining tables are along a straight line parallel to the beach at positions x1,...,xN.
C customers are currently queued up outside the restaurant 
    since you have reopened the restaurant after a long time due to the pandemic. 
You need to assign the dining tables to the customers 
    such that the minimum distance between any two customers is 
    as large as possible in order to take care of the precautions considering the current pandemic situation. 
    (Consider all C customers dine at the  same time)
Find the largest minimum distance possible.

Input:
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. 
Then t test cases follow.
The first line of each test case contains 2 integers N (2 ≤ N ≤ 100000) and c (2 ≤ C ≤ N).
The second line of each test case contains n integers (1 ≤ Xi ≤ 1000000000) - The elements of the array W.

Output:
For each test case, print the answer: The largest minimum distance.

Sample Input:
2
5 2    
2 4 1 6 8
5 3
3 1 3 3 3

Sample Output:
7
0

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let size = input[line++].trim().split(" ").map(Number);
    let n = size[0];
    let k = size[1];
    let arr = input[line++].trim().split(" ").map(Number);
    find(n, k, arr);
  }
}

function find(n, k, arr) {
  arr.sort((a, b) => a - b);
  let low = 1;
  let ans = 0;
  let high = arr[n - 1] - arr[0];
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (check(mid, n, k, arr)) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  console.log(ans);
}

function check(mid, n, k, arr) {
  let c1 = arr[0];
  let count = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] - c1 >= mid) {
      count++;
      c1 = arr[i];
    }
    if (count === k) {
      return true;
    }
  }
  return false;
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
