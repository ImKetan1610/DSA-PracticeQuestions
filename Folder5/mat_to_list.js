/*

Description
You are given an adjaceny matrix representing a undirected graph.
An adjaceny matrix is defined as - If an Undirected Graph G consists of n vertices then the adjacency matrix of a graph is n x n matrix A = [a[i][j]] and defined by -
a[i][j] = 1 {if there is a path exists from Vi to Vj}
a[i][j] = 0 {Otherwise}
Your task is to print the adjacency list in the manner shown in the example.

Input
Input Format
The input contains multiple testcases. The first line contains an integer test - the number of testcases.
The following lines contain the description to the testcases.
The first line contains an integet n — the number of vertices in the graph G.
The next n lines follow - these n lines each contain n space separated integers - denoting the adjacency matrix.

Constraints
1 ≤ test ≤ 10
1 ≤ n ≤ 10^3

Output
Output Format
For each testcase print n lines. For the ith line, first output the number of nodes connected to the ith node followed by these nodes in sorted order.

Sample Input 1 
1
4
0 1 0 1
1 0 1 1
0 1 0 0
1 1 0 0

Sample Output 1
2 2 4
3 1 3 4
1 2
2 1 2

Hint
The node is connected to only 2 nodes - node 2 and node 4 and hence in the matrix a[1][2] and a[1][4] is 1 and rest all a[1][i] are zero for 1 <= i <= n.
Similarly for node 2, 3 and 4.

*/

function mainfun(arr, n) {
  let map = new Map();
  for (let i = 1; i <= n; i++) map.set(i, []);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        map.get(i + 1).push(j + 1);
      }
    }
  }
  for (let i = 1; i <= n; i++) {
    let x = map.get(i).join(" ");
    let y = map.get(i).length;
    console.log(y, x);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = [];
    for (let j = 0; j < n; j++) {
      let x = input[line++].trim().split(" ").map(Number);
      arr.push(x);
    }
    mainfun(arr, n);
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
