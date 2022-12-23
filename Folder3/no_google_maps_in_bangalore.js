/*

Problem Statement:
There are N different locations in Bangalore represented by an integer and M roads connecting some of these N locations. 
Some of these cities have multiple roads connecting them.
You are given information about M roads which connects two locations (say A and B).
Assume there is no google map in Bangalore, 
you have to answer Q queries about existence of DIRECT ROAD between two localitites.
For each query , you shall be given 2 integers X and Y. 
You just need to find if there exists a DIRECT ROAD between X and Y. 
If yes, print "YES" (without quotes) else , print "NO"(without quotes).


Input:
Input Format :
The first line consist of 2 integers N and M denoting the number of locations and roads respectively.
Each of the next M lines consist of 2 integers A and B denoting a road between node A and B.
The next line contains a single integer Q denoting the number of queries. 
The next Line contains 2 integers X and Y denoting the details of the query.

Constraints :
N <= 1000
M <= 1000
Q <= 1000

Output:
Print Q lines, the answer to each query on a new line.

Sample Input:
5 6
1 2
1 3
2 3
3 4
3 5
4 5
3
2 4
1 3
1 5

Sample Output:
NO
YES
NO

*/

function LetsBuySomeHouses(N, M, mat1, Q, mat2) {
  let arr = [];
  for (let i = 0; i < M; i++) {
    arr.push(mat1[i][0] + "-" + mat1[i][1]);
  }

  for (let j = 0; j < Q; j++) {
    let flag = "NO";
    for (let i = 0; i < N; i++) {
      if (
        mat2[j][0] + "-" + mat2[j][1] == arr[i] ||
        mat2[j][1] + "-" + mat2[j][0] == arr[i]
      )
        flag = "YES";
    }
    console.log(flag);
  }
}

function runProgram(input) {
  // Write Code Here

  input = input.trim().split("\n");
  let [N, M] = input[0].trim().split(" ").map(Number);

  let line = 1;

  let mat1 = [];
  let mat2 = [];
  for (j = 0; j < M; j++) {
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    mat1.push(arr);
  }
  let Q = +input[line];
  line++;
  for (j = 0; j < Q; j++) {
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    mat2.push(arr);
  }
  LetsBuySomeHouses(N, M, mat1, Q, mat2);
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
