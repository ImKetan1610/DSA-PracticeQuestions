/*

Description
Sagar visits the land of traffic jams. There are a total of N different parks numbered from 1 to N. Some pairs of parks are connected to each other by Bidirectional Highways connecting those parks.
Sagar hates to cross these highways because these mostly jam and require a lot of efforts. He is standing at Park #1 and wants to reach the Park #N.
Find the minimum number of highways that he shall have to cross, if he takes the optimal route.

Input
Input Format:
First line contains T. T testcases follow.
First line of each test case contains two space-separated integers N, M.
Each of the next M lines contains two space-separated integers X and Y , denoting that there is a highway between Park X and Park Y.

Constraints:
1 ≤ T ≤ 10
1 ≤ N ≤ 10000
1 ≤ M ≤ 100000
1 ≤ X, Y ≤ N

Output
Print the answer to each test case in a new line.

Sample Input 1 
2
3 2
1 2
2 3
4 4
1 2
2 3
3 4
4 2

Sample Output 1
2
2

*/

function runProgram(ip) {
  ip = ip.trim().split("\n");

  const tc = +ip[0];
  let l = 1;

  for (let t = 0; t < tc; t++) {
    const [n, m] = ip[l++].split(" ").map(Number);

    // console.log(n)

    let road = [];

    for (let i = 0; i < m; i++) {
      road.push(
        ip[l++]
          .split(" ")
          .map(Number)
          .sort((a, b) => a - b)
      );
    }

    road.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      }
      return a[0] - b[0];
    });

    // console.log(road)
    let obj = { 1: 0 };

    for (let i = 0; i < m; i++) {
      const [a, b] = road[i];

      if (obj[a] !== undefined) {
        if (obj[b] === undefined || obj[b] > obj[a] + 1) {
          obj[b] = obj[a] + 1;
        }
      }
      if (obj[b] !== undefined) {
        if (obj[a] === undefined || obj[a] > obj[b] + 1) {
          obj[a] = obj[b] + 1;
        }
      }
    }

    console.log(obj[n]);
  }
}

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
