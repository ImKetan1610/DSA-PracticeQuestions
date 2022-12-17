/*

Problem Statement:
You are given name and marks of N different students in a hackerrank contest. 
Your task is to write a program that makes leaderboard of the students under following conditions:
- If two students get same marks they get same rank
- The student placed next to the same marks students will get the rank skipping the intermediate ranks.
Refer to the sample test case for better understanding
Note : You cannot use built-in sort function. Using that can lead to disqualification. Write your own sorting algorithm

Input:
Input Format :
First line of input contains N
Next N line contains name and marks respectively of N different students 
(where name and marks is separated by a space)

Constraints :
N < 100

Output:
Output N names with their rank. Follow these rules for generating the list:
1. The students having more mark gets better rank
2. If students have similar mark, their rank will be same(In case of similar marks, the person whose name comes first in alphabetical order comes first in order. However their rank will be same)
3. The student placed next to the same marks students will get the rank skipping the intermediate ranks.

Sample Input:
6
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45

Sample Output:
1 joy
1 rancho
3 chatur
3 virus
5 raju
6 farhan

*/

function leaderboard(n, names, scores) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (names[j] > names[j + 1]) {
        temp = names[j];
        names[j] = names[j + 1];
        names[j + 1] = temp;
        temp = scores[j];
        scores[j] = scores[j + 1];
        scores[j + 1] = temp;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (scores[j] < scores[j + 1]) {
        temp = scores[j];
        scores[j] = scores[j + 1];
        scores[j + 1] = temp;
        temp = names[j];
        names[j] = names[j + 1];
        names[j + 1] = temp;
      }
    }
  }

  let count = 1;
  let rc = 1;
  for (let i = 0; i < n; i++) {
    if (scores[i] == scores[i - 1]) {
      console.log(count + " " + names[i]);
    } else {
      console.log(rc + " " + names[i]);
      count = rc;
    }
    rc++;
  }
}

//----------I-N-P-U-T---T-A-K-I-N-G----------//

function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let names = [];
  let scores = [];
  for (let i = 1; i <= n; i++) {
    let name = input[i].split(" ")[0];
    let score = +input[i].split(" ")[1];
    names.push(name);
    scores.push(score);
  }
  leaderboard(n, names, scores);
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
