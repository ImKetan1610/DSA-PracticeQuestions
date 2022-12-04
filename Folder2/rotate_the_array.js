/*

Problem Statement:
You are given an array of n elements and an integer k, 
you need to rotate the array by k units towards right direction ( => ).

Input:
1<=T<=10
1<=N<=1000, 0<=K<=1000
1 <= Ai <= 1000000

Output:
out put N elements, elements of the array , rotated by K units

Sample Input:
3
3 1
1 2 3

2 2
1 2
2 3
1 2

Sample Output 1

3 1 2
1 2
2 1

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;

  for (let i = 0; i < tc; i++) {
    let [n, k] = input[line].trim().split(" ").map(Number);
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    k %= n;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    console.log(reverse(arr, k, arr.length - 1));
  }
}

let reverse = (arr, s, e) => {
  while (s < e) {
    let temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
    s++;
    e--;
  }
  return arr.join(" ");
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
