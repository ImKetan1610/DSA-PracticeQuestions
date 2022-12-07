/*

Problem Statement:
Given a basket B of N fruits, 
find out whether the basket contains multiple types of fruits or a single type of fruit.

Input:
Input Format:-
The first line of input contains a single integerN, number of fruits in basket.
The second line of input contains N space-separated strings, B[0], B[1], .., B[N-1]

Constraints:-
0 <= N <= 25
1 <= B[i].length <= 25
All characters are lowercase letter.

Output:
Output Format:-
Print Mixed Basket, If basket contains different types of fruits Otherwise print Single Type

Sample Input:
3
banana banana banana

Sample Output:
Single Type

Sample Input:
4
apple orange banana orange

Sample Output:
Mixed Basket

Hint:
TestCase 1:Only 1 type of fruit is present.
TestCase 2:3 types of fruits are present.

*/

function checkBasket(N, B) {
  // write code here
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (B[0] == B[i]) {
      count++;
    }
  }
  if (count == N) {
    console.log("Single Type");
  } else {
    console.log("Mixed Basket");
  }
}
