/*

Description:
Given an integer array, return the count of all the subsets of the array, 
    where the sum of all the elements in the subset is odd.

Input:
The first line of the input contains N, the size of the array.
The next line contains N space separated integers denoting the elements of the array.

Constraints:
1 <= N <= 20
-20 <= A[i] <= 20

Output:
Print the count of all the subsets where the sum of all the elements in the subset is odd.

Sample Input:
3
1 2 3

Sample Output:
4

Sample Input:
2
2 4

Sample Output:
0

Hint:
In the sample test case, the size of the array is 3, and the all the possible subsets of the array are,
[]
[1]
[2]
[1, 2]
[3]
[1, 3]
[2, 3]
[1, 2, 3]

The subsets with odd sum are [1],[3],[2,3], and [1,2], therefore, the count of subsets with odd sum are 4.

*/

let count = 0;

function Oddsubset(str, bag, index) {
  if (bag.length !== 0) {
    let sum = 0;
    let b = "";
    for (let i = 0; i < bag.length; i++) {
      sum = sum + bag[i];
      b = b + bag[i] + " ";
    }

    if (sum % 2 !== 0) {
      count++;
    }
  }
  if (index == str.length) {
    return;
  }
  for (let i = index; i < str.length; i++) {
    bag.push(str[i]);
    Oddsubset(str, bag, i + 1);
    bag.pop();
  }
  return count;
}

function runProgram(input) {
  input = input.trim().split("\n");

  let N = input[0];
  let num = input[1].split(" ").map(Number);
  let bag = [];

  let ans = Oddsubset(num, bag, 0);
  console.log(ans);
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
