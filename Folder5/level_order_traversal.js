/*

Description:
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
You have to complete the function below.You'll be given the pointer to the root of the binary tree.There's no need to take any input. Return an array that has all the level order traversal in separate arrays.

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
5
6
4
7
2

Sample Output 1
5
6 4
7 2

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

var levelOrder = function (root) {

  let ans = [];
  if (root == null) return ans;

  let queue = [];
  queue.push(root);

  while (queue.length != 0) {
    let list = [];
    let size = queue.length;
    for (let t = 0; t < size; t++) {
      let node = queue.shift();
      list.push(node.val);

      if (node.left != null) queue.push(node.left);
      if (node.right != null) queue.push(node.right);
    }
    ans.push(list);

    // console.log(list)
  }
  return ans;
};
