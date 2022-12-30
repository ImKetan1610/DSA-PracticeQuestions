/*

Description:
Two friends decided to play a very exciting online card game. 
At the beginning of this game, each player gets a deck of cards, in which each card has some strength assigned. 
After that, each player picks a random card from his deck and they compare the strengths of picked cards. 
The player who picked a card with larger strength wins. 
There is no winner in case both players picked cards with equal strength.
The first friend got a deck with n cards. The i-th his card has strength a[i]. 
The second friend got a deck with m cards. The i-th his card has strength b[i].
The first friend wants to win very much. So he decided to improve his cards. 
He can increase by 1 the strength of any card for 1 dollar. 
Any card can be improved as many times as he wants. 
The second friend can't improve his cards because he doesn't know about this possibility.
What is the minimum amount of money which the first player needs to guarantee a victory for himself?

Input:
Input Format:
The first line of the input contains single integer n - the number of first friend's cards.
The second line of the input contains n space-separated integers a[i] 
    - the strength of the i-th first friend's card.
Second friend's cards are given in the next two lines in the same format.

Constraints:
n <= 300000
a[i] <= 1000000000

Output
Print single integer - the minimum amount of money that the first friend needs to guarantee a victory for himself.

Sample Input 1 
3
1 3 10
2
3 4

Sample Output 1
6

*/

function card(n, m, arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let c = 0;
  for (let z = 0; z < n; z++) {
    if (arr1[z] <= arr2[m - 1]) {
      let temp = arr2[m - 1] - arr1[z];
      arr1[z] += temp + 1;
      c += temp + 1;
    }
  }
  console.log(c);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr1 = input[1].trim().split(" ").map(Number);
  let m = +input[2];
  let arr2 = input[3].trim().split(" ").map(Number);
  card(n, m, arr1, arr2);
}

if (process.env.USER === "") {
  runProgram("");
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
