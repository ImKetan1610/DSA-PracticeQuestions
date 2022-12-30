/*

Description:
You have a circular dining table and N angry people.
You need to place them on the table.Each person has a anger value.
You can place them in any order on the circular table.
Once you place them you need to calculate the Danger value of your arrangement.
The danger value of the arrangement is the maximum difference of anger values of all the adjacent seated persons.
You need to keep this danger value as low as possible.

Input:
Input Format:
The first line contains N.
The second line contains the anger values of N persons.

Constraints:
3<=N<=1000
1<=Hunger Value<=1000

Output:
Output format:
Print the minimum possible danger value.

Sample Input:
4
5 10 6 8

Sample Output:
4

Hint:
The optimal arrangement is :

5

/             \

6                  8

\           /

10

The adjacent pair values are 1 for(6-5),3 for(8-5),4 for(10-6),2 for(10-8).
Since danger value is the maximum value so it's 4.

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  find(n, arr);
}

function find(n, arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let i = 0,
    c = 0;
  while (i + 2 < n) {
    if (Math.abs(arr[i] - arr[i + 2]) > c) {
      c = Math.abs(arr[i] - arr[i + 2]);
    }
    i++;
  }
  if (Math.abs(arr[0] - arr[1]) > c) {
    c = Math.abs(arr[0] - arr[1]);
  }
  if (Math.abs(arr[-1] - arr[-2]) > c) {
    c = Math.abs(arr[-1] - arr[-2]);
  }
  console.log(c);
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
