/*

Problem Statement:
You are given an array, stored in a variable with the name arr, 
whose size is stored in a variable with the name N
You have to find the count of all the subarrays, the sum of whose elements is even

For example, consider the value stored inN = 3, and arr = [1 2 3], 
then all the subarrays of the given array are

1
1 2
1 2 3
2
2 3
3
Now, the subarrays with even sum are 1+2+3 = 6,2. Therefore, the output is 2


Input:
The first line of the input contains the value stored in N
The next line contains the values stored in arr

Output:
Print the count of subarrays with sum of elements even, as explained in the problem statement

Sample Input:
3
1 2 3

Sample Output:
2

Hint:
In the sample test case, the value stored in N = 3, and arr = [1 2 3], 
then all the subarrays of the given array are
1
1 2
1 2 3
2
2 3
3
Now, the subarrays with even sum are1+2+3 = 6,2. 
Therefore, the output is 2

*/

function evenSumSubArr(N, arr) {
  //write code here
  let count = 0;
  for (let i = 0; i < N; i++) {
    let subarr = [];
    for (let j = i; j < N; j++) {
      subarr.push(arr[j]);
      let sum = 0;
      for (let k = 0; k < subarr.length; k++) {
        sum += subarr[k];
      }
      if (sum % 2 == 0) {
        count++;
      }
    }
  }
  console.log(count);
}
