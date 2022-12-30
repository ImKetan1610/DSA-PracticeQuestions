/*

Description:
You are given an unsorted array of Integers
You are also provided an index k. 
You have to return the position of the element stored at the kth index when the array is sorted. 
Assume stable sort in case of duplicate elements. 
(Using 0-based indexing)
Note :  Sorting algorithm where in the case of a number of duplicates of a single element exists, 
    the relative order of equal elements before and after sorting the array, remains the same. 
Check the sample test case for better understanding
Example : [ 4', 1, 4", 3, 4'", 2, 0]  ==> stable sort [ 0,1, 2, 3, 4', 4", 4"' ]

Input:
First line contains T, the number of test cases, then T-test cases follow.
For each test case:
First line contains two Integers N, K, where N refers to the size of the array, 
    where K refers to the index as mentioned in the problem statement
Second line contains N Integers separated by a single space, denoting the elements of the array

Constraints:
1 <= `T` <= 10^5
1 <= `N` <= 10^6
-10^4 <= arr[i] <= 10^4
0 <= K < N

Output:
For each test case output one integer:The position of the element in the sorted array.

Sample Input:
3
7 0
4 1 4 3 4 2 0
7 2
4 1 4 3 4 2 0
4 3
4 3 2 1

Sample Output:
4
5
0

Hint:
case 1: A = [ 4 1 4 3 4 2 0 ]  ==> stable sort A = [ 0 1 2 3 4 4 4 ] the position of A[0] becomes 4.
case 2: A = [4 1 4 3 4 2 0 ]  ==> stable sort A = [ 0 1 2 3 4 4 4 ] the position of A[2] becomes 5.
case 3: A = [4 3 2 1 ]  ==> stable sort A = [ 1 2 3 4 ] the position of A[3] becomes 0.

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let [n, k] = input[line].trim().split(" ").map(Number);
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    console.log(find(arr, n, k));
  }
}

function find(arr, n, k) {
  let r = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] < arr[k]) r++;
    if (arr[i] == arr[k] && i < k) r++;
  }
  return r;
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
