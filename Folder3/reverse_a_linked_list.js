/*

Problem Statement:
Given the pointer to the head node of a linked list, 
change the pointers of the nodes so that their order is reversed. 
The head pointer given may be null meaning that the initial list is empty.
Complete the reverse function in the editor below.
reverse has the following parameter:
Linked List Node pointer head:a reference to the head of a list

Input:
The first line contains an integer t, the number of test cases.
Each test case has the following format:
The first line contains an integer n, the number of elements in the linked list.
Each of the next n lines contains an integer, the data values of the elements in the linked list.
t <= 50
n <= 1000
list[i] <=1000

Output:
For each test case print the updated Linked List

Sample Input:
1
5
1
2
3
4
5

Sample Output:
5 4 3 2 1 

*/

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

function reverse(head2) {
  let head;
  let node;
  let i = 0;
  while (head2) {
    if (!i) {
      head = new LinkedListNode(head2.data);
      // node=head;
      i++;
    } else {
      node = new LinkedListNode(head2.data);
      node.next = head;
      head = node;
    }
    head2 = head2.next;
  }

  return node;
}
