/*

Description:
Sort the linked list containing 0's and 1's only and return a reference to the head node. 
The head is at position 0.
Complete the sortBinaryList in the editor below.
sortBinaryList the following parameters:
-LinkedListNode pointer list:a reference to the head node in the list

Input
Input Format
The first line of input contains an integer n, the number of elements in the linked list.
The next line contains n integers, the node data values in order.

Constraints
1 <= n <= 10^4
0 <= node values <= 1

Output
Output Format
Output the n node values in sorted order.

Sample Input:
5
1 0 1 1 0

Sample Output:
0 0 1 1 1

Sample Input:
4
1 1 1 0

Sample Output:
0 1 1 1 

Hint:
The output is just the sorted linked list.

*/

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

var sortBinaryList = function (head) {
  if (head == null || head.next == null) {
    return;
  }
  var c0 = 0,
    c1 = 0;
  var temp = head;

  while (temp != null) {
    if (temp.data == 0) {
      c0++;
    } else {
      c1++;
    }
    temp = temp.next;
  }
  temp = head;
  while (c0 > 0) {
    temp.data = 0;
    temp = temp.next;
    c0--;
  }
  while (c1 > 0) {
    temp.data = 1;
    temp = temp.next;
    c1--;
  }
  return head;
};
