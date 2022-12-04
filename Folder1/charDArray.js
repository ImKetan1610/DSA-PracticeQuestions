/*

Problem Statement:
You are given a string, whose size is stored in a variable with the name 
The string is stored in a variable with the name str
Each element of the string contains one of these symbols @,%,&,#,^

The symbols represent the following values
'@'-> 0
'%'-> 1
'&'-> 2 
'#'-> 3
'^'-> 4

You have to generate a string, such that each symbol is replaced by its corresponding values

For example, consider the value stored inN = 5, and the value stored in str = @%&#^

Therefore, replacing each value with its corresponding value, we get - 01234, which is the required answer.


Input:
The first line of the input contains the value stored in N
The next line stores the value stored in str

Output:
Print the output as explained in the problem statement.

Sample Input:
5
@%&#^

Sample Output:
01234

Hint:
From the sample test case, the value stored inN = 5, and the value stored instr = @%&#^

Therefore, replacing each value with its corresponding value, we get -01234, which is the required answer.

*/

function char1DArray(N, str) {
  //Write your code here

  let obj = { "@": 0, "%": 1, "&": 2, "#": 3, "^": 4 };
  let bag = "";
  for (x of str) {
    bag += obj[x];
  }
  console.log(bag);
}
