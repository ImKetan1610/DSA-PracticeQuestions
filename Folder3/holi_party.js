/*

Problem Statement:
Jay is an extremely miser person. He hates spending money on things, be it for his own good or bad. 
But this time his friends have caught up with him, and are demanding a party on holi
He figured out that there is no way for him to save himself and his money now. 
So, he decided to treat as many friends as he can. 
But, he still thought that he could skip inviting those friends who don't have any dependency. 
That is to say that, let's say that he has N friends, and a friend Ai wouldn't come to the party if Aj is not invited. 
But, it's not necessary that the vice-versa is true.
Jay wants to invite the minimum number of friends to celebrate holi to save money.
Find the minimum number of friends he can invite while fulfilling their demands. 
He cannot celebrate without any friend, **so he HAS to take one friend with him.**

Input:
Input Format:
The first line will contain two integers, N and D, where N denotes the number of friends, 
while D denotes the number of dependency relations. T
The next D lines will contain two integers, a and b - which would represent that friend a wouldn't come to the party until and unless friend b is also invited.

Constraints:
1 <= N <= 1000
1 <= D <= 1000
1 <= a, b <= N
a is NOT equal to b.

Output:
Print the minimal number - the minimum number of friends Jay can invite while handling the demands and celebrating holi still.

Sample Input:
3 3
1 2
2 3
3 1

Sample Output:
3

*/

function func(map, N) {
  let stack = [];
  let count = N;
  for (let i = 1; i <= N; i++) {
    let vis = new Array(N + 1).fill(false);
    if (!vis[i]) {
      stack.push(i);
      let temp = 0;
      while (stack.length != 0) {
        let node = stack.pop();
        let list = map.get(node);
        for (let j = 0; j < list.length; j++) {
          if (!vis[list[j]]) {
            stack.push(list[j]);
          }
        }
        vis[node] = true;
        temp++;
      }
      count = Math.min(temp, count);
    }
  }
  console.log(count);
}

function start(N, M, arr) {
  let map = new Map();
  for (let i = 1; i <= N; i++) {
    map.set(i, []);
  }
  for (let i = 0; i < M; i++) {
    map.get(arr[i][0]).push(arr[i][1]);
  }
  func(map, N);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let first = input[0].trim().split(" ").map(Number);
  let N = first[0];
  let M = first[1];
  let arr = [];
  for (let i = 1; i <= M; i++) {
    arr.push(input[i].trim().split(" ").map(Number));
  }
  start(N, M, arr);
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
