/*

Problem Statement:
Given a linked list consisting of nodes and given a number N. 
The task is to find the nth node from the end of the linked list.
No need to take any input, just complete the function below and return the nth node.

Input:
This is a function complete problem.
Refer to sample input for understanding
The first line contains the number nodes (t)
Next t lines contains the nodes of the linked list
Next line contains the number n
t <= 1000
list[i] <= 1000

Output:
Complete the function

Sample Input:
3
1
2
3
1

Sample Output:
3


*/

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

function nth_node(head, n) {
  let count = 0;
  let p = head;
  while (p) {
    count++;
    p = p.next;
  }
  let cur = head;
  let N = count + 1 - n;
  let i = 1;
  while (cur) {
    if (i == N) {
      return cur.data;
    }
    i++;
    cur = cur.next;
  }
}
