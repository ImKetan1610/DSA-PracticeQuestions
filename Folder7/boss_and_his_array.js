/*

Description:
Your boss has an array of size n.
He gives the array to you and asks you to remove all duplicates from it but only allows you to perform a particular operation:
Choose two indices i,j (i≠j) and remove the elements at the indices. This operation reduces the size of the array by 2.
Now he also likes large arrays, so he asked you to perform the operations in such a way that the size of the remaining array is maximum.
Output the maximum size of the array you can obtain.

Input
Input Format
The first line contains the number of test cases t.
Next 2*t lines contain the description of the t testcases.
The first line of eah testcase contains an integer n - the size of the array.
The second line contains n space-separated integers a1,a2...an denoting the n elements of the array.

Constraints
1 <=t<= 10^3
1 <=n<= 10^3
1 <=ai<= 10^4


Output
Output Format
For each test case, output a single integer — the length of the final array.
Remember that in the final array, all elements are different, and its length is maximum.

Sample Input 1 
4
6
2 2 2 3 3 3
5
9 1 9 9 1
4
15 16 16 15
4
10 100 1000 10000

Sample Output 1
2
1
2
4

Hint
First Testcase
You can perform operations as follows:
Choose indices 1 and 5 to remove. The array becomes [2,2,2,3,3,3]→[2,2,3,3].
Choose indices 1 and 4 to remove. The array becomes [2,2,3,3]→[2,3]
The final array has a length of 2, so the answer is 2.
It can be proven that you cannot obtain an array with a longer length.

Second Testcase
You can perform operations as follows:
Choose indices 3 and 4 to remove. The array becomes [9,1,9,9,1]→[9,1,1].
Choose indices 1 and 3 to remove. The array becomes [9,1,1]→[1].
The final array has a length of 1, so the answer is 1.
It can be proven that you cannot obtain an array with a longer length.

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(bosArr(n, arr));
  }
}

function bosArr(n, arr) {
  let obj = {};
  for (let key of arr) {
    !obj[key] ? (obj[key] = 1) : obj[key]++;
  }

  let core = 0;
  for (let n in obj) {
    core += obj[n] - 1;
  }

  return core % 2 === 0 ? arr.length - core : arr.length - core - 1;
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
