/*

Problem Statement:
Patlu and Motu works in a building construction, 
    they have to put some number of bricks N from one place to another, and started doing their work.
They want to find who will put the last brick.
They to follow a simple rule:
- In the i'th round, Patlu puts i bricks whereas Motu puts ix2 bricks.
There are only N bricks, you need to help find the challenge result to find who put the last brick.

Input:
Input Format:
First line contains an integer N.

Constraints:
1 ≤ N ≤ 10000

Output:
Output Format:
Output "Patlu" (without the quotes) if Patlu puts the last bricks ,"Motu" (without the quotes) otherwise.

Sample Input:
13

Sample Output:
Motu

Hint:
Sample 1 Explanation
13 bricks are there :
Patlu Motu
1 2
2 4
3 1 ( Only 1 remains)

Hence, Motu puts the last one.

*/

function Thelastbricks(n) {
  let sum = 0;
  let motu = false;
  let patlu = false;
  for (let i = 1; i <= n; i++) {
    patlu = false;
    motu = false;
    sum += i;
    if (sum >= n) {
      patlu = true;
      break;
    }
    sum += i * 2;
    if (sum >= n) {
      motu = true;
      break;
    }
  }
  if (patlu) {
    console.log("Patlu");
  } else {
    console.log("Motu");
  }
}

function runProgram(input) {
  // write your code here
  input = input.split("\n");
  let n = Number(input[0]);

  Thelastbricks(n);
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
