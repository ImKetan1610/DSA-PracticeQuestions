/*

Description:
You are given an array, and an integer of size K
You have to reverse the array fromK to N-1, where N is the size of the array
You must not use any extra space or create a new array for the same
Ensure you are not using any extra array, and not directly printing it

Input:
The first line of the input contains the value of N and K
The next line contains N space separated values denoting the elements of the array

Constraints:
1 <= N <= 100
1 <= arr[i] <= 100

Output:
Reverse the array fromK to N-1, and print the updated array on a single line

Sample Input:
6 2
1 2 3 4 5 6

Sample Output:
1 2 6 5 4 3

*/

function ReverseArray(N, K, arr) {
  var left = K;
  var right = N - 1;
  while (left <= right) {
    temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
  console.log(arr.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  var [N, K] = input[0].trim().split(" ").map(Number);

  var arr = input[1].trim().split(" ").map(Number);
  ReverseArray(N, K, arr);
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
