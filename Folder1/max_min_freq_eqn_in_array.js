/*

Problem statement:
You are given an array stored in a variable with the name arr
The size of the array is stored in a variable with the name N
You have to solve the equation -15*x + 2*y, where x is the smallest frequency of an element in the array, 
while y is the largest frequency of an element in the array
For example, consider the value stored in N = 7, and arr = [1 2 2 3 3 3 5]
The frequency of the different elements in the array are
1 -> 1
2 -> 2
3 -> 3
5 -> 1

The smallest frequency in the array is 1, with elements 1, and 5 with frequency 1, 
while the largest frequency in the array is 3
as 3 has a frequency 3. So, the value ofx = 1, and the value ofy = 3
Therefore, the value of the equation becomes -15*[1] + 2*[3] = 21, which is the required output

Input:
The first line of the input contains the value stored in N
The next line contains the values stored in arr

Output:
Find the value of the equation given in the problem statement, as explained in the problem statement

Sample Input:
7
1 2 2 3 3 3 5

Sample Output:
21

Hint:
In the sample test case, the value stored in N = 7, and arr = [1 2 2 3 3 3 5]
The frequency of the different elements in the array are
1 -> 1
2 -> 2
3 -> 3
5 -> 1

The smallest frequency in the array is1, with elements 1, and 5 with frequency 1, while the largest frequency in the array is 3
as3 has a frequency 3. So, the value of x = 1, and the value of y = 3

Therefore, the value of the equation becomes -15*[1] + 2*[3] = 21, which is the required output

*/

function minMAx(N, arr) {
  //Write code here
  let obj = {};
  for (x = 0; x < N; x++) {
    if (obj[arr[x]] == undefined) {
      obj[arr[x]] = 1;
    } else {
      obj[arr[x]]++;
    }
  }
  let min = Infinity;
  let max = -Infinity;
  for (y in obj) {
    if (min > obj[y]) {
      min = obj[y];
    }
    for (z in obj) {
      if (max < obj[y]) {
        max = obj[y];
      }
    }
  }
  console.log(15 * min + 2 * max);
}
