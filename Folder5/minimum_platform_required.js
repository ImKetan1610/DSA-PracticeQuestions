/*

Description:
Given arrival and departure times of all trains that reach a railway station, 
    the task is to find the minimum number of platforms required for the railway station so that no train waits.

Input:
Input Format:
First-line contains a number of trains n
Second-line contains array containing arrival time of n trains
The third line contains an array containing departure time of n trains

Constraints:
n <= 100

Output:
Output one number which is the minimum number of platforms required

Sample Input:
6
9:00 9:40 9:50 11:00 15:00 18:00
9:10 12:00 11:20 11:30 19:00 20:00

Sample Output:
3

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arrival = input[1].trim().split(" ");
  let departure = input[2].trim().split(" ");
  No_of_platforms(n, arrival, departure);
}

let No_of_platforms = (n, arrival, departure) => {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < arrival[i].length; j++) {
      if (arrival[i][j] != ":") {
        str += arrival[i][j];
      }
    }
    arrival[i] = +str;
  }

  for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < departure[i].length; j++) {
      if (departure[i][j] != ":") {
        str += departure[i][j];
      }
    }
    departure[i] = +str;
  }

  let i = 0;
  let j = 0;
  let platforms = 0;
  let max = 0;
  while (i < n && j < n) {
    if (arrival[i] <= departure[j]) {
      i++;
      platforms++;
      if (platforms > max) {
        max = platforms;
      }
    } else {
      j++;
      platforms--;
    }
  }

  console.log(max);
};

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
