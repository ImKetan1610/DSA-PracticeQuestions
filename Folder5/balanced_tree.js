/*

Description
Given a binary search tree, determine if it is height-balanced.
For this problem, a height-balanced binary search tree is defined as-
A binary search tree in which the left and right subtrees of every node differ in height by no more than 1.
You have to complete the function below.You'll be given the pointer to the root of the binary search tree.There's no need to take any input. Just return boolean true if it's a balanced tree and false if otherwise

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
False

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

function BalancedTrees(root) {
  function getHeight(node) {
    if (node === null) return 0;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
  }

  if (root === null) return true;
  return (
    BalancedTrees(root.left) &&
    BalancedTrees(root.right) &&
    Math.abs(getHeight(root.left) - getHeight(root.right)) < 2
  );
}
