/*

Description:
You are given a string whose size is stored in a variable with the name N, stored in a variable with the name str
You have to print all the characters in the string, which are present at odd indexes
For example, consider the string stored in str = "nrupul", and the value stored in N = 6, then the output will be
r
p
l
The characters stored at odd positions are r - index 1, p - index 3, l - index 5, 
    hence they are printed, each character on a new line
Note : The indexing in the string starts from 0

Input:
The first line of the input contains the value stored in N
The next line of the input contains the value stored in str

Output:
Print the characters at odd indexes, as shown in the problem statement, each character on a new line

Sample Input:
6
ankush

Sample Output:
n
u
h

Hint:
In the sample test case, the value stored in N = 6, and the value stored in str = "ankush"
Therefore, the characters at odd positions are
n - 1, u - 3, h - 5
Therefore, the output becomes
n
u 
h

*/

function charAtOddPos(N, str) {
  if (N == str.length) {
    return;
  }
  if (N % 2 !== 0) {
    console.log(str[N]);
  }

  charAtOddPos(N + 1, str);
  //complete the rest of the function
}
