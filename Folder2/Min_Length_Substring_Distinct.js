/*

Problem Statement:
Given a string, find the length of the smallest sub-string consisting of maximum distinct characters.
Also note that the output can have reprating characters.
Suppose string is aaabbbcdcd, but the substring "abbbcd" 
contains all the distinct characters present in the string (i.e. "a", "b", "c", "d")

Input:
Input Format :
First line of input contains the string

Constraints :
Length of string < 500

Output:
Print the number which is the length of the smallest sub-string consisting of maximum distinct characters

Sample Input:
zoomsessionmooz

Sample Output:
10

*/

function minLengthSubstr(s) {
  let min = [];
  let str = [...new Set(s)];
  for (let i = 0; i < s.length; i++) {
    let bag = "";
    for (let j = i; j < s.length; j++) {
      bag += s[j];
      if (find(bag, str)) {
        min.push(bag.length);
      }
    }
  }
  min.sort((a, b) => a - b);
  console.log(min[0]);
  function find(arr, str) {
    for (let i = 0; i < str.length; i++) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (str[i] == arr[j]) {
          count++;
        }
      }
      if (count === 0) {
        return false;
      }
    }
    return true;
  }
}
