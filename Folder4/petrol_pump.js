/*

Description:
Alex is going to meet his friend Bob in his car. 
The maximum capacity of the petrol tank in the car is K litres and it can travel 1 km in 1L of petrol. 
There are N petrol pumps in between houses of Alex and Bob. 
Bob’s house is 1km away from the Nth petrol pump. 
Difference between two consecutive petrol pumps is 1 km. 
Whenever Alex reaches the petrol pump then he may or may not choose to fill the petrol in his car.  
Each petrol pump will charge some cost for filling any amount of petrol. 
Formally ith petrol charge A[i] units of money to fill any amount of petrol. 
Initially, Alex has K litres of petrol in his car also his home is 1km behind the first petrol pump. 
He has to calculate the minimum amount of money he will need to reach Bob’s house.

Input:
The first line of input contains 2 positive integer N and K denoting the number of petrol pumps 
    and maximum petrol capacity of the car.
The second line contains N space-separated integers A[i] denoting the cost charged by ith petrol.

Constraints:
1 <= N <= 10^5
1 <= K <= N
1 <= A[i] <= 10^9

Output:
The single line of output should contain the minimum amount of money Alex will need.

Sample Input:
4 2
1 2 3 4

Sample Output:
4

Sample Input:
5 3
4 3 25 10 1

Sample Output:
4

Hint:
Explanation for Sample 1
Alex has initially 2 litres of petrol.
He will first go to the first petrol pump which will decrease his petrol by 1 unit. 
Now he has 1 unit of petrol remaining but he still chooses to fill the petrol to 2 litres and pay 1 unit.
Now he will travel to third petrol pump which will decrease his petrol to 2 unit 
    and he has no petrol remaining so he chose to fill the petrol to 2 litres by paying 3 units 
    now he can travel to beyond fourth petrol pump where bob is living.
Total money required = 1 + 3 = 4 units

*/


