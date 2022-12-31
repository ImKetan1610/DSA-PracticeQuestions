/*

Description:
You live in a building of N floors numbered from 1 to N. You also have K identical eggs.
You are trying to find a floor F such that if we drop an egg from a floor higher than F then the egg will break. 
Any egg dropped from or below floor F will not break.
If you try dropping some eggs from some floor and the egg breaks then you can’t use those eggs further. 
So for each step, you need to take an unbroken egg and drop it from any floor x where (1 <= x <= N).
Here you don’t need to find the critical floor F 
    but you have to decide floors from which eggs should be dropped 
    so that the total number of trials are minimized.

Input:
The first line contains T denoting the number of test cases.
The next T lines contain two positive integers N and K denoting the total number of floors 
    and the number of eggs you have.

Constraints:
1 <= T <= 10^5
1 <= N, K <= 200

Output:
For each test case, you should print the minimum number of trials to break all eggs.

Sample Input:
1
2 1

Sample Output:
2

Sample Input:
2
6 2
14 3

Sample Output:
3
4

Hint:
Explanation for Sample 1
If you drop the egg the from floor 1. Then either it breaks or it didn’t break.
If it breaks, we know with certainty that F = 0 else, we drop the egg from floor 2. 
If it breaks, we know with certainty that F = 1.
If it didn't break, then we know with certainty F = 2.
Hence, we needed 2 moves in the worst case to know what F is with certainty.

*/

function main(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  while (tc--) {
    let [n, k] = input[line++].split(" ").map(Number);

    console.log(drop(n, k));
  }
}

function egg(x, n, k) {
  let count = 0;
  let c = 1;
  for (let i = 1; i <= k && count < n; i++) {
    c *= x - i + 1;
    c /= i;
    count += c;
  }
  return count;
}

function drop(n, k) {
  let a = 1;
  let b = n;
  while (a < b) {
    let c = parseInt((a + b) / 2);
    if (egg(c, n, k) < n) {
      a = c + 1;
    } else {
      b = c;
    }
  }
  return a;
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let stdin_input = "";
process.stdin.on("data", function (input) {
  stdin_input += input;
});

process.stdin.on("end", function () {
  main(stdin_input);
});
