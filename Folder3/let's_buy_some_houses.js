/*

Problem Statement:
You just won a lottery and you want to spend some money. 
So, you want to buy some houses.
There is just one condition:
To buy two houses, you need to buy the road connecting those two houses. 
Now, you are given a list of roads, bought by you. You need to tell how many houses will you end up buying?


Input:
Input Format:
First line contains an integer T, denoting the number of test cases. 
The first line of each test case contains an integer E, denoting the number of roads. 
The next E lines contain two space separated integers X and Y, 
denoting that there is a road between house X and house Y.

Constraints:
1 <= T <= 100
1 <= E <= 1000
1 <= X, Y <= 10000

Output:
For each test case, you need to print the number of houses you will end up buying.

Sample Input:
1
3
1 2
2 3
1 3

Sample Output:
3

*/

function LetsBuySomeHouses(N, mat) {
  let obj = {};
  let i = 0,
    j = 0;
  let count = 0;
  while (i < N && j < 2) {
    if (obj[mat[i][j]] == undefined) {
      obj[mat[i][j]] = 1;
      count++;
    }
    if (j == 1) {
      j = -1;
      i++;
    }
    j++;
  }
  console.log(count);
}

function runProgram(input) {
  // Write Code Here

  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1; // line represents index here
  for (let i = 0; i < tc; i++) {
    let N = +input[line].trim();
    line++;
    let mat = [];
    for (j = 0; j < N; j++) {
      let arr = input[line].trim().split(" ").map(Number);
      line++;
      mat.push(arr);
    }
    LetsBuySomeHouses(N, mat);
  }
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
