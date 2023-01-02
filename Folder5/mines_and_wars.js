/*

Description
US Army is planning an attack on MARSLAND, but terrorists in MARSLAND are very intelligent and they have made underground tunnels to be safe.So US Army have decided to plant bombs and then detonate them at once for maximum damage and surprise attack.
They spread the bombs in such a way that a bomb can be in range of another bomb i.e say bomb B1 is in range of bomb B2 , when bomb B2 explodes it will trigger bomb B1 and it also get explode but vice-versa might not be true because the bombs are of different of range.
You are a computer engineer in their team so they ask you to find the most appropriate bomb which they can trigger to make maximum impact and then give the value of maximum impact.
Note: Impact is basically number of bombs that explodes.

Input
First line contains two integer N and M denoting number of bombs and number of relation between the bombs
Next M lines contain two integer A and B denoting bomb B is in range of bomb A.

Constraints
1 ≤ n ≤ 10000
1 ≤ m ≤ 10000
1 ≤ A ≤ N
1 ≤ B ≤ N

Output
Output Format
Output the maximum impact that can be made.A single line containing MAXIMUM IMPACT.

Sample Input 1 
4 3
1 2
2 4
1 3

Sample Output 1
4

*/

function func(map, N) {
  let stack = [];
  let count = 0;
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
      count = Math.max(temp, count);
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
    //  map.get(arr[i][1]).push(arr[i][0])
  }
  func(map, N);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let line = 0;
  let first = input[line++].trim().split(" ").map(Number);
  let N = first[0];
  let M = first[1];
  let arr = [];
  for (let j = 0; j < M; j++) {
    arr.push(input[line++].trim().split(" ").map(Number));
  }
  components(N, M, arr);
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
