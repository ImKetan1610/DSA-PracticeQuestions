/*

Description
Given a directed graph G with N nodes and M edges. Let for any component C of graph G, node u (1<=u<=N), is said to be a part of C if:
any node v (1<=v<=N) of component C has a path to u, or
node u has a path toany node v (1<=v<=N) of component C.
Calculate the number of components in the graph G.

Input
First line: Single integer denoting the value of T - the number of test cases.
For each test case:
First line: Two single-space separated integers denoting the value of N and M.
M lines follow:
Each of the lines consists of two single space-separated distinct integers u and v, denoting an edge between node u and node v.

Constraints:
1 <= T <= 100
1 <= N,M <= 100000
1 <= u,v <= N

Output
For each test case, print a single integer denoting the total number of components.

Sample Input 1 
1
4 4
1 2
2 3
3 1
4 1

Sample Output 1
1

Hint
Given,
N = 4, M = 4.
As per the graph description, node 1, node 2, and node 3 form a cycle. Hence any node can be reached from any other node. So node 1, node 2, and node 3 all lie in the same component. Now since from node 4, you can reach any of the other three nodes, hence as per the given conditions, node 4 also lies in the same component.
Hence the answer is 1.

*/

function func(map, N) {
  let stack = [];
  let vis = new Array(N + 1).fill(false);
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (!vis[i]) {
      count++;
      stack.push(i);
      while (stack.length != 0) {
        let node = stack.pop();
        let list = map.get(node);
        for (let j = 0; j < list.length; j++) {
          if (!vis[list[j]]) {
            stack.push(list[j]);
          }
        }
        vis[node] = true;
      }
    }
  }
  console.log(count);
}

function components(N, M, arr) {
  let map = new Map();
  for (let i = 1; i <= N; i++) {
    map.set(i, []);
  }
  for (let i = 0; i < M; i++) {
    map.get(arr[i][0]).push(arr[i][1]);
    map.get(arr[i][1]).push(arr[i][0]);
  }
  func(map, N);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (i = 0; i < tc; i++) {
    let first = input[line++].trim().split(" ").map(Number);
    let N = first[0];
    let M = first[1];
    let arr = [];
    for (let j = 0; j < M; j++) {
      arr.push(input[line++].trim().split(" ").map(Number));
    }
    components(N, M, arr);
  }
}

if (process.env.USER === "") {
  runProgram("");
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
    runProgramm(read);
    process.et(0);
  });
}
