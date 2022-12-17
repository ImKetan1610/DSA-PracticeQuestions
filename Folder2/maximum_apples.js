/*

Problem Statement:
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

function maximumApple(n, w, arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  let sum = 0;
  let arr2 = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
    arr2.push(sum);
  }
  //console.log(arr2)

  let count = 0;
  for (let i = 0; i <= arr2.length - 1; i++) {
    if (arr2[i] < w) {
      count++;
    }
  }
  console.log(count);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, w] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  maximumApple(n, w, arr);
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
