/*

Description:
You are given an arrayAof size N, and an integer K.
You have to find out if there is a subset in the array A, such that
1. The number of distinct elements in the subset is `K`
2. The sum of all the elements in the subset is odd
If the above two conditions are true, print True, else print False

Input:
The first line of the input contains N, the size of the array
The next line contains N space separated integers, denoting the elements in the array
The last line of the input contains K, as mentioned in the problem statement

Constraints:
1 <=N<= 18
1 <=A[i]<= 100

Output:
If a subset exists, such that both the conditions given in the problem statement is true, print True, 
else print False

Sample Input:
3 
1 2 3
2

Sample Output:
True

Sample Input:
3
2 2 2
2

Sample Output:
False

Hint:
In the first sample test case, all the subsets of the given array are
[]
[1]
[1, 2]
[1, 2, 3]
[1, 3]
[2]
[2, 3]
[3]

The value of K = 2. The subset [2,3] has 2 distinct elements, and the sum is 5. Hence, the answer is True
In the second test case, there is no subset with sum odd. Therefore, the answer is False

*/

function check(arr, k) {
  let sum = 0;
  let checker = [];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (!checker.includes(arr[i])) {
      checker.push(arr[i]);
    }
  }
  return sum % 2 && checker.length === k;
}

let found = false;

function getSubset(A, n, k, i = 0, sub = []) {
  if (sub.length && check(sub, k)) {
    console.log("True");
    found = true;
    return;
  }
  for (let j = i; j < n && !found; j++) {
    sub.push(A[j]);
    getSubset(A, n, k, j + 1, sub);
    sub.pop();
  }
}

function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let arr = input[1].split(" ").map(Number);
  let k = +input[2];
  getSubset(arr, n, k);
  if (!found) console.log("False");
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
