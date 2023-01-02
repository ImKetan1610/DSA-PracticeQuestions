/*

Description
You are given the root of a binary tree where each node has a value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is0 -> 1 -> 1 -> 0 -> 1, then this could represent01101in binary, which is13.
For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.
You have to complete the function below.You'll be given the pointer to the root of the binary search tree.There's no need to take any input. Return the sum of these numbers.

Input
This is a function complete problem. There's no need to take any input.
The input given below is for your understanding-
The first line contains the number of nodes in the tree (t)
Next t lines contain a node A[i]
t <= 100
A[i] = 1 or 0

Output
Complete the function

Sample Input 1 
5
0
1
1
0
1

Sample Output 1
6

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

function sumRootToLeaf(root) {
  let sum = 0;
  let binary = "";

  function helper(node, binary) {
    if (node === null) {
      return;
    }
    binary += node.val;
    if (node.left === null && node.right === null) {
      sum += parseInt(binary, 2);
    }
    helper(node.left, binary);
    helper(node.right, binary);
  }
  helper(root, binary);
  return sum;
}
