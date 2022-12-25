/*

Description:
You are given an array, stored in a variable with the size arr
The size of the array is stored in a variable with the name n
You have to traverse the array, and print only the even elements in the array.
Print each number on a new line
For example, consider the array as arr = [1 2 3 4 5], and the value stored inn = 5
Then, the required output will be
2
4
The above are the only two even numbers in the given array

Input:
The first line of the input contains the value stored inN, the size of the array
The next line contains N space separated numbers denoting the elements of the array

Output:
Print the even elements present in the array, as explained in the problem statement

Sample Input:
5
1 2 3 4 5

Sample Output:
2
4

Hint:
In the sample test case, the value stored inn = 5and the value stored in arr = [1 2 3 4 5]
The only even numbers in the array are 2 4
Therefore, the output will be
2
4

*/

function evenArray(n, arr) {
  if (n === arr.length) {
    return;
  }
  if (arr[n] % 2 == 0) {
    console.log(arr[n]);
  }
  evenArray(n + 1, arr);
  // The initial value of n = 0
}
