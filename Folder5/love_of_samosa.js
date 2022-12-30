/*

Description:
Amit went down to the Samosa street to have some. 
But he only has K units of money with him. 
There are N shops on the street and unfortunately, all of them have only one samosa remaining. 
You are also given an array A, where Ai is the cost of a samosa on the i'th shop.
Find the maximum samosas that Amit can eat.

Input:
Input Format:
First line contains two space-separated integers N and K.
Second line contains N space separated integers, the cost of a samosa on the shops.

Output Format:
1 ≤ N ≤ 1000
0 ≤ K ≤ 1000
0 ≤ Ai ≤ 100

Output:
Output Format:
Print the required answer

Sample Input:
4 10
5 4 2 4

Sample Output:
3

*/

function Samosa(n, k, arr) {
  let items = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    items = items + arr[i];
    if (items <= k) {
      count++;
    } else {
      break;
    }
  }
  return count;
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var [n, k] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(Samosa(n, k, arr));
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
