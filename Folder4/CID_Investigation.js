/*

Description:
Recently the famous ACP Pradhyuman has been handed a mystery to solve. 
His team has a recovered an old phone with a number keypad from the crime site. 
The picture of the phone keypad is attached below.
ACP suspects something is wrong and feels curious about it. 
He has instructed his junior Daya to send this phone to forensic for further investigation. 
Doctor Salunkhe, one of the best forensic experts analyzes the phone 
    and figures out the sequence of digit typed while sending the last message. 
Doctor Salunkhe stores this sequence as a string S.
It's now Daya's task to figure out all the possible strings (messages) 
    that the digit string could represent so that further investigation can be carried out. 
Since Daya is busy breaking all the doors of the crime scene, can you please help him out?



Here, consider that pressing one button could lead to any letter possible by the digit.
For example, if 2 is pressed, it could be a, b or c. Similarly for all the digits consider this.


Input:
The first line of the input contains a string S (1 ≤ length of string S ≤ 5).
The digits of the strings consist of 2 - 9 both inclusive.

Output:
Print each possible string in a new line. The results should be lexicographically sorted.

Sample Input:
22

Sample Output:
aa
ab
ac
ba
bb
bc
ca
cb
cc

Sample Input:
9

Sample Output:
w
x
y
z

*/

function solveCid(digit, output, index, ans, map) {
  if (index >= digit.length) {
    console.log(output.join(""));
    return;
  }
  let number = +digit[index];
  let value = map[number];
  for (let i = 0; i < value.length; i++) {
    output.push(value[i]);
    solveCid(digit, output, index + 1, ans, map);
    output.pop();
  }
}

function runProgram(input) {
  let digit = input;
  if (digit.length === 0) {
    return "";
  }
  let ans = [];
  let output = [];
  let index = 0;
  let map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  solveCid(digit, output, index, ans, map);
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
