/*

Problem Statement:
Given an integer N, output the name of the Day based upon the integer day number.
e.g.: 0 - Sunday, 1- Monday, 6 - Saturday etc.

Note: Use switch case to complete this problem

Input:
The first line of input contain an integer N

Output:
Output the name of the day based upon the day number, 
print the name of the day starting with first letter as a capital letter, 
e.g. Monday


Sample Input:
3

Sample Output:
Wednesday

Sample Input:
5

Sample Output:
Friday

Hint:
Self Explanatory

*/

function print(N) {
  switch (N) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    default:
      console.log("err");
  }
}

function runProgram(input) {
  // Write Code Here
  let N = +input;
  print(N);
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
