/*

Description:
Neelam has N friends studying in various schools. 
She wants to find a new friend in (N+1)th school. 
Assume all schools are separated by 1 unit distance. 
To reach (N+1)th school she has to board a bus.
The ith school would cost of C[i] rupees to travel 1 unit of distance. 
In other words, the bus fare to travel from the ith school to the jth school is abs(i – j ) * C[i] rupees.
The task is to find the minimum bus fare to travel from school 1 to school(N + 1)i.e. beyond the last school.

Input:
Input Format:
First Line Consists of Single integerN
Second Line Consists of N integers separated by spaces.
(Cost to travel 1 unit distance from ith school)

Constraints:
1 < =N<= 10^6
1 <=C[i]<= 10000

Output:
Print the minimum cost to travel.

Sample Input:
5
4 7 8 3 4

Sample Output:
18

Hint:
Sample 1 Explanation
Board the bus at the first school then change the bus at the fourth school.
(3 * 4) + (2 * 3) = 12 + 6 = 18

*/

function solve(n, arr) {
  let sum = arr[0];
  let cr = arr[0];
  for (let i = 1; i < n; i++) {
    cr = Math.min(cr, arr[i]);
    sum += cr;
  }
  console.log(sum);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  solve(n, arr);
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
