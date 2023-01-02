/*

Description
Given a Binary Tree and an integer k. Print all nodes that are at distance k from the root (root is considered at distance 0 from itself).
You'll be given a pointer to the root node and the integer k, You have to complete the function and push the data of all the nodes which are at k distance from the root into the given array.

Input
This is a function complete problem.There's no need to take any input.
The input given below is for your understanding-
The first line contains the number of nodes in the tree (t)
Next t lines contains a node A[i]
Next line contains the integer k
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
3

Sample Output 1
33
82

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// Complete the function below and use the array below

main_arr = [];
function atKDist(root, k) {
  if (root == null) return;

  if (k == 0) {
    main_arr.push(root.val);
  }

  atKDist(root.left, k - 1);
  atKDist(root.right, k - 1);

  return main_arr;
}
