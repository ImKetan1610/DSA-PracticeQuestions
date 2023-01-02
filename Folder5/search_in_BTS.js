/*

Description

Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such a node doesn't exist, you should return NULL.

You have to complete the function below.You'll be given the pointer to the root of the binary search tree and a value.There's no need to take any input. Return the pointer to the node.


Input
This is a function complete problem. There's no need to take any input.

The input given below is for your understanding-

The first line contains the number of nodes in the tree (t)

Next t lines contain a node A[i]

Next line contains the value of the node that you have to find

t <= 100

A[i] <= 1000


Output
Complete the function.

The output should have the left node's, the node's, and the right node's value. If any of them doesn't exist output should be 'No Node'


Sample Input 1 

5
5
6
4
7
2
4
Sample Output 1

2
4
No Node

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

var searchBST = function (root, val) {
  while (root !== null && root.val !== val) {
    if (root.val < val) {
      root = root.right;
      continue;
    }
    if (root.val > val) {
      root = root.left;
      continue;
    }
  }
  return root;
};
