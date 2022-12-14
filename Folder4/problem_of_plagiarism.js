/*

Description:
The University of Transylvania is conducting the coding fest for the Computer Programmers of the state. 
Again, because of his extraordinary managerial skills, 
    Dracula is given the task to make arrangements for the competition.
Dracula came to know that N people, are going to participate in the fest, 
    and so he has the job of arranging them on N places for the fest. 
He gave an ID from 1 to N to each participant, and formulated a strategy to prevent plagiarism.
He decided that all such permutations, in which the sum of IDs of participants, 
    between two specific positions, L and R(L and R inclusive), are odd, need to be rejected. 
Find the total number of permutations, that will have to be rejected, according to Dracula’s strategy.

Input:
The first line of input contains N, the number of people participating in the fest. 
All the people participating in the fest have ID’s from 1 to N.
The next line contains, the value of L and R, as described in the question.

Constraints:
1 <= N <= 10
0 <= L, R <= N-1

Output:
Print the number of permutations of N people, that will have to be rejected, according to Dracula’s strategy.

Sample Input:
3
0 1

Sample Output:
4

Hint:
The value of N is 3, so IDs of people participating in the fest is {1,2,3}.
All permutations of {1,2,3} where the sum of values between L = 0 and R = 1 are odd, are {1,2,3}, {2,1,3}, {3,2,1}, {2,3,1},
In each permutation, the sum of all elements lying between index L and R (including L and R), are odd.
therefore the number of permutations that need to be rejected is 4.

*/

function check(arr, l, r) {
  let sum = 0;
  for (let i = l; i <= r; i++) {
    sum += arr[i];
  }
  // console.log(sum)
  return sum % 2;
}

let c = 0;

function perm(n, l, r, sub = []) {
  if (sub.length === n) {
    // console.log(sub)
    if (check(sub, l, r)) {
      c++;
    }
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (!sub.includes(i)) {
      sub.push(i);
      perm(n, l, r, sub);
      sub.pop();
    }
  }
}

function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let [l, r] = input[1].split(" ").map(Number);
  perm(n, l, r);
  console.log(c);
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
