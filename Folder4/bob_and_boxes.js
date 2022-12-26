/*

Description:
Bob the builder has a task of transferring a number of boxes, containing construction material, 
    to a location for construction. 
    The workers are waiting for the construction material to arrive, 
    so it is imperative that he gets the boxes delivered on time. 
    His crane is designed in such a way, 
    that he can only carry 1,3 or 5 boxes at a time. 
    Wendy is worried for him, and to help him, 
    wants to find the number of ways in which the boxes can be delivered. 
    So, she asks you for a help. 
    Help her find out the number of ways in which the boxes can be delivered.

Input:
The first and the only line of input consists of a number N, 
    denoting the number of boxes, that Bob has to transfer from one location to another.
N <= 40

Output:
The output consists of only one line the number of ways in which 
    the boxes can be transferred from Bob's home to the construction site.

Sample Input:
7

Sample Output:
12

*/

let count = 0;
function bob(n) {
  if (n < 0) {
    return;
  }
  if (n === 0) {
    count++;
    return;
  }
  bob(n - 1);
  bob(n - 3);
  bob(n - 5);
  return count;
}

function runProgram(input) {
  let n = +input;
  console.log(bob(n));
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