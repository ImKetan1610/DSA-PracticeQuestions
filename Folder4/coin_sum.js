/*

Description:
You have n coins with certain values. Your task is to find all distinct money sums you can create using these coins.

Input:
Input Format:
The first line contains the number of coins, N
The second line contains the values of all the coins

Constraints:
1<=N<=20
1<=coin value<=100

Output:
First print an integer K, the number of distinct coin sums. 
In the next line print all the distinct coin sums in increasing order

Sample Input:
3
3 5 2 

Sample Output:
6
2 3 5 7 8 10 

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let s = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  let newarray = [];
  coin_sum(newarray, 0, array);
  console.log(ans.length);
  console.log(ans.sort((a, b) => a - b).join(" "));
}

let ans = [];

function coin_sum(newarray, index, array) {
  if (newarray.length != 0) {
    let sum = 0;
    for (let i = 0; i < newarray.length; i++) {
      sum += newarray[i];
      if (!ans.includes(sum)) ans.push(sum);
    }
  }
  if (index == array.length) {
    return;
  }
  for (let i = index; i < array.length; i++) {
    newarray.push(array[i]);
    coin_sum(newarray, i + 1, array);
    newarray.pop();
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
