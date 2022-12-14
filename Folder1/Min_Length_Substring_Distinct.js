/*

Problem Statement:
Given a string, find the length of the smallest sub-string consisting of maximum distinct characters.
Also note that the output can have repeating characters.
Suppose string is aaabbbcdcd, but the substring "abbbcd" 
contains all the distinct characters present in the string (i.e. "a", "b", "c", "d")

Input
Input Format :
First line of input contains the string

Constraints :
Length of string < 500

Output
Print the number which is the length of the smallest sub-string consisting of maximum distinct characters

Sample Input:
zoomsessionmooz

Sample Output:
10

*/

function minLengthSubstr(s) {
  //write code here
  let myset = new Set(s);
  let min = Infinity;

  for (let i = 0; i < s.length; i++) {
    bag = "";
    for (let j = i; j < s.length; j++) {
      bag += s[j];
      let nset = new Set(bag);
      if (nset.size == myset.size && bag.length < min) {
        min = bag.length;
      }
    }
  }
  console.log(min);
}
