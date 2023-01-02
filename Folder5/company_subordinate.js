/*

Description
Given the structure of a company, your task is to calculate for each employee the number of their subordinates.
The employees are numbered1,2,…,nand employee1is the general director of the company.

Input
Input Format
The first input line has an integern: the number of employees.
After this, there are n−1 integers: for each employee 2,3,…,n their direct boss in the company.

Constraints
1<=n<=2*10^5

Output
Print n integers: for eachemployee 1,2,…,nthe number of their subordinates.

Sample Input 1 
5
1 2 2 4 

Sample Output 1
4 3 0 1 0 

Hint
In the sample test case,
Employee number 2 reports to 1, so number of people reporting to 1 is 1
Employee number 3 reports to 2, and 2 further reports to 1, so the number of people reporting 2 is 1, 
and number of people reporting to 1 becomes 2
Employee number 4 reports to 2, and 2 further reports to 1, so the number of people reporting 2 is 2, 
and number of people reporting to 1 becomes 3
Employee number 5 reports to 4, 4 further reports to 2, and 2 further reports to 1\. Therefore, 
- The number of people reporting to 4 is 1
- The number of people reporting to 2 is 3
- The number of people reporting to 1 is 4
Therefore, based on the above explanation,
Count of Subordinates of 1 is 4
Count of subordinates of 2 is 3
Count of subordinates of 3 is 0
Count of subordinates of 4 is 1
Count of subordinates of 5 is 0

*/

//Enter code here
function runProgram(ip) {
  ip = ip.trim().split("\n");
  const n = +ip[0];
  let arr = ip[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let obj = {};

  for (let i = 0; i < n; i++) {
    obj[i + 1] = 0;
  }

  for (let i = arr.length; i > 0; i--) {
    obj[arr[i - 1]] += 1 + obj[i + 1];
  }

  // obj[1]=n-1;

  let ans = [];

  for (let i = 1; i <= n; i++) {
    ans.push(obj[i]);
  }

  console.log(ans.join(" "));
}

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
