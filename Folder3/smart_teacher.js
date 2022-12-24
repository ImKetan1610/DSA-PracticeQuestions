/*

Problem Statement:
You are a teacher and you have asked your students to not scribble over wrong letters, 
    simply write # to so the teacher will consider the previous undeleted character as deleted.
Say for example , tad#bc### results in t as the first # deleted d leaving tab c### 
    and the three #'s then delete abc respectively in order c, b, a.
You have a students solution and the correct answer for n questions.
'#' deletes the previous undeleted character if it exists.
Output for each question CORRECT or WRONG 
    if both the answer and solution after deleting respective elements come out to be same or different.

Input:
Input Format:
The first line contains the number of questions t.
Next 3*t lines we have the description of the t questions.
For each question there is 3 lines of input.
The first line of input contains n, the size of answer and solution.
The second line contains a string of size n, the students answer to the question.
The third line contains a string of size m, the solution to the question.
Both the solution and answer contain alphabets and '#' characters.

Constraints:
1 <= t <=1000
1 <= n,m <= 10^4

Output:
Output Format:
For each testcase output n lines the ith of which [ 1 <= i <= n ] is CORRECT 
    if the ith answer and ith solution are same or WRONG if they are different.

Sample Input:
3
4
ab#c
ad#c
4
ab##
c#d#
3
aab
aa#

Sample Output:
CORRECT
CORRECT
WRONG

Hint:
In the first test case both answer and solution become "ac" so CORRECT.
In the second test case both answer and solution become empty string, so CORRECT.
In the third test case answer becomes aab and solution is a so WRONG.

*/

function runProgram(input) {
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var n = +input[line];
    line++;
    var str1 = input[line].trim().split("");
    line++;
    var str2 = input[line].trim().split("");
    line++;

    SmartTeacher(n, str1, str2);
  }
}

function SmartTeacher(n, str1, str2) {
  var ans1 = [];

  for (var i = 0; i < n; i++) {
    if (str1[i] != "#") {
      ans1.push(str1[i]);
    } else if (ans1.length > 0) {
      ans1.pop();
    }
  }
  var res1 = ans1.join("");

  var ans2 = [];

  for (var i = 0; i < n; i++) {
    if (str2[i] != "#") {
      ans2.push(str2[i]);
    } else if (ans2.length > 0) {
      ans2.pop();
    }
  }
  var res2 = ans2.join("");

  if (res1 === res2) {
    console.log("CORRECT");
  } else {
    console.log("WRONG");
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
