/*

Description:
A thief is stealing from a jewellery store and wants to steal the greatest value of gems possible. 
However, the getaway car he brought with him can only fit a maximum weight of C. 
All the gems in the store have a value and a weight associated with them 
    such that gem i has a value v(i)and a weight w(i).
Your task is to figure out the maximum value V of gems he can steal given the weight limit of the car. 
You can break a given gem into any fraction of itself.
NOTE: Maximum value v should be rounded to the nearest integer
For example:
Let Total Weight C = 50
Number of gems = 3
The Value of gems: 60 100 120
The Weight of gems: 10 20 30
The total value of the gems he can carry is = 240
The fraction of each item taken is: 1 1 0.66666666666
Total weight is : 1*10 + 1*20 + 0.66666666666*30 = 49.999999999799996

Input:
Input Format:
First line contains an integer denoting the capacity C
Second line contains the total number of gems n
Third line contains the value of each gem separated by a space
Fourth line contains the weight of each gem separated by a space

Constraints:
0 <= C
0 < n <= 1000000
0 <= v(i)
0 <= w(i)

Output:
For each test case output a single integer: the maximum value rounded to the nearest integer

Sample Input:
50 
3
60 100 120 
10 20 30

Sample Output:
240

*/

function call(n, V, W, C) {
  let MAX_VAL = 0;
  let VperW = [];

  for (let i = 0; i < n; i++) {
    VperW[i] = { value: V[i], weight: W[i] };
  }
  // console.log(VperW);

  VperW.sort(function comparator(a, b) {
    let r1 = a.value / a.weight;
    let r2 = b.value / b.weight;
    if (r1 < r2) return 1;
    else if (r1 > r2) return -1;
    else return 0;
  });

  let currWeight = 0;
  for (let i = 0; i < n; i++) {
    if (currWeight + VperW[i].weight <= C) {
      currWeight += VperW[i].weight;
      MAX_VAL = MAX_VAL + VperW[i].value;
    } else {
      let remain = C - currWeight;
      MAX_VAL += (VperW[i].value / VperW[i].weight) * remain;
      break;
    }
  }

  console.log(Math.round(MAX_VAL));
}

function rp(input) {
  input = input.trim().split("\n");
  let C = +input[0];
  var line = 1;
  let n = +input[line++];

  var value = input[line++].trim().split(" ").map(Number);
  var weight = input[line++].trim().split(" ").map(Number);
  call(n, value, weight, C);
}

if (process.env.USER === "") {
  rp(" ");
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
    rp(read);
  });

  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    rp(read);
    process.et(0);
  });
}
