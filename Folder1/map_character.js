/*

Problem Statement:
You are given a number stored in a variable with the name N
You have to print the first N English smaller case alphabets, 
mapped with the values starting from 1 toN, including the value stored in N.
For example, consider the value stored in N = 3, then the required output will be

a-1
b-2
c-3

Note : The value stored in N will always be less than or equal to 26, and greater than 0 

Input:
The first and the only line of the input contains the value stored in N

Output:
Print the output as shown in the problem statement

Sample Input:
5

Sample Output:
a-1
b-2
c-3
d-4
e-5

Hint:
In the sample test case, the value stored inN = 5. 
Therefore, we have to print the first 5 smaller case English alphabets. Therefore, the output becomes
a-1
b-2
c-3
d-4
e-5

*/

function mapChar(N) {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < N; i++) {
    console.log(lowerCase[i] + "-" + (i + 1));
  }
}
