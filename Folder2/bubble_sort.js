/*

Problem Statement:
Consider the following version of Bubble Sort:
    for (int i = 0; i < n; i++) {   
        for (int j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                swap(a[j], a[j + 1]);
            }
        }
    }
Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. 
Once sorted, print the following three lines:
Array is sorted in numSwaps swaps, where num Swaps is the number of swaps that took place.
First Element: firstElement, where first Element is the first element in the sorted array.
Last Element: lastElement, where last Element is the last element in the sorted array.

Input:
Input Format
The first line contains an integer,n, the size of the array a.
The second line contains n space-separated integers a i.

Constraints:
2 <= n <= 600
1 <= a[i] <= 2*10^6

Output:
Output Format:
Print the three lines required

Sample Input:
3
3 2 1

Sample Output:
Array is sorted in 3 swaps
First Element: 1
Last Element: 3

Hint:
The array is not sorted, and its values ara: {3,2,1}. The following 3 swaps take place:
1.{3,2,1}  ->  {2,3,1}
2.{2,3,1}  ->  {2,1,3}
3.{2,1,3}  ->  {1,2,3}

*/

function sortArray(N, arr) {
  let first = 0;
  let last = 0;
  let count = 0;
  for (let i = 0; i <= N - 2; i++) {
    let swip = 0;
    for (let j = 0; j <= N - i - 2; j++) {
      if (arr[j] > arr[j + 1]) {
        swip = 1;
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        count++;
        first = arr[0];
        last = arr[arr.length - 1];
      }
    }
    if (swip == 0) {
      break;
    }
  }
  console.log("Array is sorted in " + count + " swaps");
  console.log("First Element: " + first);
  console.log("Last Element: " + last);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);

  sortArray(N, arr);
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
