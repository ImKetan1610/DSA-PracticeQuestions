/*

Description:
You are a thief carrying a single bag with limited capacity S. 
The museum you stole had N artifact that you could steal. 
Unfortunately you might not be able to steal all the artifact because of your limited bag capacity.
You have to cherry pick the artifact in order to maximize the total value (<= 2000000) of the artifacts you stole.

Input:
Input Format:
On the first line you are given T as the test cases available (1 <= T <= 20).
The next T testcases will started with two integer S and N. 
N lines follow with two integers on each line describing each artifact available at the museum. 
The first number is the weight of the artifact and the next is the value of the artifact.

Constraints:
1 <= S <= 2000
1 <= N <= 2000

Output:
Output Format:
You should output a single integer on one line: the total maximum value from the best choice of artifacts you stole.


Sample Input:
1
4 5
1 8
2 4
3 0
2 5
2 3

Sample Output:
13

Hint:
The artifact with value 8 and 5 should be picked, summing up the value to the maximum of 13.

*/

function againOptimization(s, wtArr, valArr, n) {
  var dp = new Array(s + 1).fill(0);

  for (i = 1; i < n + 1; i++) {
    for (j = s; j >= 0; j--) {
      if (wtArr[i - 1] <= j)
        dp[j] = Math.max(dp[j], dp[j - wtArr[i - 1]] + valArr[i - 1]);
    }
  }
  return dp[s];
}

function runProgram(input) {
  input = input.trim().split("\n");
  let T = +input[0].trim();
  let line = 1;

  for (let i = 0; i < T; i++) {
    let [s, n] = input[line].trim().split(" ").map(Number);
    line++;
    let wtArr = [];
    let valArr = [];
    for (let j = 0; j < n; j++) {
      let [weight, value] = input[line].trim().split(" ").map(Number);
      wtArr.push(weight);
      valArr.push(value);
      line++;
    }

    let ans = againOptimization(s, wtArr, valArr, n);
    console.log(ans);
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
