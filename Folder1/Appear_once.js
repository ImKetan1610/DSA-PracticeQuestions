/*

Problem Statement:
You are given an array, whose size is stored in a variable with the name N
The array is stored in a variable with the name arr
You have to find the sum of all the elements of the array which are unique.
For example, consider the value stored in N = 7, and the value stored in arr = [3,5,3,3,8,5,6]. 
Since there are two numbers that are unique i.e 8 and 6.
Then the required output will be 8+6 = 14, which is the required output

Input:
The first line of the input contains the value stored in N
The next line contains N space-separated integers denoting the value stored in arr

Output:
Print the sum of all the elements of the array which are unique.
Sample Input:
7
3 5 3 3 8 5 6

Sample Output:
14

Hint:
In the sample test case, the value stored in N = 7, and the value stored in arr = [3 5 3 3 8 5 6].

8 occurs 1 time
6 occurs 1 time
5 occurs 2 times
3 occurs 3 times

Thus the required output will be 8 + 6 = 14
*/

function appearOnce(N, arr) {
  //write code here
  let obj = {};

  for (x = 0; x < N; x++) {
    if (obj[arr[x]] == undefined) {
      obj[arr[x]] = 1;
    } else {
      obj[arr[x]]++;
    }
  }
  let sum = 0;
  for (key in obj) {
    if (obj[key] == 1) {
      sum += +key;
    }
  }
  console.log(sum);
}
