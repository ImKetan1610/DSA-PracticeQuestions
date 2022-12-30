/*

Description:
Given a list of n integers. 
Write a program for quick sort algorithm such that it reverses the list in descending order.  
You must not write any other sorting algorithm

Input:
First line contains n which is the number of elements present in the array
Second line contains n space-separated integers

Output:
Output the elements present in the array sorted in descending order

Sample Input:
5
2 3 1 4 5

Sample Output:
5 4 3 2 1

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  mergeSort(arr, 0, N - 1);
  console.log(arr.join(" "));
}

function mergeSort(arr, left, right) {
  if (left >= right) {
    return;
  }
  let m = left + parseInt((right - left) / 2);
  mergeSort(arr, left, m);
  mergeSort(arr, m + 1, right);
  merge(arr, left, m, right);
}

function merge(arr, left, m, right) {
  let n1 = m - left + 1;
  let n2 = right - m;

  let L = new Array(n1);
  let R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }
  for (let i = 0; i < n2; i++) {
    R[i] = arr[m + 1 + i];
  }

  let i = 0;
  let j = 0;
  let k = left;
  while (i < n1 && j < n2) {
    if (L[i] >= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
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
