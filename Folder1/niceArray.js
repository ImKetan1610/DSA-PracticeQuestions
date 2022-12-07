/*

Problem Statement:
You are given an array, stored in a variable with the name array
The size of the array is stored in a variable with the name N
You are also given another number stored in a variable with the name K

Print the output according to the following conditions
1. If the count of even elements in the array is greater than the value stored in K, 
print "Nice Array", without quotes
2. Else, print "Bad Array", without quotes

Input:
The first line of the input contains the value stored in N
The next line contains N space numbers, denoting the values stored in array
The last line of the input contains the value stored in K

Output:
Print the output as per the conditions mentioned in the problem statement

Sample Input:
5
1 2 3 4 5
2

Sample Output:
Bad Array

Sample Input:
5
1 2 3 4 5
1

Sample Output:
Nice Array

Hint:
In the first sample test case, the value stored in N = 5, 
the array = [1 2 3 4 5], and the value stored in K = 2

The number of even elements in the array are 2, which are 2, and 4, 
which is not greater than the value stored in K = 2, so the answer is Bad Array.
In the second sample test case, the value stored in N = 5, 
the array = [1 2 3 4 5], and the value stored in K = 1

The number of even elements in the array are 2, which are 2, and 4, 
which is greater than the value stored in K = 1, so the answer is Nice Array.

*/

function niceArray(N, array, K) {
  //write code here
  var count = 0;
  for (var i = 0; i < N; i++) {
    if (array[i] % 2 == 0) {
      count++;
    }
  }
  if (count > K) {
    console.log("Nice Array");
  } else {
    console.log("Bad Array");
  }
}
