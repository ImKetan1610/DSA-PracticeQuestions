/*

Problem Statement:
2 players ram and shyam are playing a game where in they both stand opposite each other and 
and there are n boxes between them.
Each box contains some number of stones in it. They can move in these boxes only in one direction, 
i.e. ram can move only towards shyam and shyam only towards ram, also they cannot cross each other.
As and when they step foot in a box they collect all the stones in their bag 
and then they can decide whether to move forward or not.
The task is that at the end of the game the total number of stones in both the bags should be same. 
They cannot cross each other and cannot stand in the same box as well.
Find the maximum no of stones each can collect 
so that they both have same number of stones after covering x1 and x2 boxes respectively (x1+x2<=n).
If they cannot have equal number of stones then output 0. 
If there exists some number of stones they can collect so that they have equal stone then they are said to win the game.


Input:
Input Format:
The first line contains the number of testcases t.
Next 2*t lines we have the description of the t testcases.
For each testcase first line contains n the number of boxes between them. 
Next line contains n integers, the number of stones in each box.

Constraints:
1 <= n <=1000
1 <= box[i] <= 1000

Output:
Output Format:
For each testcase output one line. 
If there are no possible solution to the problem or that they cannot win the game then output 0.
Else output the maximum number of stone each can collect.


Sample Input:
2
5
100 8 97 2 1
5
100 9 96 2 1

Sample Output:
100
0

Hint:
In the first testcase the only possible solution is that ram jump one box from left 
and shyam jump three boxes from the right so now each of them have 100 stones in their bag.

Hence they win the game and output is 100.

In the second testcase there exits no solution, they lose the game hence output is 0.

*/

function find(n, arr) {
  let left = 0,
    right = n - 1,
    max = -1;
  let ramCount = arr[0],
    shyamCount = arr[n - 1];
  while (left < right) {
    if (ramCount > shyamCount) {
      right--;
      shyamCount += arr[right];
    } else if (ramCount < shyamCount) {
      left++;
      ramCount += arr[left];
    }
    if (ramCount == shyamCount) {
      max = Math.max(ramCount, max);
      //   max=ramCount
      left++, right--;
      (ramCount += arr[left]), (shyamCount += arr[right]);
    }
  }

  max == -1 ? console.log(0) : console.log(max);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0],
    line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    find(n, arr);
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