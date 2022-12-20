/*

Problem Statement:
You are given a string, whose length is stored in a variable with the name N
The string is stored in a variable with the name str
The string only contains small case characters, 
and each character, is given a category such that a = 1, b = 2, c = 3, d = 4, ......, z = 26
You have to generate a new string, such that each character, is replaced by the value of its category
For example, consider the value stored in str = abcd, and N = 4
Now, replacing each character with it's category, we get 1234, as the new string, which is the required answer

Input:
The first line of the input contains the value stored in N
The next line contains the value stored in str

Output:
Print the new modified string, as explained in the problem statement

Sample Input:
4
abcd

Sample Output:
1234

Hint:
In the sample test case, the value stored in str = abcd, and N = 4
Now, replacing each character with it's category, 
we get 1234, as the new string, which is the required answer

*/

function categoryOfString(N, str) {
  //write code here
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let obj = {};
  for (let i = 0; i < 26; i++) {
    obj[alphabets[i]] = i + 1;
  }
  let box = "";
  for (let el of str) {
    box += obj[el];
  }
  console.log(box);
}
