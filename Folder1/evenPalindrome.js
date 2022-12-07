/*

Problem Statement:
You are given a string stored in a variable with the name str, 
and the size of the string is stored in a variable with the name N

You have to create another string from the given string, 
such that the characters present at only the even indexes are considered, 
in the same order as they are present in str

If the new string formed by using the characters present at even positions in the string str, is a palindrome, 
print yes, else print no

For example, consider the value stored in N = 7, 
and the value stored instr = abcdcfa. 
Therefore, the characters present at even positions are a,c,c,a. 
Therefore, the new string formed acca is a palindrome. Hence, the output becomes yes

Note : The string contains only smaller case English alphabets. 
Also, the indexing in the string starts from 0

Input:
The first line of the input contains the value stored in N
The next line of the input contains the value stored in str

Output:
Print the output as per the condition, as mentioned in the problem statement

Sample Input:
7
abcdcfa

Sample Output:
yes

Hint:
In the sample test case, the value stored in N = 7, and the value stored in str = abcdcfa. 
Therefore, the characters present at even positions are a,c,c,a. 
Therefore, the new string formed acca is a palindrome. 
Hence, the output becomes yes

*/

function evenPalindrome(N, str) {
  //write code here
  let str1 = "";
  for (let i = 0; i < N; i++) {
    if (i % 2 == 0) {
      str1 += str[i];
    }
  }
  //console.log(str1)
  let bag = "";
  for (let j = str1.length - 1; j >= 0; j--) {
    bag += str1[j];
  }
  //console.log(bag)
  if (str1 == bag) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
