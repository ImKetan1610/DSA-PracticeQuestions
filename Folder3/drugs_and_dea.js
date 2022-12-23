/*

Problem Statement:
DEA is against the entire drug plantation and operation in Mexico and they have the satellite images of the drug farms. 
They want to burn them but before that they want the exact size and number of farms of each size to start their operation.
Unfortunately, the DEA people are not very bright, so they have hired you to help them process the image.
You will be given image in the form of the binary matrix: '1' is the drug farm area and '0' is the normal region.
Given this binary matrix, your job is to count the number of farms in the region and their corresponding sizes. 
Two adjacent pixels in the image are considered to be in the same farm if they are in the same row or the same column.
For better understanding see sample input.


Input:
Input Format:
The input contains several test cases, each one corresponding to a different satellite image. 
The first line of each case contains two integers that indicate the number of rows (N) and columns (M) in the image. 
Then N lines follow with M integers each, containing the information of the image.

Constraints:
**Note:** The end of input is indicated by a test case with N = M = 0. This case should not be processed.
1 <= N, M <= 250

Output
For each image, output the number of farms in the region. 
Additionally, output the size of each farm in ascending order and the number of farms of that size.

Sample Input:
10 10
1 1 1 1 1 1 1 1 1 1
1 1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 1 1 1
1 1 0 0 1 0 0 1 1 1
1 0 1 0 0 1 1 0 0 0
0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0
1 1 1 1 1 1 1 1 1 1
0 0 0 0 0 0 0 0 0 0
1 1 1 1 1 1 1 1 1 1
0 0

Sample Output:
7
1 2
2 1
6 1
10 2
20 1

Sample Input:
5 5
1 1 1 1 1
0 0 1 1 1
1 0 0 0 0
0 1 0 0 1
1 1 1 1 1
2 2
1 1
1 0
2 2
0 1
1 0
0 0

Sample Output:
3
1 1
7 1
8 1
1
3 1
2
1 2

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let line = 0;
  let flag = true;
  while (flag) {
    let [n, m] = input[line++].split(" ").map(Number);
    let mat = [];
    for (let j = 0; j < n; j++) {
      let arr = input[line++].split(" ").map(Number);
      mat.push(arr);
    }
    fun(n, m, mat);

    if (input[line] == "0 0") {
      break;
    }
  }
}

function fun(n, m, mat) {
  let obj = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let a = check(mat, i, j);
      if (obj[a] === undefined) {
        obj[a] = 1;
      } else {
        obj[a] = obj[a] + 1;
      }
    }
  }
  if (obj[0]) {
    delete obj[0];
  }
  let ans = [];
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
    ans.push([key, obj[key]]);
  }
  console.log(sum);
  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i].join(" "));
  }

  function check(mat, i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= mat.length ||
      j >= mat[i].length ||
      mat[i][j] == 0
    ) {
      return 0;
    }
    mat[i][j] = 0;
    let b = 1;
    let ans =
      check(mat, i + 1, j) +
      check(mat, i - 1, j) +
      check(mat, i, j + 1) +
      check(mat, i, j - 1);
    return b + ans;
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
