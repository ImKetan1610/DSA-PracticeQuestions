/*

Description:
Harry and John are two good friends. 
Harry gives John a task that will test his skills in Linked list and mathematics. 
He gave him a linked list and asked him to return the head of the same list by making some changes to it. 
He told him to group all the prime numbers together followed 
    by the nodes having non-prime numbers in the same order as it was given in the original list. 
Help John in completing his task.
You have been given the head of the singly linked list, output the head of the modified list.
Note
You don’t need to take input/output. Just implement the given function.

Input:
The only line of input contains the elements of the linked list.
Function description:
funMaths(head) {
// Write your code here
}

Arguments:
head = head node of the LinkedList.

Constraints:
Number of nodes in Linked list is in range [1,10^4]
1 <= node.val <= 10^6

Output:
Return the head of the modified linked list.

Sample Input:
5
1 2 3 4 5

Sample Output:
2 3 5 1 4

Sample Input:
7
2 1 3 5 6 4 7

Sample Output:
2 3 5 7 1 6 4

Hint:
Explanation of Sample:
There are three prime numbers in the list i.e. 2,3 and 5. 
So keep them in front of the list. 
The remaining elements are grouped together in the end. 
So, the list becomes [2,3,5,1,4].

*/

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
var funMaths = function (head) {
  let len = 0;
  let ptr = head;
  while (ptr !== null) {
    len++;
    ptr = ptr.next;
  }

  // store all prime and nonPrime to stack
  let prime = [];
  let nonPrime = [];

  let ptr1 = head;
  while (ptr1 !== null) {
    if (isPrime(ptr1.data)) {
      prime.push(ptr1.data);
    } else {
      nonPrime.push(ptr1.data);
    }
    ptr1 = ptr1.next;
  }

  let ptr2 = head;
  while (ptr2 !== null) {
    if (prime.length !== 0) {
      ptr2.data = prime.shift();
    } else {
      ptr2.data = nonPrime.shift();
    }
    ptr2 = ptr2.next;
  }
  return head;
};

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
