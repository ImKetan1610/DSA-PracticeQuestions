/*

Problem Statement:
For sure, the love mobiles will roll again on this summer's street parade. 
    Each year, the organisers decide on a fixed order for the decorated trucks. 
    Experience taught them to keep free a side street to be able to bring the trucks into order.
The side street is so narrow that no two cars can pass each other. 
    Thus, the love mobile that enters the side street last must necessarily leave the side street first. 
    Because the trucks and the ravers move up closely, 
    a truck cannot drive back and re-enter the side street or the approach street.
You are given the order in which the love mobiles arrive. 
    Write a program that decides if the love mobiles can be brought into the order 
    that the organisers want them to be.

Input:
Input Format:
The first line of the input contains an integer t — the number of test cases.
The next 2*t lines contain the description of the t testcases.
The first line of each testcase contains the number of cars n.
The second line of each testcase contains the n integers from 1 to n in some order.

Constraints:
1 ≤ t ≤ 10^4
1 ≤ n ≤ 10^3

Output:
Output Format:
For each testcase output YES if you can arrange the cars in the required order or NO otherwise.


Sample Input:
1
5
5 1 2 4 3

Sample Output:
YES

*/

function arrangeCar(n, arr) {
  let p = 1,
    stack = [],
    l = stack.length - 1;
  for (let i = 0; i < n; i++) {
    while (stack.length != 0 && stack[stack.length - 1] == p) {
      p++;
      stack.pop();
    }
    if (arr[i] === p) p++;
    else if (stack[stack.length - 1] < arr[i]) return "NO";
    else stack.push(arr[i]);
  }
  while (stack.length != 0 && stack[stack.length - 1] == p) {
    p++;
    stack.pop();
  }
  if (stack.length === 0) return "YES";
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);

    console.log(arrangeCar(n, arr));
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
