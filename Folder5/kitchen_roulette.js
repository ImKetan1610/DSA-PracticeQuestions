/*

Description
You have n items in your kitchen which you have gievn some tastiness according to your likes and dislikes.
Among these n items there are k which you don't wish to have right now.
If you choose a random dish with greatest tastiness is there a chance that you can get one of the dishes you don't wish to have right now.
If there is a chance then output YES else NO.

Input
Input Format
The first line contains the number of testcases t.
Next 3*t lines we have the description of the t testcases.
For each testcase there is 3 lines of input.
The first line of input contains n, the number of dishes and k, the number of dishes you don't wish to have now.
The second line contains n space separated integers the ith of which [ 1 <= i <= n ] represents the tastiness of dish[i].
The third line contains k space separated integers, denoting the index of dishes you don't wish to have right now [ 1 <= index <= n ].

Constraints
1 <= t <=1000
1 <= n <= 1000
1 <= k <= n
1 <= tastiness <= 10
1 <= index <= n

Output
Output Format
For each testcase output YES if there is a chance that you might select a dish you don't wish to have right now, NO otherwise.

Sample Input 1 
1
5 3
6 8 10 7 10
2 3 4

Sample Output 1
YES

Hint
In the first test case the dishes with the greatest tastiness are 3rd and 5th. And you now don't wish to have dishes 2, 3 and 4. And there is a chance that you select dish 3 therefr the answer is YES.

*/

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let T = +input[0];
  let l = 0;
  for (let i = 0; i < T; i++) {
    let a = input[++l].split(" ").map(Number);
    let N = +a[0];
    let K = +a[1];
    let d = 0;
    let A = input[++l].split(" ").map(Number);
    let ma = Math.max(...A);
    let B = input[++l].split(" ").map(Number);
    for (let j = 0; j < K; j++) {
      if (A[B[j] - 1] == ma) {
        d = 1;
        break;
      }
    }
    // console.log(A,B,A[B[j-1]]);
    if (d == 1) {
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
