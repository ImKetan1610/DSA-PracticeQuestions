/*

Problem Statement:
Given a non-empty, singly linked list with the head node head, return a middle node of the linked list.
If there are two middle nodes, return the second middle node.
Complete the function below, no need to take any input.


Input:
This is a function complete problem.
Refer to sample input for understanding
The first line contains the number of nodes (t)
Next t lines contains the node of the linked list
t <= 1000
list[i] <= 1000

Output:
Complete the function

Sample Input:
3
1
2
3

Sample Output:
2

*/

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow.data;
};
