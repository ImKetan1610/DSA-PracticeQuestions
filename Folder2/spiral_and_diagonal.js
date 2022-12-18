/*

Problem Statement:
You are given an integer n. 
The next line is an array A which contains n*n elements. 
The spiral traversal of a square matrix of dimension (n x n) results in the given array.
Calculate the sum of all elements which are on the diagonals of the square matrix.
The matrix traversal happens in the manner shown in the image below

Input:
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. 
Then t test cases follow.
The first line of each test case contains a single integer n (1 ≤ n ≤ 100)
The second line contains n*n integers (1 ≤ Ai ≤ 1000) - The spiral traversal of a square matrix of dimension n x n.

Output:
For each test case, print the answer: The sum of elements present in the diagonals of the matrix.

Sample Input:
3
1
1
2
1 2 3 4
3
1 2 3 4 5 6 7 8 9

Sample Output:
1
10
25

Sample Input:
1
4
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

Sample Output:
68

*/

function runProgram(input) {
  // write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    //console.log(n,arr);
    spiraldia(n, arr);
  }
}

function spiraldia(n, arr) {
  let mat = new Array();
  ele = 0;
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(arr[ele++]);
    }
    mat.push(temp);
  }
  //console.log(mat);
  let t = 0,
    b = n - 1,
    l = 0,
    r = n - 1;
  let i = 0;
  while (i < arr.length) {
    for (let j = l; j <= r; j++) {
      mat[t][j] = arr[i++];
    }
    t++;
    for (let j = t; j <= b; j++) {
      mat[j][r] = arr[i++];
    }
    r--;
    for (let j = r; j >= l; j--) {
      mat[b][j] = arr[i++];
    }
    b--;
    for (let j = b; j >= t; j--) {
      mat[j][l] = arr[i++];
    }
    l++;
  }
  //console.log(mat);
  let res = 0;

  for (let i = 0, j = 0; i < n, j < n; i++, j++) {
    res += mat[i][j];
  }
  for (let i = 0, j = n - 1; i < n, j >= 0; i++, j--) {
    if (i == j) {
      continue;
    }
    res += mat[i][j];
  }

  console.log(res);
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
