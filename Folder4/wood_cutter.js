/*

Description:
Lumberjack Bob needs to chop down M metres of wood. 
However, Bob is only allowed to cut a single row of trees.
Bob's machine works as follows: Bob sets a height parameter H (in metres), 
    and the machine raises a giant saw blade to that height and cuts off all tree parts higher than H 
    (of course, trees not higher than H meters remain intact). Bob then takes the parts that were cut off.
For example, if the tree row contains trees with heights of 20, 15, 10, and 17 metres, 
    and Bob raises his saw blade to 15 metres, 
    the remaining tree heights after cutting will be 15, 15, 10, and 15 metres, respectively, 
    while Bob will take 5 metres off the first tree and 2 metres off the fourth tree (7 metres of wood in total).
Bob is ecologically minded, so he doesn't want to cut off more wood than necessary. 
That‟s why he wants to set his saw blade as high as possible. 
Help Bob find the maximum integer height of the saw blade 
    that still allows him to cut off at least M metres of wood.

Input:
Input Format:
The first line of input contains two space-separated positive integers, 
    N (the number of trees) and M (Bob‟s required wood amount).
The second line of input contains N space-separated positive integers less than 1 000 000 000, 
    the heights of each tree (in metres). The sum of all heights will exceed M, 
    thus Bob will always be able to obtain the required amount of wood.

Constraints:
1 ≤ N ≤ 1 000 000
1 ≤ M ≤ 2 000 000 000

Output:
Output Format:
The first and only line of output must contain the required height setting.

Sample Input:
4 7
20 15 10 17

Sample Output:
15

*/

function findWood(arr, blade) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > blade) sum += arr[i] - blade;
  }
  return sum;
}

function solve(arr, key) {
  let ans = -1;
  let low = 0;
  let high = 0;
  for (let i = 0; i < arr.length; i++) high = Math.max(high, arr[i]);

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let amount = findWood(arr, mid);
    if (amount === key) return mid;
    else if (amount > key) {
      ans = mid;
      low = mid + 1;
    } else high = mid - 1;
  }
  return ans;
}

function runProgram(input) {
  let newInput = input.split("\n");
  let [, key] = newInput[0].trim().split(" ").map(Number);
  let arr = newInput[1].trim().split(" ").map(Number);
  console.log(solve(arr, key));
}

if (process.env.USERNAME === "") {
  runProgram(` `);
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
