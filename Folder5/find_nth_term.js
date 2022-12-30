/*

Description:
Compute the Nth term A(n) of the series, where
A(0) = 10 , A(1) =  10 , A(2) = -19
A(i) = (i/6) + (A(i-1) + A(i-3))  , if i > 2 and i is divisible by both 2 and 3.  
A(i) = (i/2) - (A(i-1) + A(i-2)) , if  i > 2 and i is only divisible by 2.  
A(i) = (i/3) + (A(i-1) + A(i-3)) , if  i > 2 and i is only divisible by 3.
A(i) = A(i-1) , 
otherwise

Input:
Input Format :
The single line of the input contains a single integerN.

Constraints :
0 <= N <= 25

Output:
Output Format :
Print a single integer, the Nth term of the sequence.

Sample Input:
3

Sample Output:
-8

Sample Input:
4

Sample Output:
29

Sample Input:
5

Sample Output:
29

Hint:
TestCase 1 :N = 3 ,A(3) = (3/3) + A(2) + A(0)
TestCase 2 :N = 4,A(4) = (4/2) - (A(3) + A(2))
TestCase 3 :N=5,A(5) = A(4)

*/

function A(i) {
  if (i == 0 || i == 1) {
    return 10;
  } else if (i == 2) {
    return -19;
  } else if (i > 2 && i % 2 === 0 && i % 3 === 0) {
    return i / 6 + (A(i - 1) + A(i - 3));
  } else if (i > 2 && i % 2 === 0) {
    return i / 2 - (A(i - 1) + A(i - 2));
  } else if (i > 2 && i % 3 === 0) {
    return i / 3 + (A(i - 1) + A(i - 3));
  } else {
    return A(i - 1);
  }
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var n = +input[0];

  console.log(A(n));
}

if (process.env.USER === "") {
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
