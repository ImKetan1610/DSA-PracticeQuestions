/*

Description:
There is a contest of Competitive eating. Rick and Richard were participating in the game.
N bananas are placed in a line. Rick starts to eat from left to right, and Richard from right to left. 
For each banana, its length is known.
Rick eats with speed twice that of Richard. If a player starts to eat the banana, other player can't touch it. 
If both players reach the same banana simultaneously, 
    Rick gets to eat that banana as he snatches it away from Richard.
How many bananas each of the players will eat?

Input:
Input Format :
The first line contains one integer T, the number of test cases.
The first line of each test case contains one integer N,the number of bananas.
The second line contains a sequence , A1, A2, A3 . . . An where Ai denotes length of ith bananas.

Constraints :
1 ≤ T ≤ 100
1 ≤ N ≤ 100000
1 ≤ Ai ≤ 10000000

Output:
Print two numbers X and Y separated by space, where X is the number of bananas eaten by Rick, 
    and Y is the number of bananas eaten by Richard.

Sample Input:
1
5
2 9 8 2 7

Sample Output:
3 2

Hint:
Rick will start eating 1st banana of length 2. Richard will start with 5th banana of length 7.

As Rick's speed is twice Richard's, He will start with second banana. 
Richard still would be eating the first. Rick will start with his third banana and when Richard will finish his, 
    he'l start with his second banana ( index 4).

*/

function Richard(N, arr) {
  let A = 0;
  let B = 0;
  let i = 0;
  let j = N - 1;

  let f = 0;
  let l = 0;
  while (i <= j) {
    if (f < 2 * l) {
      f += arr[i];
      i++;
      A += 1;
    } else if (f > 2 * l) {
      l += arr[j];
      j--;
      B++;
    } else {
      f += arr[i];
      l += arr[j];
      i++;
      j--;
      A++;
      B++;
    }
  }
  console.log(A, B);
}

function runprogram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line++];
    let arr = input[line++].split(" ").map(Number);
    Richard(N, arr);
  }
}

if (process.env.USER === "") {
  runprogram("");
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
    runprogram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runprogram(read);
    process.et(0);
  });
}
