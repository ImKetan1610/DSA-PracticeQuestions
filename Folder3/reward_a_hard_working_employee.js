/*

Problem Statement:
Rahul is a hard-working employee. So, his boss decided to promote him.Rahul was overjoyed about getting to know this. But soon he realized he needed to shift to another Town X.

Rahul needed to transport his n boxes to Town X for which he contacted the company "Packers and Movers".This company sent him m trucks. Each truck took 1 hour to go from his house to Town X and another 1 hour to return.

But each truck could carry only 1 box at a time and also each truck has a limit for the maximum weight of the box it can carry.

A truck can be used multiple times. Find the minimum time in which he can transfer all his n boxes to Town X.


Input
Input Format:

The first line contains 2 integers n and m.

The next line contains n integers denoting the weight of each box.

This is followed by a line containing m integers denoting the maximum capacity of each truck.

Constraints:

1<=n,m<=10000

1<=weight of each box<=1000000

1<=maximum capacity of each truck<=1000000


Output
Print the minimum time to transfer all the boxes to Town X.

Note: Test cases are such that a solution always exist.


Sample Input 1 

7 2
10 2 16 19 6 11 5
29 25
Sample Output 1

7
Hint

Explanation to Sample test case:

The first truck carries the first box and then return to the house in 2 hours again carries the 2nd box and return and again the 3rd box and return taking a total of 6 hours.

The second truck similarly carries the next 3 boxes and return to the house in 6 hours. In the 6th hour, one of the two truck gets loaded with the 7th box and reaches Town X with the last box at the 7th hour.

*/

function runProgram(input) {
  input = input.split("\n");

  var line = 0;

  let [N, M] = input[line++].trim().split(" ").map(Number);
  let box = input[line++].trim().split(" ").map(Number);
  let truck = input[line++].trim().split(" ").map(Number);

  console.log(minTime(box, truck, N, M));

  function isPossible(box, truck, n, m, min_time) {
    let temp = 0;
    let count = 0;

    while (count < m) {
      for (
        let j = 0;
        j < min_time && temp < n && truck[count] >= box[temp];
        j += 2
      )
        temp++;

      count++;
    }

    if (temp == n) return true;

    return false;
  }

  function minTime(box, truck, n, m) {
    box.sort(function (a, b) {
      return a - b;
    });
    truck.sort(function (a, b) {
      return a - b;
    });

    let l = 0;
    let h = 2 * n;

    let min_time = 0;

    while (l <= h) {
      let mid = Math.floor((l + h) / 2);

      if (isPossible(box, truck, n, m, mid)) {
        min_time = mid;
        h = mid - 1;
      } else l = mid + 1;
    }

    return min_time;
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
