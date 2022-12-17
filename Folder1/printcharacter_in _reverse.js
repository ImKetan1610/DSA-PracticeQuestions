/*

Problem Statement:
You are given a string, whose size is stored in a variable with the name N
You have to print all the characters in the string in reverse order, on a new line
For example, 
consider the string stored in str = "nrupul", and the value stored in N = 6, 
then the required output will be
l
u
p
u
r
n

Input:
The first line of the input contains the value stored in N
The next line contains the value stored in str

Output:
Print all the characters stored instr, in reverse order, one character per line

Sample Input:
6
ankush

Sample Output:
h
s
u
k
n
a

Hint:
In the sample test case, the value stored in N = 6, and the value stored in str = "ankush"
Therefore, the required output will be
h
s
u
k
n
a

*/

function printCharReverse(N, str) {
  //write code here
  for (let i = N - 1; i >= 0; i--) {
    console.log(str[i]);
  }
}
