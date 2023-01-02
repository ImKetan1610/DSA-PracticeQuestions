/*

Description
Masai's network has n computers and m connections. Your task is to find out if Ansh can send a message to Sachin, and if it is possible, what is the minimum number of computers on such a route.
Ansh is sitting at computer 1 and Sachin is sitting at computer n

Input
Input Format
The first input line has two integers n and m: the number of computers and connections. The computers are numbered 1,2,…,n.
Then, there are m lines describing the connections. Each line has two integers a and b: there is a connection between those computers.

Constraints
2≤n≤105
1≤m≤2⋅105
1≤a,b≤n

Output
If it is possible to send a message, first print k: the minimum number of computers on a valid route. Else print -1.

Sample Input 1 
5 5
1 2
1 3
1 4
2 3
5 4

Sample Output 1
3

Hint
The message can through 1-> 4->5

*/

function route(arr, n, m) {
  let map = new Map();
  for (let i = 0; i < n; i++) {
    let temp = [];
    map.set(i + 1, temp);
  }

  for (let i = 0; i < m; i++) {
    let x = arr[i][0];
    let y = arr[i][1];
    map.get(x).push(y);
    map.get(y).push(x);
  }

  let q = map.get(1);
  let obj = { 1: 1 };
  let count = 0;
  let flag = true;
  while (q.length != 0 && flag) {
    let size = q.length;
    while (size-- != 0) {
      let x = q.shift();
      if (x == n) {
        flag = false;
        break;
      }
      if (obj[x] == undefined) {
        obj[x] = 1;
        let y = map.get(x);
        for (let i = 0; i < y.length; i++) {
          if (obj[y[i]] == undefined) q.push(y[i]);
        }
      }
    }
    count++;
    if (!flag) break;
  }
  console.log(count + 1);
}

function runProgram(input) {
  input = input.trim().split("\n");

  let line = 0;
  let num = input[line++].trim().split(" ").map(Number);
  let n = num[0];
  let m = num[1];
  let mat = [];
  for (let x = 0; x < m; x++) {
    mat.push(input[line++].trim().split(" ").map(Number));
  }
  //console.log(mat);
  route(mat, n, m);
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
