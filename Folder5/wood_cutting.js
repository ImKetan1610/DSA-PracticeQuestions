/*

Description:
Once upon a time, there is a woodcutter who used to cut the rods from the tree and sell the woods in the market.
The woodcutter cuts a log of length N and reached to the market 
    where he saw a list of prices of the wood of length 1 to N. 
Now instead of selling the whole log of length N he can further cut the log into small pieces 
    and then sell them in the market to maximize his profit.
But woodcutter is tired due to cutting the whole log and carry it to the marked so he needs some rest now. 
While he is resting you need to calculate the maximum possible profit that he can make.

Note:
You can’t cut the log into parts having non-integer length.

Input:
Input Format:
The only line of input contains single positive integers N denoting the length of the log.
The second line of input contains N space-separated integers A[i] 
    denoting the price of the wood of length i (1 based indexing).

Constraints:
1 <= N <= 2000
1 <= A[i] <= 10^5

Output:
The single line of output should contain the maximum possible profit that woodcutter can make.

Sample Input:
4
3 1 5 8

Sample Output:
12

Sample Input:
2
1 5

Sample Output:
5

Hint:
Explanation for Sample 1
If you sell the wood of length 4 then you can get profit = 8. 
Instead of this, you can cut the wood into 4 pieces of length 1 hence you make a profit of 3 x 4 = 12.

*/

function call(n, arr) {
  // console.log(n,arr);
  let dp = Array(n)
    .fill()
    .map(() => Array(n + 1).fill(-1));

  console.log(cutting(n, arr, n - 1, dp));
}
function cutting(n, arr, idx, dp) {
  if (idx == 0) {
    return n * arr[0];
  }
  if (dp[idx][n] != -1) return dp[idx][n];
  let reject = 0 + cutting(n, arr, idx - 1, dp);
  let woodLength = idx + 1;

  let accept = -Infinity;
  if (woodLength <= n) {
    accept = arr[idx] + cutting(n - woodLength, arr, idx, dp);
  }

  return (dp[idx][n] = Math.max(accept, reject));
}

function rp(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  var line = 1;

  var arr = input[line++].trim().split(" ").map(Number);
  call(n, arr);
}

if (process.env.USER === "") {
  rp(" ");
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
    rp(read);
  });

  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    rp(read);
    process.et(0);
  });
}
