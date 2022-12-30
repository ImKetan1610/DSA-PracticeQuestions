/*

Description:
Let's define the XOR of an array as the bitwise XOR of all its elements or 0 if it is empty.
For example the XOR of [2,5,6] is 2XOR 5XOR 6XOR= 1
Given an array return the sum of all XOR's for every subset of the array
Note: Subsets with the same elements should be counted multiple times.
An array a is a subset of an array b 
    if a can be obtained from b by deleting some (possibly zero) elements of b.

Input:
Input Format:
The first line of the input contains an integer n, the size of the array
The second line contains n space-separated integers denoting the n elements of the array nums

Constraints:
1 <= n <= 12
1 <= nums[i] <= 20

Output:
Output Format:
Print the sum of all XOR's for every subset of the array

Sample Input:
2
1 3

Sample Output:
6

Sample Input:
3
5 1 6

Sample Output:
28

Hint:
Test case 1: The 4 subsets of [1,3] are:
The empty subset has an XOR total of 0.
[1] has an XOR total of 1.
[3] has an XOR total of 3.
[1,3] has an XOR total of 1 XOR 3 = 2.0 + 1 + 3 + 2 = 6

Test case 2: The 8 subsets of [5,1,6] are:
The empty subset has an XOR total of 0.
[5] has an XOR total of 5.
[1] has an XOR total of 1.
[6] has an XOR total of 6.
[5,1] has an XOR total of 5 XOR 1 = 4.
[5,6] has an XOR total of 5 XOR 6 = 3.
[1,6] has an XOR total of 1 XOR 6 = 7.
[5,1,6] has an XOR total of 5 XOR 1 XOR 6 = 2.0 + 5 + 1 + 6 + 4 + 3 + 7 + 2 = 28

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let len = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let result = AllXor(len, arr);

  console.log(result);
}

function AllXor(len, arr) {
  let ans = 0;
  for (let i = 0; i < len; i++) ans |= arr[i];
  let show = ans * Math.pow(2, len - 1);
  return show;
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
