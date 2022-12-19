/*

Problem Statement:
You are given an integer array arr of size n. 
This array is queried q times. 
In each query, an element x is given. 
For each query, you have to print "YES" if the element exists in the array or "NO" if it doesn't exist


Input:
Input Format:
First line contains n the number of elements in the array
Second line contains n space separated integers, the elements of the array
Third line contains q, the number of queries
Fourth line contains q space separated integers

Constraints:
1 <= n <= 10e5
1 <= arr[i] <= 10e5
1 <= q <= 10e5
1 <= query[i] <= 10e5

Output:
For each query, print on a new line, "YES" if the element exists in the array, "NO" otherwise

Sample Input:
5
1 2 3 4 5
3
3 5 7

Sample Output:
YES
YES
NO

*/

function print(N1, arr1, N2, arr2) {
  let obj = {};
  for (let i = 0; i < N1; i++) {
    if (obj[arr1[i]] == undefined) {
      obj[arr1[i]] = 1;
    }
  }

  for (let i = 0; i < N2; i++) {
    if (obj[arr2[i]] == 1) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}

function runProgram(input) {
  // Write Code Here
  input = input.split("\n");
  let N1 = +input[0];
  let arr1 = input[1].split(" ").map(Number);
  let N2 = +input[2];
  let arr2 = input[3].split(" ").map(Number);

  print(N1, arr1, N2, arr2);
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
