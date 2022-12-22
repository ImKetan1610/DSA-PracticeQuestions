/*

Problem Statement:
There are N trucks numbered from 1 to N. The trucks are coming on a road in a random manner.
(by random, it means that any order of number: not sorted) 
There is a side lane which can be used to order the sequence of truck properly(1,2,3,..N)
Use these (Ref :https://imgur.com/a/yWLhQiK) images for better understanding of sample test case.
If it is possible to achieve using the side land, print "yes"
else print "no"

Input:
Input Format :
There are several test cases.
The first line of each test case contains a single number n, the number of trucks.
The second line contains the numbers 1 to n in an arbitrary order.
All the numbers are separated by single spaces. These numbers indicate the order in which the trucks arrive in the approach street.
Input ends with number 0

Constraints :
N < 1000

Output:
For each test case your program has to output a line containing a single word "yes" 
if the trucks can be re-ordered with the help of the side lane, and a single word "no" in case it is not possible.


Sample Input:
5
5 1 2 4 3 
0

Sample Output:
yes

*/

function useSideLane(v) {
  let arr = [];
  let line = 1;
  for (let i = 0; i < v.length; i++) {
    if (arr.length === 0 || v[i] < arr[arr.length - 1]) {
      arr.push(v[i]);
    } else {
      while (arr[arr.length - 1] === line) {
        arr.pop();
        line++;
      }
      if (arr.length === 0 || v[i] < arr[arr.length - 1]) {
        arr.push(v[i]);
      } else {
        return "no";
      }
    }
  }
  return "yes";
}

function runProgram(input) {
  input = input.split("\n");
  let i = 0;
  while (input[i].trim() !== "0") {
    let v = input[i + 1].trim().split(" ").map(Number);
    i += 2;

    console.log(useSideLane(v));
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
