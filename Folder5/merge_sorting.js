/*

Description:
You are given N numbers. Your task is to write MERGE SORT sorting algorithm (from scratch) to sort those N numbers.
USING ANY OTHER ALGORITHM OR IN BUILT FUNCTION WOULD LEAD TO DISQUALIFICATION FROM NEXT HACKERRANK CONTEST

Input:
Input Format:
First line of input contains N
Next line contains N space separated integers.

Constraints:
N < 1000000

Output:
Output the sorted form of provided numbers

Sample Input:
5
3 5 0 9 8

Sample Output:
0 3 5 8 9

*/

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

function mergeSort(arr, lo, hi) {
  if (lo == hi) return;

  let mid = Math.floor(lo + (hi - lo) / 2);
  mergeSort(arr, lo, mid);
  mergeSort(arr, mid + 1, hi);
  marge(arr, lo, mid, mid + 1, hi);
}

function marge(arr, lo1, hi1, lo2, hi2) {
  var ans = [];
  var i = lo1;
  var j = lo2;
  var k = lo1;

  while (i <= hi1 && j <= hi2) {
    if (arr[i] <= arr[j]) {
      ans[k++] = arr[i];
      i++;
    } else {
      ans[k++] = arr[j];
      j++;
    }
  }

  while (i <= hi1) {
    ans[k++] = arr[i++];
  }
  while (j <= hi2) {
    ans[k++] = arr[j++];
  }

  for (let t = lo1; t <= hi2; t++) {
    arr[t] = ans[t];
  }
}
