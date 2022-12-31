/*

Description:
Assume forum mall has K parking slots and in the next 24 hours 
    there are many vehicles that are going to visit the mall. 
Luckily, you know the arrival and departure time of each vehicle coming to visit the mall. 
You are the parking manager of forum and you want to maintain the reputation of Forum mall. 
Since you know the arrival and departure time of each vehicle and also number of parking slots that you have, 
    comment if it is possible to accommodate all vehicles or not.
If it is possible, print "Possible"
In case it is not possible, print "Not Possible"

Input:
Input Format:
First line contains K
Second line is an array which contains arrival time of all the vehicles coming to visit mall.
    (where element at i index represents arrival time for ith car)
Third line is also an array which contains departure time of all the vehicles coming to visit mall.
    (where element at i index represents departure time for ith car)

Constraints:
K<10000
Number of cars<100000

Output:
Output Format:
Output Possible/Not Possible based on condition mentioned above.

Sample Input:
1
1 3 5
2 6 8

Sample Output:
Not Possible

Hint:
Sample 1 Explanation
At 5, there are 2 vehicles for parking. But you have only one slot.
Hence the answer is "Not Possible"

*/

function Mall_Parking(n, arr_t, dep_t) {
  let parking_lot = 0;
  for (let i = 0; i < arr_t.length; i++) {
    if (!(dep_t[i] <= arr_t[i + 1])) {
      parking_lot++;
    }
  }
  if (parking_lot <= n) {
    console.log("Possible");
  } else {
    console.log("Not Possible");
  }
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var n = +input[0];
  var arr_t = input[1].trim().split(" ").map(Number);
  var dep_t = input[2].trim().split(" ").map(Number);
  Mall_Parking(n, arr_t, dep_t);
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
