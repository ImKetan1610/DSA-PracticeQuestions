/*

Description
Given a Binary Tree, convert it into its mirror.You'll be given a pointer to the root node, You have to complete the function and return the updated root of the binary tree.

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

                    100

          99

                                        98

                              82

                    78

67

                    45

          36

                              33

                    21

                    21

                              33

          36

                    45

67

                    78

                              82

                                        98

          99

                    100

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// Complete the function below

function swap(root, root1, root2) {
  root.left = root2;
  root.right = root1;
}

function mirror(root) {
  if (root == null) return root;
  let left = mirror(root.left);
  let right = mirror(root.right);
  swap(root, left, right);
  return root;
}
