/*

Problem Statement:
You are given an array A of N integers. Now, two functions F(X) and G(X) are defined:
F(X) : This is the smallest number Z such that X < Z <= N and A[X] < A[Z]
G(X) : This is the smallest number Z such that X < Z <= N and A[X] > A[Z]
Now, you need to find for each index i of this array G(F(i)), 
    where 1 <= i <= N. If such a number does not exist, for a particular index i, output -1 as its answer. 
    If such a number does exist, output  A[G(F[i])]


Input:
Input Format:
The first line contains a single integer N denoting the size of array A. 
    Each of the next N lines contains a single integer, where the integer on the line denotes A[i]. Input Format

Constraints:
Print N space separated integers on a single line, 
    where the *i* th integer denotes A[G(F(i))] or -1, if G(F(i)) does not exist.

Output:
Output Format:
1 <= N <= 30000
0 <= A[i] <= 10^18

Sample Input:
8
3
7
1
7
8
4
5
2

Sample Output:
1 4 4 4 -1 2 -1 -1

*/

let NumbersGame = (n, arr) => {
  let nextGreater = (n, arr) => {
    let st = [];
    st[0] = n - 1;
    let res = [];
    res[n - 1] = -1;

    for (let i = n - 2; i >= 0; i--) {
      while (st.length !== 0 && arr[st[st.length - 1]] <= arr[i]) {
        st.pop();
      }
      if (st.length === 0) {
        res[i] = -1;
      } else {
        res[i] = st[st.length - 1];
      }
      st.push(i);
    }
    return res;
  };

  let nextSmaller = (n, arr) => {
    let st = [];
    st[0] = n - 1;
    let res = [];
    res[n - 1] = -1;

    for (let i = n - 2; i >= 0; i--) {
      while (st.length !== 0 && arr[st[st.length - 1]] >= arr[i]) {
        st.pop();
      }
      if (st.length === 0) {
        res[i] = -1;
      } else {
        res[i] = st[st.length - 1];
      }
      st.push(i);
    }
    return res;
  };

  let next_greater = nextGreater(n, arr);
  let next_smaller = nextSmaller(n, arr);

  let result = [];
  for (let i = 0; i < n; i++) {
    if (next_greater[i] !== -1 && next_smaller[next_greater[i]] !== -1) {
      result.push(arr[next_smaller[next_greater[i]]]);
    } else {
      result.push(-1);
    }
  }

  console.log(result.join(" "));
};

function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  let n = +input[0];
  let arr = [];
  let line = 1;
  for (let i = 0; i < n; i++) {
    arr.push(input[line]);
    line++;
  }
  NumbersGame(n, arr);
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
