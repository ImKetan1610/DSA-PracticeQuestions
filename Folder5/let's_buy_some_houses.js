/*

Description
You just won a lottery and you want to spend some money. So, you want to buy some houses.
There is just one condition:
To buy two houses, you need to buy the road connecting those two houses. Now, you are given a list of roads, bought by you. You need to tell how many houses will you end up buying?

Input
Input Format
First line contains an integer T, denoting the number of test cases. The first line of each test case contains an integer E, denoting the number of roads. The next E lines contain two space separated integers X and Y, denoting that there is a road between house X and house Y.

Constraints
1 <= T <= 100
1 <= E <= 1000
1 <= X, Y <= 10000

Output
For each test case, you need to print the number of houses you will end up buying.

Sample Input 1 
1
3
1 2
2 3
1 3

Sample Output 1
3

*/

function houses(mat, n) {
  let obj = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      let char = mat[i][j];
      if (obj[char] == undefined) {
        obj[char] = 1;
      } else {
        obj[char]++;
      }
    }
  }

  console.log(Object.keys(obj).length);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let n = +input[line++];
    let mat = [];
    for (let i = 0; i < n; i++) {
      let arr = input[line++].trim().split(" ").map(Number);
      mat.push(arr);
    }
    houses(mat, n);
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
