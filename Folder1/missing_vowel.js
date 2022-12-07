/*

Problem Statement:
You are given a string, stored in a variable str, and the length of the string is stored in the variable N
You have to find all the vowels that are not present in the string and print them.
If a string contains all the vowels, in that case, print -1.
For example, consider the value stored inN = 6, and str = nature
out of the 5 vowels(a,e,i,o,u)
the word "nature" contains a,u,e
The vowel that are not present in the string are : i,o
hence the output is io

Note : The string contains only lower case English Alphabets

Input:
The first line of the input contains the value stored in N
The second line of the input contains the value stored in str

Output:
Print all the vowels that are not present in the given string.

Sample Input:
6
nature

Sample Output:
io

Hint:
the value stored in N = 6, and str = nature.
out of the 5 vowels(a,e,i,o,u)
the word "nature" contains a,u,e
The vowel that are not present in the string are : i,o
hence the output is io

*/

/* snippet 1 */
function missingVowel(N, str) {
  let vowel = { a: 1, e: 1, i: 1, o: 1, u: 1 };
  for (let el of str) {
    delete vowel[el];
  }
  let bag = "";
  for (let key in vowel) {
    bag += key;
  }
  console.log(bag || -1);
}
