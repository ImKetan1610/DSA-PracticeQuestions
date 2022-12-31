/*

Description:
Alice and Bob take turns playing a cool mathematical game. Alice moves first.
Initially, there is a numberNon the chalkboard.  On each player's turn, that player makes a move consisting of:
Choosing any x with 0 < x < N and N % x == 0.
Replacing the numberNon the chalkboard withN - x.
If player cannot make a move, they lose the game.
return true or false depending on whether alice wins or loses.

Input:
1<=T<=10
1<=N<=1000

Output:
output true or false depending on alice's win.

Sample Input:
2
3
2

Sample Output:
false
true

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    console.log(DpNationfunngame(n));
  }
}

function DpNationfunngame(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

if (process.env.USER === "Supriya Pathak") {
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
