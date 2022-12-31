/*

Description
You're given two wires consisting on n segments each. 
There are some connections that will be made from wire 1 to wire 2 with the help of connecting wires.
You're given an array a of n elements 
    where a[i] denotes a connection between points i and a[i] on the first wire and the second wire respectively.
For eg : In the above image 1 is connected to 4 therefore a[1] = 4.
You need to find out the maximum number of crossing possible for the given array if you place the wires optimally. 
The solution of the first image is shown in the second image.

Input:
Input Format:
The first line contains the number of testcases, T
For each testcase:
The first line contains the number of segments, N
The second line contains the values of a[i]

Constraints:
1<=T<=10
1<=N<=10^5
1<=a[i]<=N

Output:
For each test case, output a single integer 
    — the maximum number of crossings there can be if you place the wires optimally.

Sample Input:
3
7
4 1 4 6 7 7 5
2
2 1
1
1

Sample Output:
6
1
0

Hint:
The first test case is shown in the second picture in the statement.
In the second test case, the only wiring possible has the two wires cross, so the answer is 1.
In the third test case, the only wiring possible has one wire, so the answer is 0.

*/

function run(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let x = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[x++];
    let arr = input[x++].trim().split(" ").map(Number);
    solve(arr, n);
  }
}

function solve(arr, n) {
  let res = mergeSortAndCount(arr, 0, n - 1);
  let curr = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] != arr[i - 1]) {
      res += (curr * (curr - 1)) / 2;
      curr = 1;
    } else {
      curr++;
    }
  }
  res += (curr * (curr - 1)) / 2;
  console.log(res);
}

function mergeAndCount(arr, l, m, r) {
  // Left subarray
  let left = [];
  for (let i = l; i < m + 1; i++) {
    left.push(arr[i]);
  }

  // Right subarray
  let right = [];
  for (let i = m + 1; i < r + 1; i++) {
    right.push(arr[i]);
  }
  let i = 0,
    j = 0,
    k = l,
    swaps = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
      swaps += m + 1 - (l + i);
    }
  }
  while (i < left.length) {
    arr[k++] = left[i++];
  }
  while (j < right.length) {
    arr[k++] = right[j++];
  }
  return swaps;
}

// Merge sort function
function mergeSortAndCount(arr, l, r) {
  // Keeps track of the inversion count at a
  // particular node of the recursion tree
  let count = 0;
  if (l < r) {
    let m = Math.floor((l + r) / 2);

    // Total inversion count = left subarray count
    // + right subarray count + merge count

    // Left subarray count
    count += mergeSortAndCount(arr, l, m);

    // Right subarray count
    count += mergeSortAndCount(arr, m + 1, r);

    // Merge count
    count += mergeAndCount(arr, l, m, r);
  }
  return count;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  run(read);
});
