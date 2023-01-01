/*

Description:
A Contractor's daily tasks involve noting the number of hours the labour works and paying them accordingly.
But at one time you only require one labour, so as he finishes his job you give the job to the next labour.
If there are no labours available you wait until the next labour comes. If labour comes when another one is already doing some task, he waits until the job is finished and then asks the contractor for a job.
The contractor has the time labours came to the site, and the time the labours left.
He asks you to find the number of hours each labour works.
Refer to the I/O for better understanding.

Input
Input Format
The first line of input contains an integer t, the total number of testcases.
Next 3*t lines, conatain the description of the testcases.
Each testcase has three lines of input.
The first line of input contains an integer n, denoting the number of labours that worked.
The second line contains n integers, denoting the arrival time of the n labours.
The third line contains n integers, denoting the leaving time of the n labours.

Constraints
1 <=t<= 10^3
1 <=n<= 10^4
0 <=arrival[i]&leaving[i]<= 10^5

Output
Output Format
Output n integer, the ith denoted the total working hours of the ith labour.

Sample Input 1 
1
3
0 3 7
2 10 11

Sample Output 1
2 7 1

Hint
First test case:
The queue is empty at the beginning: []. And that's where the first labour comes in. At time 2, the first labour finishes doing the first task, so the duration of work of the first labour is 2. The queue is empty so the contractor is just waiting.
At time 3, the second labour arrives. And at time 7, the third labour arrives, and now the queue looks like this: [7].
Since the second labour has not completed his task, the third labour is still waiting.
At the time 10, the second labour finishes doing the second task, as a result, the duration of work of the second labour is 7.
And at time 10, the contractor immediately assigns the job to the third labour and he finishes it at time 11. As a result, the duration of work of the third labour is 1.

*/

function contract(n, arrival, depart) {
  depart.sort((a, b) => a - b);
  let arr = [];
  let hr = 0;
  arr[0] = depart[0] - arrival[0];
  for (let i = 1; i < n; i++) {
    if (arrival[i] >= depart[i - 1]) {
      hr = depart[i] - arrival[i];
      arr.push(hr);
    } else {
      arrival[i] = depart[i - 1];
      hr = depart[i] - arrival[i];
      arr.push(hr);
    }
  }
  console.log(arr.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var n = +input[line];
    line++;
    var arrival = input[line].trim().split(" ").map(Number);
    line++;
    var depart = input[line].trim().split(" ").map(Number);
    line++;
    contract(n, arrival, depart);
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
