/*

Description:
It's party time in a hostel, and you are partying with your friends in the hostel's lobby. 
You can visualize the lobby as a 1-dimensional line (x-axis). 
All of you are scattered along that X-axis. 
Suddenly, you come to know that the warden is coming to the hostel. 
So, all of you want to hide inside a room. 
So, you will be given x-coordinates of hostel rooms as well as your current location (as x-axis coordinate). 
Anyone can stay at his position, move one step right from x to x + 1, or move one step left from x to x -1. 
Any of these moves consume1 minute. 
You have to find out the minimum time in which everyone in the lobby can go to any room and hide inside.

Input:
Input Format:
First line of input contains N which is the total number of students present in the lobby
Second line contains N space-separated integers representing current x-coordinates of students scattered in lobby
The third line also contains N space separated integers representing x-coordinates of the rooms present in the lobby

Constraints:
N <= 1000000
-1000 <= x[i] <= 1000

Output:
Print the minimum time as per the given condition in question

Sample Input:
3
4 -4 2
4 0 5

Sample Output:
4

Hint:
Sample 1 Explanation
Assign student at position x = 4 to room at position x = 4 : Time taken is 0 minutes
Assign student at position x=-4 to room at position x = 0 : Time taken is 4 minutes
Assign student at position x=2 to room at position x = 5: Time taken is 3 minutes
After 4 minutes all of the students are in the rooms. Since, there is no combination possible where the last student's time is less than 4,
So, answer = 4.

*/

function party(arr1, arr2) {
  let max = -Infinity;
  for (let i = 0; i < arr1.length; i++) {
    let min = Math.abs(arr1[i] - arr2[i]);
    max = Math.max(min, max);
  }

  console.log(max);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let arr1 = input[1].trim().split(" ").map(Number);
  let arr2 = input[2].trim().split(" ").map(Number);
  arr1 = arr1.sort((a, b) => {
    return a - b;
  });

  arr2 = arr2.sort((a, b) => {
    return a - b;
  });

  party(arr1, arr2);
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
