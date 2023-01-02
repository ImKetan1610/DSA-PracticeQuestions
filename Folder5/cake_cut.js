/*

Description
Alice has a cake, and she is going to cut it. She will perform the following operation n−1 times: choose a piece of the cake (initially, the cake is all one piece) with weight w≥2 and cut it into two smaller pieces of weight⌊w2⌋ and ⌈w2⌉(⌊x⌋ and ⌈x⌉ denote floor and ceiling functions, respectively).
After cutting the cake in n pieces, she will line up these n pieces on a table in an arbitrary order. Let ai be the weight of the i-th piece in the line.
You are given the array a. Determine whether there exists an initial weight and sequence of operations which results in a.

Input
Input Format
The first line contains the number of testcases, T
For each testcase:
The first line contains the number of pieces, n
The second line contains the weight of each piece

Constraints
1<=T<=10
1<=N<=10^5
1<=weight[i]<=10^5

Output
For each test case, print a single line: printYESif the arrayacould have resulted from Alice's operations, otherwise printNO.

Sample Input 1 
3
1
327
2
869 541
3
3 1 2

Sample Output 1
YES
NO
YES

Hint
In the first test case, it's possible to get the array a by performing 0 operations on a cake with weight 327.
In the second test case, it's not possible to get the array a.
In the fourth test case, it's possible to get the array a by performing 2 operations on a cake with weight 6:
Cut it in half, so that the weights are [3,3].
Cut one of the two pieces with weight 3, so that the new weights are [1,2,3] .

*/

function runProgram(ip) {
  ip = ip.trim().split("\n");
  const tc = +ip[0];
  let l = 1;

  for (let i = 0; i < tc; i++) {
    const n = +ip[l++];
    const arr = ip[l++].trim().split(" ").map(Number);

    find(n, arr);
  }
}

function find(n, arr) {
  let sum = 0,
    obj = {};

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (!obj[arr[i]]) {
      obj[arr[i]] = 0;
    }
    obj[arr[i]]++;
  }

  let flag = true,
    count = 0;
  let ans = [sum];
  while (ans.length > 0 && count <= n) {
    // console.log(ans, obj);
    let ans2 = [];
    falg = false;
    for (let i = 0; i < ans.length; i++) {
      if (!ans[i]) {
        continue;
      }
      if (obj[ans[i]] > 0) {
        obj[ans[i]]--;
      } else {
        let num = ans[i];
        if (num >= 2) {
          flag = true;
          count++;
          let [a1, a2] = [Math.floor(num / 2), Math.ceil(num / 2)];
          ans2.push(a1);
          ans2.push(a2);
        }
      }
    }
    ans = [...ans2];
  }
  if (count === n - 1) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

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
