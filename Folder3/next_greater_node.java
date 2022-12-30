/*

Description:
You are given the head of a linked list with n nodes.
For each node in the list, find the value of the next greater node. 
That is, for each node, find the value of the first node that is next to it and has a strictly larger value than it.
Return an integer array answer where answer[i] is the value of the next greater node of the ith node (1-indexed). 
If the ith node does not have a next greater node, set answer[i] = 0.
Note: You don't need to take input or print output. 
Just complete the function nextGreaterNode() and return the value

Input:
Input Format:
The first line contains the number of testcases, t
For each testcase:
The first line contains the number of nodes, n
The second line contains the value of each node.

Constraints:
1<=t<=10
1<=n<=10^5
1<=val<=10^5

Output:
Return the list of n elements where list[i] is the value of the node that has a greater value than the current node

Sample Input:
1
3
2 1 5

Sample Output:
5 5 0

*/

import java.util.Scanner;

import java.util.Arrays;
import java.util.Stack;

public class Main{
    public static void main(String[] args){
        Scanner sc= new Scanner(System.in);
        int t=sc.nextInt();
        while(t--!=0){
            int n=sc.nextInt();
            Node head=new Node(0);
            Node temp=head;
            for(int i=0; i<n; i++){
                Node newNode=new Node(sc.nextInt());
                temp.next=newNode;
                temp=temp.next;
            }
            head=head.next;
            temp=head;
            Node pre=null;
            Node next= null;
            while(temp!=null){
                next=temp.next;
                temp.next=pre;
                pre=temp;
                temp=next;
            }
            head=pre;
            int[] right=new int[n];
            Stack<Integer> stack = new Stack<>();
            for(int i=n-1; i>=0; i--){
                while(!stack.isEmpty() && head.data>=stack.peek()){
                    stack.pop();
                }
                if(stack.isEmpty()){
                    right[i]=0;
                }
                else{
                    right[i]=stack.peek();
                }
                stack.push(head.data);
                head=head.next;
            }
            StringBuilder bag=new StringBuilder("");
            for(int num: right){
                bag.append(num+" ");
            }
            System.out.println(bag);
            
        }
    }
}

class Node{
    int data;
    Node next;
    public Node(int data){
        this.data=data;
        this.next=null;
    }
}
