/*

Description:
Given an array of n integers. Find its inversion count.
Inversion Count for an array indicates – how far (or close) the array is from being sorted.
If the array is already sorted then inversion count is 0. 
If the array is sorted in the reverse order that inversion count is the maximum.
Formally speaking, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j

Input:
Input Format:
First line consists of integer n.
Second line consists of n integers separated by spaces.

Constraints:
1 <= n <= 100000

Output:
Print count in a single line

Sample Input:
4
8 4 2 1

Sample Output:
6

Hint:
Sample 1 Explanation
Given array has six inversions
(8,4),(8,2),(8,1),(4,2),(4,1),(2,1)

*/

function CI(arr, l, m, r) {
  let left = [];
  for (let i = l; i < m + 1; i++) {
    left.push(arr[i]);
  }

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

function mS(arr, l, r) {
  let count = 0;
  if (l < r) {
    let m = Math.floor((l + r) / 2);

    count += mS(arr, l, m);

    count += mS(arr, m + 1, r);

    count += CI(arr, l, m, r);
  }
  return count;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  console.log(mS(arr, 0, n - 1));
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
