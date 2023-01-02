/*

Description
Given the root of a binary tree, return the inorder traversal of its nodes' values.
You have to complete the function below.You'll be given the pointer to the root of the binary search tree.There's no need to take any input. Return the array with the inordertraversal of its nodes' values.

Input
This is a function complete problem. There's no need to take any input.
The input given below is for your understanding-
The first line contains the number of nodes in the tree (t)
Next t lines contain a node A[i]
t <= 100
A[i] <= 1000

Output
Complete the function

Sample Input 1 
5
2
5
6
4
7

Sample Output 1
4 5 7 2 6

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

let ans = [];
function inorderTraversal(root) {
  if (root === null) {
    return root;
  }

  inorderTraversal(root.left);
  ans.push(root.val);
  inorderTraversal(root.right);

  return ans;
}
