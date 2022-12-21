/*

Problem Statement:
Given an array of N space-separated integers 
you have to sort the array in non-decreasing order of their sum of digits 
and if two numbers have same sum of digits then the smaller number comes first.

Input:
Input Format:
First-line contains t - number of test cases.
First-line of each test case contains n - where n is the size of the array
Second-line of each test case contains n space-separated integers.

Constraints:
1 <= t <= 10
1 <= n <= 10^4
1 <= a[i] <= 10^6

Output:
For each test case print the sorted array in a new line.

Sample Input:
2
5
1 2 10 4 11
2
7 24

Sample Output:
1 10 2 11 4
24 7

Hint:
For the first test case,
sum of digits of numbers
1 = 1
2 = 2
10 = 1+0 = 1
4 = 4
11 = 1+1 = 2
sorting numbers we get 1, 1, 2, 2, 4 therefore the required sorted array is 1, 10, 2, 11, 4.

*/

function sort(n, arr) {
  let digitSum_arr = [];
  // Step1:- find the sum of every element in the array;
  for (let i of arr) {
    let sum = digitSum(i);
    digitSum_arr.push(sum);
  }
  // Step2:- run a loop till n;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Step3:- if sum>sum2 then sort || both sum are equal then smaller will come first
      if (digitSum_arr[j] > digitSum_arr[j + 1]) {
        swap(arr, digitSum_arr, j, j + 1);
      } else if (digitSum_arr[j] == digitSum_arr[j + 1]) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, digitSum_arr, j, j + 1);
        }
      }
    }
  }
  console.log(...arr);
}

function digitSum(number) {
  number = number.toString();
  let sum = 0;
  for (let i of number) sum += +i;
  return sum;
}

function swap(arr, digitSum_arr, j, nextj) {
  let temp1 = arr[j];
  arr[j] = arr[nextj];
  arr[nextj] = temp1;
  let temp2 = digitSum_arr[j];
  digitSum_arr[j] = digitSum_arr[nextj];
  digitSum_arr[nextj] = temp2;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0],
    line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    sort(n, arr);
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
