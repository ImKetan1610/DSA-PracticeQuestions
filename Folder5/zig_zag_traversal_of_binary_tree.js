/*

Description
Given a binary tree, find the zig-zag traversal of the binary tree. Refer the figure for better understanding

            1
           / \
          /   \
         2     3
        / \   / \
       7   6 5   4


The zig-zag traversal of the above binary tree is [1,3,2,7,6,5,4].
Complete the given function which returns the zig-zag traversal of the binary tree.

Input
This is a function complete problem, the input format is given only for your understanding
The first line contains N, the number of elements in the binary tree.
The next line contains N space separated integers denoting the values in the binary tree.
N <= 1000

Output
Complete the function which returns the zig-zag traversal of the binary tree.

Sample Input 1 
5
1 3 2 4 5

Sample Output 1
1 2 3 4 5

*/

// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below

var zigzagTraversal = function (root) {
  return [];
};

function runProgram(ip) {
  ip = ip.trim().split("\n");

  const arr = ip[1].split(" ").map(Number);
  const n = +ip[0];

  let k = 0;
  let m = 0;
  let ans = [];
  let str = [];
  for (let i = 0; i < n; i++) {
    str.push(arr[i]);
    if (i === m - 1 + Math.pow(2, k) || i === n - 1) {
      m = i + 1;
      if (k % 2 == 1) {
        str.reverse();
      }
      k++;
      ans.push(str);
      str = [];
    }
  }

  let s = "";

  ans.forEach((i) => {
    i.forEach((j) => {
      s += j + " ";
    });
  });
  console.log(s);
}

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
