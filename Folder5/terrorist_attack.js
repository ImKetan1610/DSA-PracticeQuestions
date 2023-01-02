/*

Description
Our country is given in form of matrix of N*M, which are N*M different cities.RAW has detected that there are terrorist, in our country.
According to intelligence report, Terrorist are somewhere in these grid and are constantly moving, but Terrorist at a city (i,j) can only go to a city located in a specific direction(N S W E). If a city has military, and terrorist comes to/is at that city then they will get caught.
Direction are North (N), South (S), West(W), East(E).
Due to lack of funding to military in Budget 2021, Military want to minimize the cost.
You need to find minimum number of cities in which military should be deployed such that terrorist are caught.

Input
Input Format
First line contains T, no of test cases.
First line of each test case contains N and M, size of grid which represents our country.
Next lines contains grids which has direction (N, W, E, S) for each city.

Constraints
1 <= N,M <= 1000

Output
Output minimum number of cities in which military should be deployed.

Sample Input 1 
2
4 1
S
W
W
W
5 2
SW
EE
EN
SW
NN

Sample Output 1
3
2

Hint
In second test case, if military is deployed at (1,1) and (3,0), terrorist would be caught.

*/

function terrorist(n, m, mat) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      var prev = [i, j];
      var mak = [-1, -1];
      move(i, j);
      if (mak[0] != -1) {
        mat[mak[0]][mak[1]] = "*";
      }
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] == "*") count++;
    }
  }
  console.log(count);

  function move(row, col) {
    // getting out of mat
    if (!mat[row] || !mat[row][col]) {
      return 1;
    }

    // position already marked or loop is present
    if (mat[row][col] == "*") {
      mak[0] = row;
      mak[1] = col;
      return;
    }

    prev[0] = row;
    prev[1] = col;
    let val = mat[row][col];
    let cas;
    mat[row][col] = "*";

    if (val == "S") cas = move(row + 1, col);
    else if (val == "W") cas = move(row, col - 1);
    else if (val == "E") cas = move(row, col + 1);
    else if (val == "N") cas = move(row - 1, col);

    mat[row][col] = val;
    if (cas == 1) mat[prev[0]][prev[1]] = "*";
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line].trim().split(" ")[0];
    let m = +input[line].trim().split(" ")[1];
    line++;
    let mat = [];
    for (let j = 0; j < n; j++) {
      mat.push(input[line].trim().split(""));
      line++;
    }
    terrorist(n, m, mat);
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
