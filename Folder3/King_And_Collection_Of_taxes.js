/*

Problem Statement:
The King of Somerville, is a noble king, and is considerate about his citizens. 
    After the recent survey, he found out that the amount of tax paying citizens in his kingdom is 2N. 
    So, he decides to impose a new rule on his kingdom for the collection of taxes. 
    He decides that all the people will be divided into groups of 2 each, 
    and the tax collected from each group will be equal to the maximum of the tax amount of the two members. 
    To take care of his poor citizens, he decides a strategy. 
    At every iteration, the citizen which has the minimum tax amount, 
    and is not part of any other group is paired with the citizen, 
    which has the maximum tax amount, and is not part of any other group.
You are given an array of size 2N, and the elements of the array denote the tax amount of the citizens. 
    Find out the tax collected if the citizens are divided into groups using the above strategy.

Input:
The first line contains N, the total number of groups that can be formed, 
    if each group contains 2 members. 
    The next line contains 2N space separated integers indicating the tax amount that the citizens have to pay.

Constraints:
1 <= N <= 10^5
1 <= A[i] <= 100

Output:
Print single integer, 
    denoting the total tax amount collected if the division happens using the strategy discussed in the problem statement.


Sample Input:
2
1 3 1 2

Sample Output:
5

Hint:
Using the above strategy, the citizen at index 0 is paired with citizen at index 1, 
    and the citizen at index 2 is paired with citizen at index 3, giving the total tax collected equals to 5.

*/

function code(n, arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  // console.log(arr)
  let s = 0;
  for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
    s += arr[i];
  }
  console.log(s);
}

function runProgram(read) {
  read = read.trim().split("\n");
  let n = +read[0];
  let arr = read[1].trim().split(" ").map(Number);
  code(n, arr);
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
