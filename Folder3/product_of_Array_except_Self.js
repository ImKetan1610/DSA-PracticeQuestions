/*

Problem Statement:
Given an integer array nums, 
    return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
You must write an algorithm that runs in O(n) time and without using the division operation.
Can you solve the problem in O(1) extra space complexity? 
    (The output array does not count as extra space for space complexity analysis.)

Input:
Input Format:
The input consists of multiple testcases.
The first line of input contains an integer t - the number of testcases.
The following 2*t lines contain the description of the t testcases.
The first line of each testcase contains an integer n - the size of the array.
The second line of each testcase contains n space-separated integersnums[1],nums[1],...nums[i]..,nums[n]

Constraints:
1 <= t <= 10^3
2 <= nums.length <= 10^5
-30 <= nums[i] <= 30

Output:
Output Format:
For each testcase output the n integers, where n is the size of the array of that testcase, 
    where the ith (1<=i<=n) integer is the product of the array except for the ith element.

Sample Input:
2
4
1 2 3 4
5
-1 1 0 3 -3

Sample Output:
24 12 8 6
0 0 9 0 0

Hint:
First testcase
arr[1] = nums[2]*nums[3]*nums[4] = 24
arr[2] = nums[1]*nums[3]*nums[4] = 12
arr[3] = nums[1]*nums[2]*nums[4] = 8
arr[4] = nums[1]*nums[2]*nums[3] = 6

*/

function runProgram(input) {
  input = input.trim().split("\n");
  var N = +input[0];
  var line = 1;
  for (var i = 0; i < N; i++) {
    var len = +input[line];
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;
    console.log(check(len, arr).join(" "));
  }
}

function check(len, arr) {
  // console.log(len, arr);
  const result = [];
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] = product;
    product *= arr[i];
  }
  product = 1;
  for (let j = arr.length - 1; j >= 0; j--) {
    result[j] *= product;
    product *= arr[j];
  }
  return result;
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
