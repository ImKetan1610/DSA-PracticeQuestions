/*

Problem Statement:
Given a 2d array with 'U', 'D', 'L', 'R' representing up, down, left, right => 
count the number of steps you have taken before reaching an already visited cell or going outside the 2d array.

Note: The first step is always taken to cell located at (0,0).


Input:
The first line of the input contains T, the number of test cases.
The first line of each test case contains N, and M, the number of rows, and columns in the 2D Array.
The next lines of the test case, contains M characters each, denoting the values in the 2D array.

Constraints:
1 <= T <= 10
1 <= N,M <= 100


Output:
Print a single integer, denoting the number of steps, 
you take before stepping out of the 2D array, 
or visiting an already visited cell, on a new line.


Sample Input:
1
3 4
RRDR
LLUD
LLLL

Sample Output:
4

Hint:
In the first sample test case, the first jump as given in the problem statement, 
is taken at (0,0), and the next jump is taken at (0,1) as the value in the cell is R, 
followed by another jump  right at (0,2). At (0,2) the value in the cell is D, 
therefore, a jump down is made at the point (1,2) which has a value of 'U', 
so the jump is made back to an already visited cell, (0,2). 
Therefore, we stop at this point, making the total number of steps taken as 4, 
before visiting an already visited cell, or going out of the 2D array.

*/

function myFunc(n, m, mat) {
  let i = 0;
  let j = 0;
  let count = 0;
  while (count < n * m) {
    if (i < 0 || j < 0 || i >= n || j >= m) {
      return console.log(count);
    }
    if (mat[i][j] == "-1") {
      break;
    }
    if (mat[i][j] == "R") {
      mat[i][j] = -1;
      j++;
    } else if (mat[i][j] == "L") {
      mat[i][j] = -1;
      j--;
    } else if (mat[i][j] == "U") {
      mat[i][j] = -1;
      i--;
    } else if (mat[i][j] == "D") {
      mat[i][j] = -1;
      i++;
    }

    count++;
  }

  console.log(count);
}

function runProgram(input) {
  // Write Code Here
  input = input.trim().split("\n");
  let T = +input[0];
  let line = 1;
  for (let i = 0; i < T; i++) {
    let [n, m] = input[line++].trim().split(" ").map(Number);
    let arr = [];
    for (let j = 0; j < n; j++) {
      let temp = input[line++].trim().split("");
      arr.push(temp);
    }
    myFunc(n, m, arr);
    // console.log(n,m,arr)
  }
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
