/*

Description:
In a classroom there N students having a roll number from 1 to N. 
Some of them have a close friendship with each other. 
In the morning all of the students are gathered in the assembly hall and form a line. 
When class teacher reaches the assembly hall she saw that all the students are in standing in a strange pattern. 
As a class teacher, you need to know whether all students are standing correctly to the rules defined by the school or not. 
The rule of forming the line is as follows:
Consider the line to be empty initially. 
The student having roll no 1 should start forming the line.
Now in the ith step, all the students who are a close friend of the student 
    who is at the ith place in the line will join the line. 
They can join in any random order as they want. 
The student who is already present in the line can’t rejoin again.
Repeat the process from 2nd step till all students join the line.

Input:
The first line of input contains single positive integer T denoting the number of testcases.
The first line of each test case contains single positive integer N denoting the number of students.
The next N-1 lines of each test case contain 2 positive space-separated integers A, B denotes that A and B are close friends.
The last line of each test case contains N space-separated integers R[i] denoting the line formed by student

Constraints:
1 <= T <= 10
2 <= N <= 10^5
1 <= A,B,R[i] <= N

Output:
The single line of output should contain the “Yes” (without quotes) 
    if the line formed is valid else “No” (without quotes).

Sample Input:
1
4
1 2
1 3
2 4
1 2 3 4

Sample Output:
Yes

Sample Input:
2
5
1 2
2 3
4 3
3 5
3 2 1 4 5 3
1 2
2 3
1 2 3 

Sample Output:
No
Yes

Hint:
The line starts at [1]. Now the close friends of 1 (2 and 3) will join the line. 
The line formed will be [1,2,3]. 
In the next step, the close friends of 2 (which is 4) will join the line. 
The line formed will be [1,2,3,4] 
In the next step the close friends of 3 will join the line 
    but close friend 1 is already present in the line so nothing happens.
Similarly, in the case of 4, its close friend 2 is already present in the line so nothing happens. 
Nothing is left in the queue so the process stops.

*/
