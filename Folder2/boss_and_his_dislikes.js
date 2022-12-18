/*

Problem Statement:
Your boss has sent you to his kitchen to clean out stuff he doesn't like.
There are n items on his platform shelf, and are placed in certain order and each item has a unique index number.
He then mentions a list of item indexes that he doesn't like. 
Your task is to remove all these items and then return to him all the other items in the same given order.

Input:
Input Format:
Each test contains multiple test cases.
The first line contains a single integer t — the number of test cases.
Description of the test cases follows.
The first line of each test case contains a single integer n.
The second line of each test case contains n integers item1,item2,…,item n.
The third line of each test case contains a single integer k - the number of items he dislikes.
The fourth line of each test case contains k integers dislike1,dislike2...dislike k.

Constraints:
1 ≤ t ≤ 1000
1 ≤ k < n ≤ 10^5
1 ≤ item[i] ≤ n
All item[i] are distinct

Output:
Output Format:
For each test case, output the remaining integers (unique item indexes).

Sample Input:
3
4
4 1 3 2
2
3 1
9
5 2 9 1 8 6 4 3 7
3
5 8 9
5
3 4 5 1 2
2
2 3

Sample Output:
4 2
2 1 6 4 3 7
4 5 1

Hint:
Test Case 1: Here A = [4, 1, 3, 2] and B = [3, 1]. 
The resulting array A after removing all the items which your boss dislikes is [4, 2].
Note that here [2, 4] is an incorrect answer since the order of elements should be the same as in the original array.

Test Case 2: Here A = [5, 2, 9, 1, 8, 6, 4, 3, 7] and 
B = [5, 8, 9]. The resulting array A after removing all items which your boss dislikes is [2, 1, 6, 4, 3, 7].

Test Case 3: Here A = [3, 4, 5, 1, 2] and B = [2, 3]. 
The resulting array A after removing all the items which your boss dislikes is [4, 5, 1].

*/

//Enter code here
function BossDeslikes(n, k, arr1, arr2) {
  //write code here
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (obj[arr1[i]] == undefined) {
      obj[arr1[i]] = 1;
    }
  }
  for (let i = 0; i < k; i++) {
    if (obj[arr2[i]] !== undefined) {
      obj[arr2[i]]++;
      delete arr2[i];
    }
  }
  let bag = "";
  for (let i = 0; i < n; i++) {
    if (obj[arr1[i]] == 1) {
      bag += arr1[i] + " ";
    }
  }
  console.log(bag);
}

function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line];
    line++;
    let arr1 = input[line].split(" ").map(Number);
    line++;
    let k = +input[line];
    line++;
    let arr2 = input[line].split(" ").map(Number);
    line++;
    BossDeslikes(n, k, arr1, arr2);
  }
}

if (process.env.USERNAME === "") {
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
