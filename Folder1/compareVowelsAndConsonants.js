/*

Problem Statements:
You are given a string stored in a variable str, whose length is stored in a variable with the name N
You have to find the count of vowels and consonants in the string, 
and print the output according to the following conditions

1. If the count of vowels is equal to the count of consonants, print "Tie", without quotes
2. Else If the count of vowels is greater than the count of consonants, print "Vowel", without quotes
3. Else If the count of vowels is lesser than the count of consonants, print "Consonant", without quotes

For example, consider the value stored inN = 6, and str = "nrupul". 
Then the count of vowels = 2, and the count of consonants = 4. 
Since, the count of consonants is greater than the count of vowels, therefore the required output is Consonant`
Note : The string only contains lower case English Alphabets

Input
The first line of the input contains the value stored in N
The second line contains the value stored instr

Output
Print the output as per the conditions mentioned in the problem statement

Sample Input:
6
nrupul

Sample Output:
Consonant

Hint:
In the sample test case, the value stored inN = 6, 
and str = "nrupul". Then the count of vowels = 2, 
and the count of consonants = 4. 
Since, the count of consonants is greater than the count of vowels, 
therefore the required output is Consonant`

*/

function compareVowelsConsonants(N, str) {
  let vcount = 0;
  let ccount = 0;
  for (var i = 0; i < N; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      vcount++;
    } else {
      ccount++;
    }
  }
  if (vcount == ccount) {
    console.log("Tie");
  } else if (vcount > ccount) {
    console.log("Vowel");
  } else if (vcount < ccount) {
    console.log("Consonant");
  }
}
