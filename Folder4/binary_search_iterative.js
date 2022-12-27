/*

Description:
Given n distinct numbers, implement iterative binary search to check the presence of target number k.
In case k is present among those n numbers, print 1
Else print -1

Input:
Input Format :
First line of input contains n and k separated by a space
Next line contains n space separated integers

Constraints :
n<1000

Output:
In case k is present among those n numbers, print 1
Else print -1

Sample Input: 
5 0
2 -2 0 3 4

Sample Output:
1

*/

function binary_search(n, target, arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      console.log(1);
      return;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(-1);
}

function runProgram(read) {
  read = read.split("\n");
  let [n, k] = read[0].split(" ").map(Number);
  let arr = read[1].split(" ").map(Number);
  binary_search(n, k, arr);
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
