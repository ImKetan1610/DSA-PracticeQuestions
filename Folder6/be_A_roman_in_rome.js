/*

Description
Nick and Jack are good friends and both are very good at numbers, they want to play a fun game to know their understanding of numbers conversion into roman numerals. Nick will give a number N and Jack has to guess the equivalent Roman Numeral.
Jack can refer to the following table :
Value    Symbol
  1    -    I
  4    -   IV
  5    -    V
  9    -    IX
 10    -    X
 40    -    XL
 50    -    L
 90    -    XC
 100   -    C
 400   -    CD
 500   -    D
 900   -    CM
 1000  -    M

Input
Input Format
Input consists of single integer N

Constraints
1 <= N <= 3999

Output
Print equivalent roman number in a single line.

Sample Input 1 
2085

Sample Output 1
MMLXXXV

*/

let result = "";

function res(N) {
  if (N <= 0) {
    return;
  }
  if (N >= 1000) {
    result += "M";
    N = N - 1000;
  } else if (N >= 900) {
    result += "CM";
    N = N - 900;
  } else if (N >= 500) {
    result += "D";
    N = N - 500;
  } else if (N >= 400) {
    result += "CD";
    N = N - 400;
  } else if (N >= 100) {
    result += "C";
    N = N - 100;
  } else if (N >= 90) {
    result += "XC";
    N = N - 90;
  } else if (N >= 50) {
    result += "L";
    N = N - 50;
  } else if (N >= 40) {
    result += "XL";
    N = N - 40;
  } else if (N >= 10) {
    result += "X";
    N = N - 10;
  } else if (N >= 9) {
    result += "IX";
    N = N - 9;
  } else if (N >= 5) {
    result += "V";
    N = N - 5;
  } else if (N >= 4) {
    result += "IV";
    N = N - 4;
  } else if (N >= 1) {
    result += "I";
    N = N - 1;
  }
  res(N);
}

function runProgram(input) {
  res(+input);
  console.log(result);
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
