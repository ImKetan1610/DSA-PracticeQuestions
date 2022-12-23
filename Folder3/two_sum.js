/*

Problem Statement:
Given a sorted array of integers, return indices of two numbers such that they add up to a target value.
Print -1 -1 if not found.

Input:
First line contains T, number of test cases
Second line contains N and B where N is the size of the array and B is the target sum
1 <= T <= 10
2 <= N <= 1000, 2 <= B <= 3e5
1 <= Ai <= 1e5
it is guaranteed that sum of N over all test cases is at most 1000.

Output:
Two values a, b i.e. indexes of any two elements that are found else -1 -1 if not found. 
    Indexing is 0 based indexing. If multiple solutions exist, output the one with the lowest values of a and b.
Note - the answer should print the smaller index first followed by the larger index. 
    The smallest such index pair should be printed.
If we have 2 sorted pairs [a1, b1] and [a2, b2], 
    the first pair is said to be smaller than the second one if a1 < a2 or (a1 == a2 and b1 < b2 )

Sample Input:
3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49

Sample Output:
0 1
3 4
-1 -1

*/

//Enter code here
function Twosum(N, K, arr) {
  let f = false;
  let i = 0;
  let j = N - 1;
  let ind1 = -1;
  let ind2 = -1;

  while (i < j) {
    let sum = arr[j] + arr[i];
    if (sum == K) {
      f = true;
      ind1 = i;
      ind2 = j;
      break;
    } else if (sum < K) i++;
    else j--;
  }
  console.log(ind1, ind2);
}

function runProgram(input) {
  let ni = input.trim().split("\n");
  let tc = +ni[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +ni[line].trim().split(" ")[0];
    let K = +ni[line++].trim().split(" ")[1];
    let arr = ni[line++].trim().split(" ").map(Number);
    Twosum(N, K, arr);
  }
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
