/*

Description:
You are given a string, whose size is stored in a variable with the name N
The string itself is stored in a variable with the name,str
Print all the characters, stored instr, on a new line
For example, if the value stored inN = 6, and the string is str = "nrupul", then the required output will be
n
r
u
p
u
l

Input:
The first line of the input contains the value stored in N
The next line contains the string stored in str

Output:
Print all characters of the string stored in str, on a new line, as shown in the problem statement

Sample Input:
6
ankush

Sample Output:
a
n
k
u
s
h

Hint:
In the sample test case, the value stored in N = 6, and the value stored in str = "ankush"
Therefore, the required output will be
a
n
k
u
s
h

*/

function printChar(N, str) {
  //write a recursive function to print all the characters of the string. The initial value of N = 0
  if (N === str.length) {
    return;
  }
  console.log(str[N]);
  return printChar(N + 1, str);
}
