/*

Description:
Given an array of non-negative integers, and a value 'sum', 
    determine if there is a subset of the given set (array) with sum equal to given sum.
If there is a subset whose sum is equal to the required sum then print "yes" else print "no" without quotes.

Input:
Input Format :
The first line of input contains an integer N - denoting size of the array.
The second line contains the N space separated integers.
The third line of input will contain S - the required Sum value.

Constraints :
1<=n<= 18
1<=A[i]<=10^9

Output:
Print "yes" or "no" without quotes.

Sample Input:
9
1 2 3 4 5 6 7 8 9
5

Sample Output:
yes

*/

function sumExistsOrNot(arr, K) {
  let flag = false;
  function getSubset(arr, newArr, curr) {
    if (curr == arr.length) {
      let sum = 0;
      for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i];
      }
      if (sum == K) {
        flag = true;
      }
      return;
    }
    getSubset(arr, newArr, curr + 1);
    getSubset(arr, newArr.concat(arr[curr]), curr + 1);
  }
  getSubset(arr, [], 0);
  if (flag == 1) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var size = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  var K = +input[2];

  sumExistsOrNot(arr, K);
}

if (process.env.USERNAME === "aneve") {
  runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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
