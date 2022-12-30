/*

Description:
Your friend has OCD and he likes is list in such a way that the value of the node 
    at odd index is even and the value of the node at even index is odd.
You have a linked list of size n with indexes going from 1 to n.
Complete the boolean function evenOddMix in the editor below.
You do not have to output anything.
Only return true if the list is how your friend likes it, false otherwise.
evenOddMix the following parameters:
-LinkedListNode pointer list:a reference to the head node in the list

Input
Input Format
The first line of input contains an integer n, the number of elements in the linked list.
The next line contains n integers, the node data values in order.

Constraints
1 <= n <= 10^5
1 <= node values <= 10^4

Output
Output Format
Output YES if the list is in accordance with your friends needs NO otherwise.

Sample Input:
5
1 34 5 2 108

Sample Output:
NO

Sample Input:
4
48 1 26 55

Sample Output:
YES

Hint:
In the first testcase only 108 (even) is at 5 (odd) position , 
    except this all numbers have modularity as their indexes.
In the second testcase all numbers and their indexes have different modularity wih respect to 2

*/

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
var evenOddMix = function (head) {
  let curr = head;
  let res = 1;
  while (curr != null) {
    if (curr.data % 2 == 0 && res % 2 == 1) {
      return false;
    } else if (curr.data % 2 == 1 && res % 2 == 0) {
      return true;
    }
    curr = curr.next;
  }
};
