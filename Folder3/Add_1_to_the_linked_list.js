/*

Problem Statement:
A number is given represented in the form of a linked list. Add one to it.

Input:
This is a function complete problem. You don't have to take the input just complete the function given.
The sample test case is given only for your understanding.

Output:
Return head of linked list which is the new number after incrementing one.

Sample Input:
4
2 3 1 3

Sample Output:
2314

Hint:
In the sample test case, the number represented by the linked list is 2->3->1->3 is 2313. 
    After adding one the number becomes 2314, as given in the output.

*/

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

function Revers(head) {
  let cur = head;
  let pre = null;
  let output = null;
  while (cur !== null) {
    output = cur.next;
    cur.next = pre;
    pre = cur;
    cur = output;
  }
  head = pre;
  return head;
}

var addOneToLinkedList = function (head) {
  head = Revers(head);
  pre = null;
  cur = head;
  curry = 1;
  sum = 0;
  while (cur != null) {
    sum = cur.data + curry;
    curry = Math.floor(sum / 10);
    cur.data = sum % 10;
    pre = cur;
    cur = cur.next;
  }
  if (curry > 0) {
    pre.next = new LinkedListNode(curry);
  }
  head = Revers(head);
  return head;
};
