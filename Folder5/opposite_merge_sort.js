/*

Description:
Given a list of n integers. 
Write a program for merge sort algorithm such that it reverses the list in descending order.  
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

function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;
  var Left = new Array(n1);
  var Right = new Array(n2);
  for (let i = 0; i < n1; i++) Left[i] = arr[l + i];
  for (let j = 0; j < n2; j++) Right[j] = arr[m + 1 + j];
  var i = 0;
  var j = 0;
  var k = l;

  while (i < n1 && j < n2) {
    if (Left[i] >= Right[j]) {
      arr[k] = Left[i];
      i++;
    } else {
      arr[k] = Right[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = Left[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = Right[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l, r) {
  if (l >= r) return;
  var m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  mergeSort(arr, 0, n - 1);
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
    process.et(0);
  });
}
