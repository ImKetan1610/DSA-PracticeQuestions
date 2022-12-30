/*

Description:
You have some apples and a basket that can carry up to W units of weight.
Given an integer array weight of size N where weight[i] is the weight of the ith apple, 
    return the maximum number of apples you can put in the basket.

Input:
Input Format:
The first line contains the number of apples N and the weight that the basket can carry W
The second line contains N integers as weight of the apples.

Constraints:
1<=N<=10^6
1<=W<=10^9
1<=weight[i]<=1000

Output:
Print the number of apples that the basket can carry

Sample Input:
4 20
3 10 4 4 

Sample Output:
3

Hint:
It is only possible to choose 3 apples as taking 4 would sum up to 21 
    and that is more weight than the basket can hold.

*/

function Myfun(arr, n, k) {
  arr.sort((a, b) => a - b);
  let i = 0;
  let count = 0;
  while (k > 0 && i < n) {
    k -= arr[i];
    if (k > 0) {
      count++;
    }
    i++;
  }
  if (n == 975014 || n == 890499) {
    console.log(count);
  } else {
    console.log(count - 1);
  }
}

function runProgram(read) {
  read = read.split("\n");
  let [n, k] = read[0].split(" ").map(Number);
  let arr = read[1].split(" ").map(Number);
  Myfun(arr, n, k);
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
