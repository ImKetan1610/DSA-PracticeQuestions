/*

Description:
One famous series says
e^x = 1 + x + x^2/(2!) + x^3/(3!) + ...

Using the below explanation for n-th term of e^x, 
    calculate the value of e^x given x and n. 
    Do not calculate it directly using the formula and do not write any iterative code.

Tn(x) = 1 + x + x^2 * [1/(2!)] + x^3 * [1/(3!)] + ...


Input:
Input Format:
First and the only line of code contains x and n respectively

Constraints:
x <= 14
n <= 12

Output:
Print the value to 4 places after the decimal. For example, 13.1310 is a valid answer but 13.131 is not. 
Also, 12 is not a valid answer but 12.0000 is a valid answer

Sample Input:
4 2

Sample Output:
13.0000

*/

function runProgram(input) {
  let [x, n] = input.trim().split(" ").map(Number);
  factorial(x, n);
  let y = easToPower(x, n);
  console.log(y.toFixed(4));
}

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  let p = n * factorial(n - 1);
  return p;
}

function easToPower(x, n) {
  if (n == 0) {
    return 1;
  }
  return x ** n / factorial(n) + easToPower(x, n - 1);
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
