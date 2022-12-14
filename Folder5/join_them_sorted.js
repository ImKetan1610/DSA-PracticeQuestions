/*

Description:
You are given two sorted arrays each of length N. 
Your task is to write a program that merges both the arrays 
    such that the final array formed after merging is sorted.
Note: You must not use sort() function in your entire code

Input:
Input Format :
First line contains N which is the number of integers present in both the arrays.
Second line contains N sorted integers which are elements of first array.
Third line contains N sorted integers which are elements of second array.

Constraints :
N < 1000

Output:
Output the array formed after merging elements such that it is sorted

Sample Input:
4
1 5 7 9
2 4 6 8

Sample Output:
1 2 4 5 6 7 8 9

*/

function joinThemSorted(n, arr1, arr2) {
  let ans = [];
  let f1 = 0,
    f2 = 0;
  while (f1 < n && f2 < n) {
    if (arr1[f1] <= arr2[f2]) {
      ans.push(arr1[f1]);
      f1++;
    } else {
      ans.push(arr2[f2]);
      f2++;
    }
    // console.log(ans, f1, f2);
  }
  while (f1 < n) {
    ans.push(arr1[f1++]);
  }
  while (f2 < n) {
    ans.push(arr2[f2++]);
  }
  console.log(ans.join(" "));
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let s = +input[0];
  let arr1 = input[1].trim().split(" ").map(Number);
  let arr2 = input[2].trim().split(" ").map(Number);
  joinThemSorted(s, arr1, arr2);
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
