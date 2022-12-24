/*

Problem Statement:
You are given the head of the linked list, 
    you need to remove the maximum element in the linked list and return the head of the changed linked list.

Note:
You don’t need to take input/output. Just implement the given function.
If the linked list is empty, return a NULL value
If there is more than one maximum element remove the last occurring element in the linked list.

Input:
The first line contains the size of the linked list.
The second line contains the linked list in form of an array.
Function description:
removeMaximum(head) {

// Write your code here

}

Arguments:
head = Head node of the linked list.

Constraints:
1 <= N <= 10^4
1 <= Linked List Values <= 500

Output:
Return the head of the modified linked list.

Sample Input:
5
1 2 3 4 5

Sample Output:
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
-1

*/

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
var removeMaximum = function (head) {
  if (head.next === null) {
    return null;
  }
  if (head === null) {
    return null;
  }
  let curr = head;
  let max = head;
  let prev = new LinkedListNode(null);
  prev.next = head;
  while (curr.next !== null) {
    if (curr.next.data >= max.data) {
      prev = curr;
      max = curr.next;
    }
    curr = curr.next;
  }
  prev.next = prev.next.next;
  if (prev.data === null) {
    return prev.next;
  } else {
    return head;
  }
};
