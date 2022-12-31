/*

Description:
John is the owner of an apple orchard and sells a basket of apples for living.
Now the problem with fruits is that they rot in a night if not taken care of. 
So at the end of the day, 
    to make these basket of apples fresh and not to get damaged John uses special storage containers.
There are N number of baskets not sold on one particular day (say today), 
    but John can sell them the next day (say tomorrow) if he stores them tonight in that container.
John sells a fruit basket for Rs. X. Cost of storage container for a basket is Rs. Y.
Currently, John has P Rupees with him.
Given the selling price X and container cost Y of N baskets, 
    your task is to find minimum amount A (A ≤ P) that he should spend in storing fruits 
    such that the total money he has after selling fruit baskets on the next day is maximized. 
Assume that all the fruit baskets stored in the containers are sold on the next day.

Input:
Input Format:
First line contains an integer T - number of test cases.
Second line contains two space separated integers N and P.
Following N lines each contains two space separated integers X and Y.

Constraints:
1 ≤ T ≤ 10
1 ≤ N ≤ 100
1 ≤ X,Y ≤ 1000
1 ≤ P ≤ 10000

Output:
Print the two space separated integers A and B in a new line for each test case.

Sample Input:
2
2 50
80 40
60 20
5 100
100 40
50 40
40 50
60 20
100 50

Sample Output:
20 90
90 210

Hint:
Sample 1 Explanation
Test Case #1:
He has Rs. 50 with him in the beginning. To store both the plants he needs Rs. 60. 
So he has to choose one of them. Now profit from both the plants is equal i.e Rs. 40. 
But the cost of storing the second plant is less. 
Hence the Minimum Amount to spend is Rs. 20 and the total money he has after selling the plants is 50 - 20 + 60 = 90

Test Case #2: Profit for each of the plants is 60, 10, -10, 40, 50 respectively. 
He has Rs. 100 with him. 
The optimal selection would be store first and last plant. 
So Minimum Amount to spend is Rs. 90 
    and total money he has after selling the plants is 100 - 40 - 50 + 100 + 100 =210

*/

//not Solved
