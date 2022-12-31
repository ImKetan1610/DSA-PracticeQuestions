/*

Description:
In Masai, they have a very strange monetary system.
Each Masaian gold coin has an integer number written on it. 
A coin n can be exchanged in a bank into three coins: n/2, n/3 and n/4. 
But these numbers are all rounded down (the banks have to make a profit).
You can also sell Masaian coins for Indian Rupees. 
The exchange rate is 1:1. But you can not buy Masaian coins.
You have one gold coin. What is the maximum amount of Indian Rupees you can get for it?

Input:
Input Format:
The input will contain several test cases (not more than 10). 
Each test case is a single line with a number n. 
It is the number written on your coin.

Constraints:
0 <=n<= 1 000 000 000

Output:
For each test case output a single line, containing the maximum amount of Indian Rupees you can make.

Sample Input:
12
2

Sample Output:
13
2

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let l = 0;
  while (input[l] !== undefined) {
    let arr = +input[l++];
    console.log(Masai(arr));
  }
}

let res = {};

let Masai = (arr) => {
  if (arr <= 0) {
    return 0;
  }
  if (arr == 1) {
    return 1;
  }
  if (arr in res) {
    return res[arr];
  }
  let op =
    Masai(Math.floor(arr / 2)) +
    Masai(Math.floor(arr / 4)) +
    Masai(Math.floor(arr / 3));
  res[arr] = Math.max(arr, op);
  return res[arr];
};

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
  process.on("SIGNINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.et(0);
  });
}
