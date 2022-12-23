/*

Problem Statement:
You are given a sorted linked list containing unique values. 
You have to manipulate the linked list such that the difference between every two adjacent node values should be exactly equal to 1. 
You can only insert some extra between existing nodes in the linked list.

Note:
You don’t need to take input/output. Just implement the given function.

Input:
The first line of input contains the N denoting the number of elements of the linked list.
The second line contains the elements of the linked list.

Function description:
fillGaps(head) {

// Write your code here

}

Arguments:
head = head node of the LinkedList.

Constraints:
1 <= N <= 10^4
1<= node.val <=10^6

Output:
Return the head of the modified linked list.

Note:
The sample output will contain the modified Linked List.

Sample Input:
3
4 7 8

Sample Output:
4 5 6 7 8

Sample Input:
5
2 5 8 9 11

Sample Output:
2 3 4 5 6 7 8 9 10 11

Hint:
Explanation of Sample 1
The given linked list has elements 4 and 7. 
We can insert nodes 5 and 6 between 4 and 7 to make a new Linked List having a difference between every pair of adjacent nodes equal to 1. 
So, the linked list becomes 4->5->6->7.

*/

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

var fillGaps = function (head) {
  let arr = [];
  let cur = head;
  while (cur != null) {
    arr.push(cur.data);
    cur = cur.next;
  }
  let len = arr[arr.length - 1];
  let initial = arr[0];
  let ans = [];
  let main = new LinkedListNode(-1);
  let current = main;
  // console.log(len,initial)
  for (let i = initial; i <= len; i++) {
    current.next = new LinkedListNode(i);
    current = current.next;
  }
  main = main.next;
  return main;
};
