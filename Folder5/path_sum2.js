/*

Description:
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
You have to complete the function below.You'll be given the pointer to the root of the binary tree and the sum.There's no need to take any input. Return an array stores all the root to leaf paths array.

Input
This is a function complete problem. There's no need to take any input.
The input given below is for your understanding-
The first line contains the number of nodes in the tree (t)
Next t lines contain a node A[i]
Next line contains the sum
t <= 100
A[i] <= 1000

Output
Complete the function,
If there's no such path that satisfies the condition, the output should be - 'No Path Exists'

Sample Input 1 
5
5
6
4
7
2
9

Sample Output 1
5 4

Hint
In this case, the return should be of the form [ [5,4] ].

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

var pathSum = function (root, sum) {
  if (!root) return [];
  let res = [];

  const getPath = (root, sum, curr = []) => {
    if (root) {
      curr.push(root.val);
      sum -= root.val;
      if (!root.left && !root.right && sum === 0) {
        res.push(curr.slice());
      }
      getPath(root.left, sum, curr);
      getPath(root.right, sum, curr);
      curr.pop();
    }
  };
  getPath(root, sum);
  return res;
};
