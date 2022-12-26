/*

Description:
Given a collection of numbers, return all possible permutations.
NOTE:
No two entries in the permutation sequence should be the same.
For the purpose of this problem, assume that all the numbers in the collection are unique.
USING BUILT-IN LIBRARY FUNCTION TO PERMUTE WILL LEAD TO DISQUALIFICATION

Input:
Input Format :
The first line of input contain an integer n - denoting the size of array
The next line contain n distinct integers, A[1],A[2]...A[N]

Constraints :
1<= n <=6

Output:
Print the permutations of numbers in new line separated by space, 
    also make sure the permutations are printed in sorted order that is "1 2 3" must come before "2 3 1". 
Print without quotes. See sample test case for better understanding.

Sample Input:
3
1 2 3

Sample Output:
1 2 3 
1 3 2 
2 1 3 
2 3 1 
3 1 2 
3 2 1

*/

let bag = [];

function check(index, n, arr) {
  if (index == arr.length) {
    bag.push(arr.join(""));
    return;
  }

  for (let i = index; i < n; i++) {
    swap(arr, i, index);
    check(index + 1, n, arr);
    swap(arr, i, index);
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let index = 0;

  check(index, n, arr);

  bag.sort((a, b) => a - b);
  for (let i = 0; i < bag.length; i++) {
    let x = bag[i].split("").join(" ");
    console.log(x);
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
