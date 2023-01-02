/*

Description
Given a binary search tree, write a function to get the maximum width of the given tree. The maximum width of a tree is the maximum width among all levels.
The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes in the level).It is guaranteed that the answer will in the range of 32-bit signed integer.
You'll be given a pointer to the root node, You have to complete the function and return the maximum width of the tree.

Input
This is a function complete problem. There's no need to take any input.
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
4

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var widthOfBinaryTree = function (root) {
  return getMaxWidth(root);
};

function getMaxWidth(node) {
  var maxWidth = 0;
  var width;
  var h = height(node);
  var i;

  for (i = 1; i <= h; i++) {
    width = getWidth(node, i);
    if (width > maxWidth) maxWidth = width;
  }

  return maxWidth;
}

function getWidth(node, level) {
  if (node == null) return 0;

  if (level == 1) return 1;
  else if (level > 1)
    return getWidth(node.left, level - 1) + getWidth(node.right, level - 1);
  return 0;
}

function height(node) {
  if (node == null) return 0;
  else {
    var lHeight = height(node.left);
    var rHeight = height(node.right);

    return lHeight > rHeight ? lHeight + 1 : rHeight + 1;
  }
}
