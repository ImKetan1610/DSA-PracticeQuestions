/*

Problem Statement:
You are given a numberN, and an array such that the array contains all the numbers from 1 to N including N twice, 
    except for one, which is present only once
You have to find the number which is present only once, in the array

Input:
The first line of the input contains T, the number of test cases
The first line of each test case, contains N, the value as explained in the problem statement
The next line contains2*N - 1, the number of elements in the array

Constraints:
1 <= T <= 10
1 <= N <= 2 * 10^5
1 <= arr[i] <= N

Output:
For each test case, print the number which is present only once, on a new line

Sample Input:
1
5
1 2 1 3 4 4 5 2 3

Sample Output:
5

Hint:
In the sample test case, all the numbers except for 5 are present twice. Therefore, the output is 5

*/

const ones = (n, arr) => {
  let obj = {};
  for (let el of arr) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  }
  for (let key in obj) {
    if (obj[key] == 1) {
      console.log(key);
    }
  }
  // console.log(obj)
};

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0],
    j = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[j++];
    let arr = input[j++].trim().split(" ").map(Number);
    ones(n, arr);
  }
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
