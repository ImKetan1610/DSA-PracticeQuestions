/*

Problem Statement:
Given n passengers who are going to board the ship for a journey. 
    You are the captain of the ship and are responsible for the safety of the passengers.
You have an array W of size n which has weights of all the passengers. 
    For ensuring the safety of the passenger, 
    you are required to calculate the minimum number of lifeboats needed for the journey.
Each lifeboat can carry at most 2 people at the same time, 
    provided the sum of the weights of those people is within the limit k. (Max holding capacity of a lifeboat).
It is ensured that each person can be carried by a lifeboat.

Input:
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. 
    Then t test cases follow.
The first line of each test case contains 2 integers n and k (1 ≤ n, k ≤ 100000) 
    — The number of people and the weight limit of a boat respectively.
The second line of each test case contains n integers (1 ≤ Wi ≤ k). 
    The weight of each individual person.

Output:
For each test case, print the answer: The number of lifeboats required.

Sample Input:
2
4 5
3 5 3 4
4 3
1 2 2 3

Sample Output:
4
3

*/

const major = (n, k, arr) => {
  let count = n;
  let l = 0,
    r = n - 1;
  arr.sort((a, b) => {
    return a - b;
  });
  // console.log(arr)
  while (l < r) {
    let sum = arr[l] + arr[r];
    if (sum <= k) {
      count--;
      l++;
      r--;
    } else {
      r--;
    }
  }
  console.log(count);
};

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0],
    j = 1;
  for (let i = 0; i < tc; i++) {
    let nk = input[j++].trim().split(" ").map(Number);
    let n = nk[0],
      k = nk[1];
    let arr = input[j++].trim().split(" ").map(Number);
    major(n, k, arr);
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
