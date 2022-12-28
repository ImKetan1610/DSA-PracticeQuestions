/*

Description:
You are given an array, and an integer K
You have to reverse the array from0 to K, keeping the rest of the elements in the same order
You must not use any extra space or create a new array for the same
Ensure you are not using any extra array to achieve this, and not directly printing it

Input:
The first line of the input contains the value of N and K
The next line contains N space separated values denoting the elements of the array
 
Constraints:
1 <= N <= 100
1 <= arr[i] <= 100

Output:
Reverse the array from0 to K, and then print the array on a single line

Sample Input:
6 3
1 2 3 4 5 6

Sample Output:
4 3 2 1 5 6

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = input[0].split(" ").map(Number);
  let n = tc[0];
  let k = tc[1];
  let line = 1;
  let arr = input[line].trim().split(" ").map(Number);
  line++;

  // console.log(arr,n,k)
  ReverseArray(arr, k, n);
}

function ReverseArray(arr, k, n) {
  let bag = "";

  for (let i = k; i >= 0; i--) {
    bag += arr[i] + " ";
  }
  for (var j = k + 1; j < n; j++) {
    bag += arr[j] + " ";
  }
  console.log(bag);
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
