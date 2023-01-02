/*

Description
At your college's annual function you take part in a singing comedy competition. 
There are many participants, and they are standing backstage holding a piece of paper that has their participation number on it. You almost forgot about the competition and rushed backstage quickly to stand in the line. Now you need to find where do you stand and who are participants in front and behind you in Log(n) time.

Input
First line contains the number of cases (t)
Next 2t lines contains your participation number and the queue in two different lines.
t <= 500000
Length of the string <= 20

Output
You need to output t lines in which there will be two evenly spaced numbers, first will the participation number of the person in front of you and second will the one of the person standing behind.
Note-If no one is in front or behind you, output "Front" or "Last" respectively (without quotes)

Sample Input 1 
3
3
1 4 5 6 8 9
5 
1 2 6 7 8
1
2 3 4 5 6

Sample Output 1
1 4
2 6
Front 2

*/

function func(N, arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] > N) {
      end = mid;
    } else {
      start = mid;
    }
    if (end - start == 1) {
      return [start, end];
    }
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    if (arr[0] > N) {
      console.log("Front", arr[0]);
      continue;
    }
    if (arr[arr.length - 1] < N) {
      console.log(arr[arr.length - 1], "Last");
      continue;
    }
    let ans = func(N, arr);
    if (arr[ans[0]] > N) {
      console.log(arr[ans[0] - 1], arr[ans[0]]);
    } else if (arr[ans[1]] < N) {
      console.log(arr[ans[1]], arr[ans[0] + 1]);
    } else {
      console.log(arr[ans[0]], arr[ans[1]]);
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
