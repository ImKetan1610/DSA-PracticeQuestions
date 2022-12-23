/*

Problem Statement:
Given a linked list, rotate the list to the right by k places, where k is non-negative.
Complete the function, and return the head of the updated list

Input:
This is a function complete problem.
Refer to sample input for understanding
The first line contains the number of nodes (n)
Next n lines contains the nodes of the linked list
Next line contains k
n <= 1000
list[i] <= 1000

Output:
Complete the function

Sample Input:
3
1
2
3
2

Sample Output:
2 3 1

*/

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

var rotateRight = function (head, k) {
  //let prev=head;
  let cur = head;

  for (let i = 0; i < k; i++) {
    while (cur.next != null) {
      prev = cur;
      cur = cur.next;
    }
    cur.next = head;
    prev.next = null;
    head = cur;
  }
  return head;
};
