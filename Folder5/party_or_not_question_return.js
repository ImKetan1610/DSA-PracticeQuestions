/*

Description:
You have N friends whom you want to take to your birthday party. 
You know the amount you will have to spend on each of your friend. 
You have R amount of money with you. 
You will take any K out of N friends to party such that the sum of total expenses on those K friends is exactly 
    equal to R rupees. 
Else in any other condition you won't take anyone to party. 
You have to find if it is possible to take them on party or not.
For instance, suppose you have 5 friends on whom you will have to spend 3,5,2,9,8 rupees respectively 
    and you have 16 rupees, then yes it is possible to take them to party as 3+5+8 = 16. 
    So, exact expenditure is possible.

Input:
Input Format
First line contains 2 space separated integers that is N and R
Second line contains N space integers which are the expenses of each friend

Constraints:
N < 1000
R < 1000

Output:
Output Format:
Output "Party" if it is possible to take them to party.
Else print "No Party"

Sample Input:
6 9
3 34 4 12 5 2

Sample Output:
Party

*/

function chunnu(n, r, arr, index, sum, dp) {
  if (sum === r) {
    return true;
  }
  if (sum > r || n == index) {
    return false;
  }
  if (dp[sum][index] != 0) {
    return dp[sum][index];
  } else {
    dp[sum][index] =
      chunnu(n, r, arr, index + 1, sum + arr[index], dp) ||
      chunnu(n, r, arr, index + 1, sum, dp);
    return dp[sum][index];
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let a = input[0].trim().split(" ").map(Number);
  let n = a[0];
  let r = a[1];
  let arr = input[1].trim().split(" ").map(Number);
  let dp = new Array(r + 1);
  for (let i = 0; i < r + 1; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }
  let res = chunnu(n, r, arr, 0, 0, dp);

  if (res) {
    console.log("Party");
  } else {
    console.log("No Party");
  }
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
