/*

Description:
Given a collection of numbers, return all possible permutations.
NOTE:
No two entries in the permutation sequence should be the same.
For the purpose of this problem, assume that all the numbers in the collection are unique.
USING BUILT-IN LIBRARY FUNCTION TO PERMUTE WILL LEAD TO DISQUALIFICATION
Note :Return the permutations in any order.

Input:
The first line of input contain an integer n - denoting the size of array
The next line contain n distinct integers, A[1],A[2]...A[N]

Constraints:
1<= n <=6

Output:
This is a function complete problem. Return the collection of permutations of the array.

Sample Input:
3
1 2 3

Sample Output:
1 2 3 
1 3 2 
2 1 3 
2 3 1 
3 1 2 
3 2 1

*/

function gper(str, ans) {
  if (str.length == 0) {
    console.log(ans.split("").join(" "));
  }
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    let left = str.slice(0, i);
    let right = str.slice(i + 1);
    let rest = left + right;
    gper(rest, ans + ch);
  }
}

function runProgram(input) {
  //Input Taking Here
  input = input.split("\n");
  let n = +input[0];
  let str = input[1].split(" ").join("");
  let ans = "";
  gper(str, ans);
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
