/*

Description:
There are N people in a queue to sit on the ride in the carnival, there is a rule to sit on ride, it's like this:
In each round we allow to sit up to that position in queue till where the height of people are strictly increasing
We need to determine the minimum number of rounds required so that each person must be able to sit on the ride once.
You will be given height of the people standing in the queue from start to end.

Input:
Input Format:
The First line of input will contain T, the number of test cases.
The first line of each test case contain N, denoting the number of people in the queue
The next line contain N, integers denoting the height of the people.

Constraints:
1<= T <= 10
1<= N <= 10^5
1<= A[ i ] <= 10^5

Output:
For each test case output the minimum number of rounds required in a new line.

Sample Input:
1
8
1 3 2 4 4 5 3 6

Sample Output:
4

Hint:
In Sample 1:
N = 8
In queue :
In Round 1 : 1, 3 will go as next person's height is 2 which is less than 3
In Round 2 : 2, 4 will go as next person's height is 4 which is not greater than 4
In Round 3: 4,5 will go as next person's height is 3 which is not greater 6
In Round 4: 3, 6 will go.
Total Round Required will be 4

*/

function queue(N, arr) {
  let count = 1;
  for (let i = 0; i < N; i++) {
    if (arr[i] >= arr[i + 1]) {
      // console.log(arr[i],arr[i+1])
      count++;
    }
  }
  console.log(count);
}

function runProgram(input) {
  input = input.split("\n");
  let tc = input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    queue(N, arr);
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
