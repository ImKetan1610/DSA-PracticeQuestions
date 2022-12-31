/*

Description:
As you already know, Betty and Archie are best friends and since Archie's birthday is in one week, 
    Betty wants to buy a present for him. 
But since Betty has no money, she went to the ATM to withdraw some amount. 
The ATM has N different type of coins and there is an unlimited amount of each type of coin in the ATM. 
Betty wants to minimize the  number of coins she withdraws 
    and also make sure that the sum of coins is exactly equal to the price of the present she want to buy.

Input:
Input Format:
The first line contains the number of types of coins N and the price of the present P
The second line contains N numbers denoting the value of each coin

Constraints:
1<=N<=100
1<=P<=10^6
1<=coin[i]<=10^6

Output:
Print the minimum number of coins that betty can withdraw from the ATM , 
    such that the sum of values of coins is equal to the price. If it is not possible, print -1.

Sample Input:
3 11
1 5 7

Sample Output:
3

Hint:
An optimal solution would be (1+5+5) which requires of 3 coins

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let x = input[0].trim().split(" ").map(Number);
  let n = x[0];
  let amount = x[1];
  let coins = input[1].trim().split(" ").map(Number);
  console.log(BettyBuysAPresentII(coins, amount));
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
    runProgramm(read);
    process.et(0);
  });
}

var BettyBuysAPresentII = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  let res = dp[dp.length - 1];
  return res == amount + 1 ? -1 : res;
};
