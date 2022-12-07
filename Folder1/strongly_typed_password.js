/*

Problem Statement:
You are given an array of strings, whose size is stored in a variable with the name N
The string array, is stored in a variable with the name arr
You have to find how many of the strings stored in the array arr, are weak, and how many of them are strong
A string is considered as strong if it contains at least one of the following characters in it @,$,#,*

Consider the example, in which the value stored inN = 4, and the array,arr = ["test123", "new@t", "mon*y", "nrupul"]

The first string "test123", does not contain any of the required characters, hence the string is weak
The second string "new@t", contains the character `@`, hence the string is strong
The third string "mon*y", contains the character `*`, hence the string is strong
The fourth string "nrupul", does not contain any of the required characters, hence the string is weak
Therefore, the required output becomes weak strong strong weak

Input:
The first line of the input contains the value stored inN
The next line contains N space separated string denoting the values stored in the string array


Output
For each string present in arr, print whether the string is weak or strong

Sample Input:
4
test123 new@t mon*y nrupul

Sample Output:
weak strong strong weak

Hint:
In the sample test case, the value stored inN = 4, and the array,arr = ["test123", "new@t", "mon*y", "nrupul"]
The first string "test123", does not contain any of the required characters, hence the string is weak
The second string "new@t", contains the character `@`, hence the string is strong
The third string "mon*y", contains the character `*`, hence the string is strong
The fourth string "nrupul", does not contain any of the required characters, hence the string is weak
Therefore, the required output becomes weak strong strong weak

*/

function strongPassword(N, arr) {
  //     //write code herefo
  let bag = "";
  for (let i = 0; i <= arr.length - 1; i++) {
    if (
      arr[i].includes("@") ||
      arr[i].includes("$") ||
      arr[i].includes("#") ||
      arr[i].includes("*")
    ) {
      bag += "strong" + " ";
    } else {
      bag += "weak" + " ";
    }
  }
  console.log(bag);
}
