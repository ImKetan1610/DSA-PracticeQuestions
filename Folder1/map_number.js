/*

Problem Statement:
You are given a number stored in a variable with the name N
You are given another number stored in a variable with the name K
You have to map all the numbers in the range of[1, N], including the values stored in N, 
such that the mapping begins from K

For example, consider the value stored in N = 5, and K = 10, then the required output will be
1-10
2-11
3-12
4-13
5-14

Input:
The first line of the input contains the value stored in N
The next line of the input contains the value stored in K

Output:
Print the output as shown in the problem statement

Sample Input:
5
10

Sample Output:
1-10
2-11
3-12
4-13
5-14

Hint:
In the sample test case, the value stored inN = 5, andK = 10, then the required output will be

1-10
2-11
3-12
4-13
5-14

*/

function mapNumbers(N, K) {
  let obj = {};
  for (let i = 0; i <= N - 1; i++) {
    obj[i] = i + K;
    console.log(i + 1 + "-" + obj[i]);
  }
}
