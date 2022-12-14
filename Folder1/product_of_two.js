/*

Problem Statement:
You are given an array of size n and a variable k. 
Return all pairs of indices of numbers such that their product is equal to k.
Return the pairs of indices in increasing order, i.e. [ [i1,i2]...,[i3,i4] ] 
if this is the final answer then i1<=i3 and i2<=i4 for all i.

Note: Indexes can be repeated, i.e. if the array is [ 1 , 1 , 4 ] and 
k is 4 then there exist two such pairs, [ 0 , 1 ] and [ 0 , 2 ]

Input:
Input Format:
The first line contains the number of testcases t.
Next 2*t lines we have the description of the t testcases.
For each testcase first line contains n the size of the array and k the target value. 
Next line contains n integers, the elements of the array.

Constraints:
2 <= n <=1000
-10000 <= k <= 10000
-100 <= array[i] <=100

Output:
Output Format:
If no such pair is possible then output -1.
Else first output the total number of such pairs followed by all these pairs on new lines separated by space, 
i.e if total j such pairs are possible then output j on the first line followed by j lines 
which have these pairs separated by space.


Sample Input:
1
5 4
1 2 2 3 4

Sample Output:
2
0 4
1 2

Hint:
We can see that there are two possible pairs of indices,
first is 0 and 4 i.e array[0] x array[4] = k
i.e. 1 x 4 = 4
second is 1 and 2 i.e array[1] x array[2] = k
i.e. 2 x 2 = 4
So total pairs are 2 , hence the output

*/

function productOfTwo(n, k, arr) {
  // write code here
  let ans = 0;
  let str = "";

  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) {
      if (arr[i] * arr[j] == k) {
        str += i + " " + j + "\n";
        ans++;
      }
    }
  str = str.replace(/^\s+|\s+$/g, "");
  if (ans > 0) {
    console.log(ans);
    console.log(str);
  } else console.log("-1");
}
