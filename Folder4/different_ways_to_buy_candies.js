/*

Description:
Betty loves candies, so she went to the store to buy some. 
She has some coins and she wants to spend all of them. 
The store has N distinct candies each having some cost and there are infinite amount of each candy in the store. 
Betty can choose the same candy any number of times as long as she have coins greater than 
    or equal to the cost of that candy. 
Find and display the unique combinations 
    in which she can buy candies such that the sum of cost of all the candies is equal to number of coins she has.
Two combinations are unique if the frequency of at least one of the chosen candies is different.
The input array is sorted in ascending order.

Input:
Input Format:
The first line contains the number of distinct candies N and the amount of coins C that Betty has.
The second line contains the cost of each candy.

Constraints:
1<= N <= 30
1<= C <= 500
1<= cost[i] <= 200

Output:
Display all the distinct ways in which Betty can buy the candies 
    such that the sum of cost of all candies she buys is equal to the number of coins in lexicographically 
    increasing order. If no combinations are possible print -1.

Sample Input:
4 7
2 3 6 7

Sample Output:
2 2 3
7

Sample Input:
3 8
2 3 5

Sample Output:
2 2 2 2
2 3 3
3 5

Sample Input:
1 1
2

Sample Output:
-1

Hint:
In the first test case, Betty can choose the candies in two ways : (2 + 2 + 3) and (7).
In the second test case, Betty can choose the candies in three ways : (2 + 2 + 2 + 2) , (2 + 3 + 3) and (3+5).
In the third test case, no combination of candies is possible.

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let ans = [];
  let index = 0;
  total = k;
  output(n, k, arr, ans, index);
  if (result.length === 0) {
    console.log(-1);
  } else {
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
  }
}

let result = [];
let total;

function output(n, k, arr, ans, index) {
  if (ans.length !== 0) {
    if (ans.reduce((a, b) => a + b) == total) {
      result.push(ans.join(" "));
    }
  }
  if (k <= 0) {
    return;
  }
  for (let i = index; i < n; i++) {
    ans.push(arr[i]);
    output(n, k - arr[i], arr, ans, i);
    ans.pop();
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
