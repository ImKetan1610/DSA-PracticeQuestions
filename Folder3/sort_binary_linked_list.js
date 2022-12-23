/*

Problem Statement:
Sort the linked list containing 0's and 1's only and return a reference to the head node. 
The head is at position 0.
Complete the sortBinaryList in the editor below.
sort Binary List the following parameters:
-LinkedListNode pointer list:a reference to the head node in the list

Input:
Input Format:
The first line of input contains an integer n, the number of elements in the linked list.
The next line contains n integers, the node data values in order.

Constraints:
1 <= n <= 10^4
0 <= node values <= 1

Output:
Output Format:
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

// Complete the function below

var sortBinaryList = function (head) {
    let str = [];
    let current  = head;
    while(current!=null){
        str.push(current.data);
        current = current.next;
    }
    str = str.sort(function (a,b) {return a-b})
    let plain = new LinkedListNode(str[0]);
    let tempo = plain;
    for(let i=1;i<str.length;i++){
        tempo.next = new LinkedListNode(str[i]);
        tempo = tempo.next;
    }
    return plain;
};
