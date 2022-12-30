/*

Description:
You are given an array of N integers. Write QUICK SORT ALGORITHM to sort the numbers in ascending order
DO NOT USE ANY BUILTIN FUNCTION TO SORT
ALSO, YOU MUST NOT USE ANY OTHER ALGORITHM

Input:
Input Format:
First line contains N
Second line contains N space separated integers

Constraints:
N < 1000

Output:
Output Format:
Print the sorted numbers separated by space

Sample Input:
5
3 5 0 9 8

Sample Output:
0 3 5 8 9

Hint:
Sample 1 Explanation
Expected test case ;)

*/

function quickSort(l, h, arr) {
  if (l >= h) {
    return;
  }
  let pivot = part(l, h, arr);
  quickSort(l, pivot - 1, arr);
  quickSort(pivot + 1, h, arr);
}

function part(l, h, arr) {
  let pivot = arr[h],
    i = l;
  for (let x = l; x < h; x++) {
    if (arr[x] < pivot) {
      swap(arr, x, i);
      i++;
    }
  }
  swap(arr, i, h);
  return i;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let s = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  quickSort(0, s - 1, arr);
  console.log(arr.join(" "));
}

if (process.env.USER === "") {
  runProgram("");
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
