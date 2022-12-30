/*

Description:
You have been given the pointer to the head nodes of two linked lists. 
Your task is to check if the given two linked lists are happy or not.
Two Linked Lists are said to be happy if, when compared from the last, 
    the first linked list is lexicographically smaller than the second linked list. 
If the Lists are happy then return “true”. Otherwise, return “false”.
Note:
You don’t need to take input/output. Just implement the given function.
It is guaranteed that both the linked lists are unique.

Input:
The first line of input contains a single integer T, the number of test cases.
For each test case, the first line of input contains two space-separated integers N and M, 
    the size of the first and second linked list respectively.
The next line contains N space-separated elements of the first linked list.
The next line contains M space-separated elements of the second linked list.

Function description:
reverseCompare(head1,head2) {

// Write your code here

}

Arguments:
head1 = head node of the first LinkedList.
head2 = head node of the second LinkedList

Constraints:
1 <= T <=10
1 <= N, M <= 10^4
1 <= node.val <= 10^6

Output:
Return “true” if lists are happy. Otherwise, return “false” without the quotes.

Sample Input:
1
3 4
3 2 1 
1 3 4 5

Sample Output:
true

Sample Input:
1
4 4
2 1 3 5 
5 3 1 2

Sample Output:
false

Hint:
Explanation of Sample 1
After reversing, the second list becomes 5->4->3->1, and the first linked list becomes 1->2->3. 
Clearly, 1 is lexicographically smaller than 5, so return true.

*/

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

var reverseCompare = function (head1, head2) {
  let list1 = reverseList(head1);
  let list2 = reverseList(head2);

  while (list1 !== null && list2 !== null && list1.data === list2.data) {
    list1 = list1.next;
    list2 = list2.next;
  }

  if (list1 !== null && list2 !== null) {
    return list1.data > list2.data ? "false" : "true";
  }

  if (list1 !== null && list2 === null) {
    return "false";
  }
  if (list1 === null && list2 !== null) {
    return "true";
  }
  return "true";
};

const reverseList = (head) => {
  let prev = null;
  let next = null;
  let ptr = head;

  while (ptr !== null) {
    next = ptr.next;
    ptr.next = prev;
    prev = ptr;
    ptr = next;
  }
  head = prev;
  return head;
};
