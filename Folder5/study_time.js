/*

Description:
Alex always loves to code every time. 
The coding love is too much that he didn’t prepare for his test which is going to held after some T hours. 
Now at the last moment, he is preparing for the exam. 
He prepared a chart in which he divided the topics and the number of hours he can prepare that topic.
Formally he prepared a table named 'A' containing  N rows and M columns. 
Each row denotes a topic and each column denotes the number of hours that he can prepare that topic. 
The value at each cell A[i][j] denotes if he prepares ith topic for j number of hours 
    then he can get a score equal to A[i][j].
Now before studying for the exam he frames this situation into a coding problem 
    and he is going to calculate the maximum score he can get if choose topics optimally. 
    Can you tell the maximum score before Alex?
Note
It is not necessary that preparing a topic for more number of hours will fetch more marks.

Input:
The only line of input contains three positive integers N, M, and T denoting the row 
    and column of the box and total hours available respectively
The next N lines of input contain M space-separated integers A[i][j] denoting the score of the ith topic in j hours.

Constraints:
1 <= N, M , T <= 100
1 <= A[i][j] <= 100

Output:
The single line of output should contain the maximum score.

Sample Input:
3 4 3
1 2 3 4
5 2 2 2
7 1 1 4

Sample Output:
13

Sample Input:
2 2 3
3 10
10 3

Sample Output:
20

Hint:
Explanation for Sample 1
The optimal way is to give one hour to each topic thus giving score 1 + 5 + 7 = 13.
*/

//not solved
