/*

Description:
Nick has applied for a company for the role of full stack Developer. 
There the first round is DS and algo.
He has to answer the following question :
A queue of N soldiers of which only M soldiers are to be selected. 
Each soldier has some power with him. There are M iterations on the queue.
The following are the rules:
- In each iteration M soldiers are dequeued
- If queue has less than M entries all of the soldiers will be dequeued 
    and the one who has maximum power is selected and remaining soldiers are enqueued back to the queue.
    (in the same order of how they dequeued)
- but , when enqueued back each of their power decremented by 1.
- If there are more than 1 soldier has same maximum power in those dequeued soldiers the one 
    which comes first in the queue is selected.
- In any iteration if power of some soldier is zero it can't be decremented further.It remains at 0.
Now he has to decide the positions of all the selected soldiers 
    (positions in the initial given queue) in the order they are selected 
    As it is very important for him to get this job can you help him to figure this out

Input :
Input Format :
The first line consists of two space separated integers N and M, 
    denoting the number of soldiers in the queue and the number of soldiers that have to be selected respectively.
The next line consists of an array A, A[i] denoting the power of soldiers  at position i.

Constraints :
1 <= M <= 316
M <= N <= M * M
1 <= A[i] <= M
1 <= i <= N

Output :
For each of the M iterations, output the position of the selected soldier in that iteration. 
Position refers to the index at which the soldier was present in the initial given queue (1 based indexing).

Sample Input :
6 5
1 2 2 3 4 5

Sample Output :
5 6 4 1 2

Hint :
Output Explanation :
The initial queue: 1,2,2,3,4,5
In first iteration, starting 5 entries are removed from the queue.
The removed entries are:[1,2,2,3,4].
The queue now becomes: [5] The maximum power soldier's index 5 in the given initial queue.
So, we print 5 and power of remaining spiders in the removed ones is decremented by 1 unit and enqueued back to the queue.
The queue now becomes: [5,0,1,1,2]
In the second iteration, we print index 6 as element 5 's index is 6 in the initial queue.
After the second iteration, the queue becomes: [0,0,0,1]
Note that the power of soldier with power 0 after the first iteration still remains 0.

*/


