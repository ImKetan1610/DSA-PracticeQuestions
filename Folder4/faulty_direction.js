/*

Description:
Given a string of length n which consists of characters {L, R, U, D}.
Initially, it can be assumed that you are standing at origin (x=0 and y=0). 
Here, L means left (x-1), R means right (x+1), U means up (y+1) and D means Down (y-1).
You are given this string so that the directions can be followed accordingly to reach a destination. 
You came to know that there are some string that is faulty 
    and following them ends you up to your initial position that is the origin.
You don't want to start the trip if the string provided is faulty.
Find whether the string is faulty or not.
For ease of the problem, do consider you are always facing the north direction.

Input:
The first line of the input contains one integer t (1 ≤ t ≤ 100) — the number of test cases. 
Then t test cases follow.
The first line of each test case contains a single integer n (1 ≤ n ≤ 100) — the length of the string.
The second line of each test case contains a string s of length n.

Output:
For each test case, print the answer: "Yes" if it returns to its initial position or else "No" (without quotes).

Sample Input:
2
5
RLRUD
4
LRUD

Sample Output:
No
Yes

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let test = Number(input[0]);
  let line = 1;
  for (let i = 0; i < test; i++) {
    let n = Number(input[line++]);
    let str = input[line++].split("");
    let res = faultyDirection(str, n);
    console.log(res);
  }
}

function faultyDirection(str, n) {
  let Left = 0;
  let Right = 0;
  let Up = 0;
  let Down = 0;

  for (let i = 0; i < n; i++) {
    if (str[i] == "U") {
      Up++;
    }
    if (str[i] == "D") {
      Down++;
    }
    if (str[i] == "L") {
      Left++;
    }
    if (str[i] == "R") {
      Right++;
    }
  }
  if (Up == Down && Left == Right) {
    return "Yes";
  } else {
    return "No";
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
