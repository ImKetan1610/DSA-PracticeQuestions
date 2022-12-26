/*

Description:
You are given two numbers n and k. 
The number p is created by concatenating the string n k times.
we need to find the super digit of the integer p
We define super digit of an integer putting the following rules:
    If p has only 1 digit, then its super digit is 1.
    Otherwise, the super digit of p is equal to the super digit of the sum of the digits of p.
    Read the Sample input explanation for better understanding.

Input:
Input Format:
The first line contains two space-separated integers, n-a string representation of an integer and k- an integer, 
    the times to concatenate nto make p.

Constraints:
1 <= n <= 10^100000
1 <= k <=10^5

Output:
Print the super digit sum p

Sample Input:
148 3

Sample Output:
3

Sample Input:
123 3

Sample Output:
9

Hint:
Sample Input 1 Explanation
Here n = 148 and k = 3 , so p = 148148148.
super_digit(P) = super_digit(148148148) 
               = super_digit(1+4+8+1+4+8+1+4+8)
               = super_digit(39)
               = super_digit(3+9)
               = super_digit(12)
               = super_digit(1+2)
               = super_digit(3)
               = 3.

Sample Input 2 Explanation
Here n = 123 and k = 3 ,so p = 123123123
super_digit(P) = super_digit(123123123) 
               = super_digit(1+2+3+1+2+3+1+2+3)
               = super_digit(18)
               = super_digit(1+8)
               = super_digit(9)
               = 9

*/

function runProgram(input) {
  var input = input.trim().split(" ");
  var str = input[0];
  var k = +input[1];
  solve(str, k);
}

function solve(string, k) {
  function superdigit(string) {
    if (string.length == 1) {
      return Number(string);
    } else {
      var sum = 0;
      for (var i = 0; i < string.length; i++) {
        sum += +string[i];
      }
      var string1 = "" + sum;
      return superdigit(string1);
    }
  }
  var ans = "" + superdigit(string) * k;
  console.log(superdigit(ans));
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
