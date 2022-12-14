/*

Problem Statement:
You are given the head of a linked list. Delete the middle node, 
and return the head of the modified linked list.
The middle node of a linked list of size n is the 
⌊n / 2⌋th node from the start using 0-based indexing, 
where ⌊x⌋ denotes the largest integer less than or equal to x.

Note: You don't have to take input or print output, 
just complete the function deleteMiddle() and return the head pointer of the modified list

Input:
Input Format:
The first line contains the number of nodes , N
The second line contains the values of nodes.

Constraints:
1<=N<=10^4

Output:
Complete the function deleteMiddle() and return the head of modified list


Sample Input:
7
3 1 3 4 5 5 2 

Sample Output:
3 1 3 5 5 2 

Sample Input:
6
3 3 2 3 3 4 

Sample Output:
3 3 2 3 4 

*/

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

var deleteMiddle = function (head, n) {
  let arr = [];
  let cur = head;
  while (cur != null) {
    arr.push(cur.data);
    cur = cur.next;
  }
  let z = Math.floor(n / 2);
  let ans = [];
  for (let i = 0; i < n; i++) {
    if (i == z) {
      continue;
    } else {
      ans.push(arr[i]);
    }
  }
  let main = new LinkedListNode(ans[0]);
  let temp = main;
  for (let i = 1; i < ans.length; i++) {
    temp.next = new LinkedListNode(ans[i]);
    temp = temp.next;
  }
  return main;
};
