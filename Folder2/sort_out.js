/*

Problem statement:
Given an array A of non-negative integers of size **m**. 
Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.

Example:
A={4,5,3,7,1}
After sorting the new array becomes A={1,3,4,5,7}.
The required output should be "4 2 0 1 3"
NOTE: The indexing of the array starts with 0.
You can only write your own sorting algorithm must not use builtin functionality of sort()

Input:
Input Format:
The first line of input consists of the size of the array
The next line consists of the array of size m

Constraints:
1<=m<=10000
0<=A[i]<=1000

Output:
Output Format:
Output consists of a single line of integers


Sample Input:
5
4 5 3 7 1

Sample Output:
4 2 0 1 3

*/

//Enter code here
function sortOut(n, arr) {
  let arr1 = new Array(n);
  for (let i = 0; i < n; i++) {
    arr1[i] = i;
  }
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        temp = arr1[j];
        arr1[j] = arr1[j + 1];
        arr1[j + 1] = temp;
      }
    }
  }
  console.log(arr1.join(" "));
}

function runProgram(input) {
  // write code
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  sortOut(n, arr);
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
