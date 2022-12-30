/*

Description:
Given an integer N, and a pattern. Print the pattern as given in the sample I/O.
Note: Please check for spaces.

Input:
The first and the only line of the input contains the value ofN.

Constraints:
1 <=N<= 25

Output:
Print the pattern as given in the sample test case.

Sample Input:
5

Sample Output:
* * * * *
* * * *  
* * *    
* *      
*  

Hint:
The following pattern is used to show the spaces that you must have in the program,
    _is used to indicate the spaces.
*_*_*_*_*
*_*_*_*__
*_*_*____
*_*______
*________

Note: Underscore is only used to indicate spaces and not be printed in the actual program.

*/

function runProgram(input) {
  let n = +input;
  let cou = 0;
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = i; j < n; j++) {
      temp.push("*");
    }
    for (let k = 0; k < cou; k++) {
      temp.push(" ");
    }
    cou++;
    console.log(temp.join(" "));
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
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
