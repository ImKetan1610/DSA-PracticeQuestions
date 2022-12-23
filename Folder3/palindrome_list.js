/*

Problem Statement:
Given a singly linked list, determine if it is a palindrome.
No need to take any input, You'll be given the pointer to the head of the linked list,
Complete the function below and return true if it's a palindrome and false if otherwise.

Input:
This is a function complete problem.
Refer to sample input for understanding
The first line contains the number of nodes (n)
Next n lines contains the nodes of the linked list.
n <= 1000
list[i] <= 1000

Output:
Complete the function

Sample Input:
3
1
2
1

Sample Output:
true

*/

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

var isPalindrome = function (head) {
  var curr = head;
  var isPalin = true;
  var stack = [];
  while (curr != null) {
    stack.push(curr.data);
    curr = curr.next;
  }
  while (head != null) {
    var i = stack.pop();
    if (head.data == i) {
      isPalin = true;
    } else {
      isPalin = false;
      break;
    }
    head = head.next;
  }
  return isPalin;
};
