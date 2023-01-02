/*

Description
Given a binary search tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of thelongestpath between any two nodes in a tree. This path may or may not pass through the root.
You'll be given a pointer to the root node, You have to complete the function and return the diameter.

Input
This is a function complete problem.There's no need to take any input.
The input given below is for your understanding-
The first line contains the number of nodes in the tree (t)
Next t lines contains a node A[i]
t <= 100
A[i] <= 1000

Output
Complete the function

Sample Input 1 
10
67
99
100
36
78
21
82
98
33
45

Sample Output 1
8

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// Complete the function below

function func(root) {
  if (root == null) return 0;
  return 1 + Math.max(func(root.left), func(root.right));
}

var diameterOfBinaryTree = function (root) {
  if (root == null) return 0;

  let lh = func(root.left);
  let rh = func(root.right);

  return Math.max(
    lh + rh + 1,
    diameterOfBinaryTree(root.left),
    diameterOfBinaryTree(root.right)
  );
};
