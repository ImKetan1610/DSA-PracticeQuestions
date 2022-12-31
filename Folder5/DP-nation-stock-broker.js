/*

Description:
on day i, price of element is pi
If you were only permitted to complete at most one transaction 
    (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
Note that you cannot sell a stock before you buy one.

Example 1:
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

Input:
1<=T<=10
2<=N<=100000
1<=Ai<=1000*1000*1000

Output:
output a single integer, the profit attained

Sample Input:
2
6
7 1 5 3 6 4
4
4 3 2 1

Sample Output:
5
0

*/

function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let s = +input[line++];
    let num = input[line++].split(" ").map(Number);
    console.log(Stock(s, num));
  }
}

function Stock(s, num) {
  let maxdiff = num[1] - num[0];
  let min = num[0];
  for (let i = 0; i < s; i++) {
    if (num[i] - min > maxdiff) {
      maxdiff = num[i] - min;
    }
    if (num[i] < min) {
      min = num[i];
    }
  }
  if (maxdiff == -1) {
    maxdiff = 0;
  }
  return maxdiff;
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
