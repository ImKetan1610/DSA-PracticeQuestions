/*

Description
Given therootof a binary tree, return the preordertraversal of its node's values.
You have to complete the function below.You'll be given the pointer to the root of the binary search tree.There's no need to take any input. Return an array with thepreorder traversalof its node's values.

Input
This is a function complete problem. There's no need to take any input.
The input given below is for your understanding-
The first line contains the number of nodes in the tree (t)
Next t lines contain a node A[i]
t <= 100
A[i] <= 1000

Output
Complete the function

Sample Input
5
2
5
6
4
7

Sample Output
2 5 4 7 6

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

function PreorderTraversal(root) {
  if (root == null) return;

  let ans = [];
  Travel(root);

  function Travel(root) {
    if (root == null) return;
    ans.push(root.val);
    Travel(root.left);

    Travel(root.right);
  }

  return ans;
}
