/*

Description:
Chunnu and Munnu have gone hiking and they have a shortage of food supplies. 
    So, they want your help to figure out which plants are edible and which are not. 
    You are given a string edible representing the types of plants that are edible, 
    and another string plants representing all plants that are on the trail. 
    Your task is to find out how many plants are there on the trail which are edible.
Note:Letters are case sensitive, so"a"is considered a different type of plant from "A".

Input:
First line representsN, length of edible string
Second line represents the edible string
Third line representsM, length of plants string
Fourth line represents the plant string

Constraints:
1 <= N, M <= 1000

Output:
Output the count of plants that are edible

Sample Input:
2
xY
6
AYxxXY

Sample Output:
4

Sample Input:
3
abc
6
ABCxyz

Sample Output:
0

Hint:
In Sample 1,
N=2, edible="xY", M=6, plants="AYxxXY"
In the plants string there are 4 characters (2 "x"'s and 2 "Y"'s) that are there in the edible string.
Hence, the output is 4

In Sample2,
N=3, edible="abc", M=6, plants="ABCxyz"
In the plants string there are no characters that match with edible string.
Hence, the output is 0

*/


