/*

Problem statement:
You are given a 2D array, such that the dimensions of the 2D Array are stored in the variable N and M
Each cell of the the 2D array, contains the following symbols --,/,*
The meaning of each of the symbols is as follows -'*' -> 0, '-' -> 1, '/ -> 2'
You have to make a string according to the values present in the 2D array, for each row
For example, consider the value stored in N = 3, and M = 3. The matrix given is as follows
* / *
/ - /
- - *

Therefore, converting each symbol into its corresponding number we get
0 2 0
2 1 2
1 1 0
which is the required answer


Input:
The first line of the input contains the value stored in N and M

The next N line contain M characters each, denoting the elements of the 2D array

Output:
Print the required output, as explained in the problem statement

Sample Input:
3 3
* / *
/ - /
- - *

Sample Output:
0 2 0
2 1 2
1 1 0

Hint:
In the sample test case, the value stored in N = 3, and M = 3. The matrix given is as follows

* / *
/ - /
- - *

Therefore, converting each symbol into its corresponding number we get
0 2 0
2 1 2
1 1 0
which is the required answer
*/

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = input[0].trim().split(" ").map(Number);
  let n = +tc[0];
  let m = +tc[1];
  let mat = [];

  for (let i = 1; i <= n; i++) {
    mat.push(input[i].split(""));
  }
  convert(n, m, mat);
}

function convert(n, m, mat) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < m; j++) {
      if (mat[i][j] == "*") {
        str += 0;
      }
      if (mat[i][j] == "/") {
        str += 2;
      }
      if (mat[i][j] == "-") {
        str += 1;
      }
    }
    console.log(str);
  }
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
}
