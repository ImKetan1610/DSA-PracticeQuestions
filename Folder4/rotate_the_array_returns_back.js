/*

Description:
You are given an array of n elements and an integer k, you need to rotate the array by k units.
Note:This problem was asked in Axtria

Input:
First-line contains t, which is the number of test cases
For each test cases, first-line has n & k - the number of elements in the array 
    and the number of times the array has to be rotated
The second line of each test case contains n numbers which represent the elements of the array

Constraints:
1<=T<=20
1<=N<=50000, 0<=K<=1000000000
1 <= Ai <= 1000000

Output:
out put N elements, elements of the array , rotated by K units

Sample Input:
3
2 1
1 2
2 2
1 2
3 1
1 2 3

Sample Output:
2 1
1 2
3 1 2

*/

function runProgram(input) {
  var input = input.split("\n");
  var t = +input[0];
  var line = 1;
  for (var i = 0; i < t; i++) {
    var size = input[line].trim().split(" ").map(Number);
    var N = size[0];
    var K = size[1];
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;
    solve(N, K, arr);
  }
}

function solve(N, K, arr) {
  var K = K % N;
  var i = 0;
  var j = N - K - 1;
  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }
  var i = N - K;
  var j = N - 1;
  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }
  var bag = "";
  for (var i = N - 1; i >= 0; i--) {
    bag += arr[i] + " ";
  }
  console.log(bag);
}

function swap(array, a, b) {
  temp = array[a];
  array[a] = array[b];
  array[b] = temp;
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
