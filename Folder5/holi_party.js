/*

Description
Jay is an extremely miser person. He hates spending money on things, be it for his own good or bad. But this time his friends have caught up with him, and are demanding a party on holi
He figured out that there is no way for him to save himself and his money now. So, he decided to treat as many friends as he can. But, he still thought that he could skip inviting those friends who don't have any dependency. That is to say that, let's say that he has N friends, and a friend Ai wouldn't come to the party if Aj is not invited. But, it's not necessary that the vice-versa is true.
Jay wants to invite the minimum number of friends to celebrate holi to save money.
Find the minimum number of friends he can invite while fulfilling their demands. He cannot celebrate without any friend, **so he HAS to take one friend with him.**

Input
Input Format
The first line will contain two integers, N and D, where N denotes the number of friends, while D denotes the number of dependency relations. T
The next D lines will contain two integers, a and b - which would represent that friend a wouldn't come to the party until and unless friend b is also invited.

Constraints
1 <= N <= 1000
1 <= D <= 1000
1 <= a, b <= N
a is NOT equal to b.

Output
Print the minimal number - the minimum number of friends Jay can invite while handling the demands and celebrating holi still.

Sample Input 1 
3 3
1 2
2 3
3 1

Sample Output 1
3

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
  }
  // console.log(obj);
  //console.log(map);

  let min = Infinity;

  for (let i = 1; i <= n; i++) {
    let count = Infinity;
    let obj = {};
    if (obj[i] == undefined) {
      obj[i] = 1;

      let q = [...map.get(i)];
      if (q.length != 0) count = 1;
      while (q.length != 0) {
        let x = q.shift();
        // console.log(x,i,obj)
        if (obj[x] == undefined) {
          if (map.get(x).length != 0) count++;
          obj[x] = 1;
          let y = map.get(x);
          // console.log(x,y)
          for (let i = 0; i < y.length; i++) {
            if (obj[y[i]] == undefined) q.push(y[i]);
          }
        }
      }
    }
    //console.log(count,"hshds")
    if (min > count) min = count;
  }
  if (min == Infinity) min = 1;
  console.log(min);
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
