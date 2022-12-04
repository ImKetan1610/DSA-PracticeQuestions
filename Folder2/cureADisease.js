/*

Problem Statement:
A new deadly virus has infected large population of a planet. 
Scientists have discovered a new strain of virus which can cure this disease. 
Vaccine produced from this virus has various strength.

A person is cured only if strength in vaccine batch is more than midichlorians count of person.

A doctor receives a new set of report which contains midichlorians count of each infected patient, 
You have all vaccine doctor has and their strengths. 
You need to determine if doctor can save all patients with the vaccines he has. 
The number of vaccines and patients are equal.

Input:
Input Format
First line contains the number of vaccines - N.
Second line contains N integers, which are strength of vaccines.
Third line contains N integers, which are midichlorians count of patients.

Constraints:
N < = 10

Output:
Output Format:
Print a single line containing "Yes" (without quotes) or "No" (without quotes).

Sample Input:
5
123 146 454 542 456
100 328 248 689 200

Sample Output:
No

Hint:
In the sample test case, the person with midichlorians count of 689, cannot be saved, 
as there is no vaccine available with the strength greater than that, 
therefore, the answer is No

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr1 = input[1].trim().split(" ").map(Number);
  let arr2 = input[2].trim().split(" ").map(Number);
  cureDisease(n, arr1, arr2);
}

function cureDisease(n, arr1, arr2) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr1[i] > arr2[i]) {
      count++;
    }
  }
  if (count === n) {
    console.log("Yes");
  } else {
    console.log("No");
  }
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
