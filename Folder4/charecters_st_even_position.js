/*

Description:
You are given a string whose size is stored in a variable with the name N, stored in a variable with the name str
You have to print all the characters in the string, which are present at even indexes
For example, consider the string stored in str = "nrupul", and the value stored in N = 6, then the output will be
n
u
u
The characters stored at odd positions are n - index 0,u - index 2, l - index 4, 
    hence they are printed, each character on a new line
Note : The indexing in the string starts from 0

Input:
The first line of the input contains the value stored in N
The next line of the input contains the value stored in str

Output:
Print the characters at even indexes, as shown in the problem statement, each character on a new line

Sample Input:
6
ankush

Sample Output:
a
k
s

Hint:
In the sample test case, the value stored in N = 6, and the value stored in str = "ankush"
Therefore, the characters at even positions are
a - 0, k - 2, s - 4
Therefore, the output becomes
a
k
s

*/

function charAtEvenPos(N, str) {
  //complete the recursive function here. The initial value of N = 0;
  if (N === str.length) {
    return;
  }
  if (N % 2 == 0) {
    console.log(str[N]);
  }
  charAtEvenPos(N + 1, str);
}
