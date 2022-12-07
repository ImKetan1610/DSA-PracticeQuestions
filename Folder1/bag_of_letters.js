/*

Problem Statement:
Alice is playing a game with his little brother Adam. 
Alice gives Adam, a string A, and along with it a bag which contains characters made up of clay are kept.
Adam has to make the stringA, given to him by Alice, with the help of these characters in the bag. 
Find out if he can make the string or not.
Note: The string A and the bag, both contain only small case characters

Input:
The first line of the input contains N, the number of characters in the bag.
The next line contains N characters, indicating the characters present in the bag.
The next line contains M characters indicating the length of the string A.
The next line contains the string itself.

Constraints:
1 <=N, M<= 10^4

Output:
For each test case, print Yes, if Adam can make the string using the characters in the bag, else print No

Sample Input:
5
aabbc
3
abc

Sample Output:
Yes


Sample Input:
5
aabbc
4
abcd

Sample Output:
No

Hint:
In the first sample test , the bag contains the characters present in the string aabbc,
and the string Adam has to form is abc. It can be clearly seen that using the characters of the bag, 
the string can be formed. Therefore, the output is Yes

In the second test case, the string to be formed is abcd. 
But, the bag does not contain the character d. 
Therefore, the string cannot be formed. Therefore, the output is No

*/

function bagOfLetters(N, bag, M, A) {
  //write code here
  let bagMap = {};
  for (let e of bag) {
    bagMap[e] = bagMap[e] + 1 || 1;
  }
  let aMap = {};
  for (let e of A) {
    aMap[e] = aMap[e] + 1 || 1;
  }
  let flag = "Yes";
  for (let key in aMap) {
    if (aMap[key] > bagMap[key] || bagMap[key] == undefined) {
      flag = "No";
      break;
    }
  }
  console.log(flag);
}
