/*

Description

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).You'll be given a pointer to the root node, You have to complete the function and return true if it's symmetric and false if otherwise

Refer the following figure for better understanding.

                1
               / \
              /   \
             2     2
            / \   / \
           3   4 4   3

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
7
1
2
2
3
4
4
3

Sample Output 1
true

Hint
This is not a binary search tree but a general binary tree.
The tree structure here would be-
1

2           2

3   4      4   3

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var isSymmetric = function (root) {
  function isMirror(node1, node2) {
    if (node1 == null && node2 == null) {
      return true;
    }
    if (node1 != null && node2 != null && node1.key == node2.key) {
      return (
        isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
      );
    }
    return false;
  }
  return isMirror(root, root);
};
