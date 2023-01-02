/*

Description
You are standing in front of a long and narrow hallway. The kitchen is at end of it.
In a hallway there are three doors: a bronze door, a silver door and a gold door. The doors are placed one after another, however, possibly in a different order. To proceed to the next door, you must first open the door before.
Each door can be only opened with a key of the corresponding color. So three keys: a bronze key, a silver key and a gold key — are also placed somewhere in the hallway. To open the door, you should first pick up the key of its type.
You have a map of the hallway. It can be transcribed as a string, consisting of six characters:
B, S, G — denoting bronze, Silver and Gold doors, respectively;
b, s, g — denoting bronze, Silver and Gold keys, respectively.
Each of these six characters appears in the string exactly once.
You are standing at the beginning of the hallway — on the left on the map.
Given a map of the hallway, determine if you can open all doors and reach the kitchen at the end of the hallway.

Input
Input Format
The first line contains the number of testcases, T
For each testcase :
The first and only line contains the string S, the map of the hallway.

Constraints
1<=T<=100
|S| = 6

Output
For each testcase, print "Yes" if you can reach the kitchen , else print "No"

Sample Input 1 
2
bBsGSg
sbgBGS

Sample Output 1
NO
YES

Hint
In the first case, you can open the Bronze Door, but then you get stuck at the Gold door
In the second case, you can open all the doors.

*/

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let T = +input[0];
  let l = 0;
  for (let i = 0; i < T; i++) {
    let A = input[++l].split("");
    let b = [];
    let d = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j] == A[j].toLowerCase()) {
        b.push(A[j]);
      } else if (b.includes(A[j].toLowerCase())) {
        continue;
      } else {
        d = 1;
        break;
      }
    }
    // console.log(b,A)
    if (d == 0) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
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
