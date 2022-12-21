/*

Problem statement:
From a college, a group of students applied for 8 positions in the Indian army. 
Each student will be chosen based on the following criteria:
- Every student has the following 4 details Name, Height, Weight and IQ in the same order.
- IQ is the first priority to choose a particular student , if a student has IQ of 115 and other student has 110 ,print first the name of student having greater IQ .
- If any two students IQ is same then print the student name having greater height if the heights are also same then print the student name having lesser weight.
- If all of these details(height,weight,IQ) are same then first print the lexicographically smaller name.
You have to prepare top 8 students  merit list bases on the above criteria.
Note : You cannot use built-in sort function. Using that can lead to disqualification. 
    Write your own sorting algorithm.

Input:
Input Format:
First line contains N number of students applied.
Following N line contains Name, Height, Weight ,IQ of each student separated by spaces.

Constraints:
8 <= N <= 20

Output:
Output Format:
Print each student's name in the merit list.

Sample Input:
10
jack 158 85 112
john 168 74 124
arti 148 65 120
bhuvan 182 84 124
navi 182 84 124
vijay 175 88 115
amit 180 89 119
kevin 182 77 120
rohit 174 85 100
vivek 184 75 111

Sample Output:
bhuvan
navi
john
kevin
arti
amit
vijay
jack

*/

function runProgram(input) {
  // Write Code Here
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let line = 1;
  let matrix = new Array();
  for (let i = 1; i <= n; i++) {
    let temp = input[line++].trim().split(" ");
    temp[1] = +temp[1];
    temp[2] = +temp[2];
    temp[3] = +temp[3];
    matrix.push(temp);
  }
  print(n, matrix);
}

function print(n, matrix) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (compareAsci(matrix[j][0], matrix[j + 1][0])) {
        let temp = matrix[j];
        matrix[j] = matrix[j + 1];
        matrix[j + 1] = temp;
      }
    }
  }
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (matrix[j][2] > matrix[j + 1][2]) {
        let temp = matrix[j];
        matrix[j] = matrix[j + 1];
        matrix[j + 1] = temp;
      }
    }
  }
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (matrix[j][1] < matrix[j + 1][1]) {
        let temp = matrix[j];
        matrix[j] = matrix[j + 1];
        matrix[j + 1] = temp;
      }
    }
  }
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (matrix[j][3] < matrix[j + 1][3]) {
        let temp = matrix[j];
        matrix[j] = matrix[j + 1];
        matrix[j + 1] = temp;
      }
    }
  }
  for (let i = 0; i < 8; i++) {
    console.log(matrix[i][0]);
  }
}

function compareAsci(str1, str2) {
  let min = Math.min(str1.length, str2.length);
  for (let i = 0; i < min; i++) {
    if (str1[i] != str2[i]) {
      if (str1.charCodeAt(i) > str2.charCodeAt(i)) {
        return true;
      } else return false;
    }
  }
  return false;
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
