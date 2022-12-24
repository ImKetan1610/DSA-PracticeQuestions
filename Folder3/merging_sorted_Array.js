/*

Problem Statement:
Given two arrays of size n and m (unsorted), sort them and then merge them. 
    NOTE ; you can easily take all the input in one array and then sort them.
which is of (n+m)*log(n+m) complexity but try to do it in (n*logn + m*logm + n + m) complexity, 
    i.e. merge them in linear time.

Input:
1<=T<=10
1<= N,M <= 100000
1 <= Ai <= 1000000000 (array1 of n elements)
1 <= Aj <= 1000000000 (array2 of m elements)

Output:
output N the total size of the output array and the array in the next line.

Sample Input:
1
2 3
1 2
3 2 1

Sample Output:
5
1 1 2 2 3

*/

function mergingSortedArrays(arr, arr1, n, m) {
  arr = [...arr, ...arr1];
  arr.sort(function (a, b) {
    return a - b;
  });

  console.log(n + m);
  console.log(arr.join(" "));
}

function runProgram(input) {
  input1 = input.trim().split("\n");
  let tc = +input1[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let array = input1[line].trim().split(" ").map(Number);
    let [n, m] = array;
    line++;
    let arr = input1[line].trim().split(" ").map(Number);
    line++;
    let arr1 = input1[line].trim().split(" ").map(Number);
    line++;
    mergingSortedArrays(arr, arr1, n, m);
  }
}

if (process.env.USER === "") {
  runProgram("");
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
