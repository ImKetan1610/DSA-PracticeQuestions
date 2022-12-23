/*

Problem Statement:
Given the pointer to the head node of a linked list and an integer to insert at a certain position, 
create a new node with the given integer as its data attribute, 
insert this node at the desired position and return the head node.

A position of 0 indicates head, a position of 1 indicates one node away from the head, and so on. 
The head pointer given may be null meaning that the initial list is empty.

Complete the function insert Node At Position in the editor below. 
It must return a reference to the head node of your finished list.

insert Node At Position has the following parameters:
head: a SinglyLinkedListNode pointer to the head of the list
data: an integer value to insert as data in your new node
position: an integer position to insert the new node, zero-based indexing

Input:
The first line contains an integer n, the number of elements in the linked list.
Each of the next n lines contains an integer SinglyLinkedListNode[i].data.
The next line contains an integer, the data of the node that is to be inserted.
The last line contains an integer position.
n <= 1000
list[i] <= 1000

Output:
Print the updated Linked List

Sample Input:
3
16
13
7
1
2

Sample Output:
16 13 1 7

*/

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
  if (head == null) {
    return new LinkedListNode(data);
  }
  if (position == 0) {
    let node = new LinkedListNode(data);
    node.next = head;
    head = node;
  }
  let cur = head;
  let count = 1;
  while (cur != null) {
    if (count == position) {
      let node = new LinkedListNode(data);
      let temp = cur.next;
      cur.next = node;
      cur = cur.next;
      cur.next = temp;
    }

    count++;
    cur = cur.next;
  }
  return head;
}
