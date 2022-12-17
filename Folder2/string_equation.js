/*

Problem statement:
You are given a string stored in a variable with the name str, 
containing a mix of upper case and lower case English characters.
The length of the string is stored in stored in a variable with the name N.
You have to solve the equation 5*x + 3*y, where x is the number of small case English characters in the string,
while y is the number of upper case English characters in the string
For example, consider the value stored in N = 5, and str = AmanZ 
The number of upper case characters in the string is 2 -A, Z, 
and the number of small case characters in the string is 3 -m,a,n
Therefore, the value of the equation5*x + 3*y, becomes5*3 + 3*2 = 21, which is the required answer

Input:
The first line of the input contains the value stored in N
The second line of the input contains the value stored in str

Output:
Solve the equation given in the problem statement, as explained

Sample Input:
5
AmanZ

Sample Output:
21

Hint:
In the sample test case, the value stored in N = 5, and str = AmanZ
The number of upper case characters in the string is 2 -A, Z, 
and the number of small case characters in the string is 3 -m,a,n
Therefore, the value of the equation 5*x + 3*y, becomes 5*3 + 3*2 = 21, which is the required answer

*/

function StringEquation(N, str) {
  let lower = "abcdefghijklmnopqrstuvwxyz".split("");
  let lo = 0;
  let up = 0;
  for (let i = 0; i < str.length; i++) {
    if (lower.includes(str[i])) {
      lo++;
    } else {
      up++;
    }
  }

  console.log(5 * lo + 3 * up);
}
