/*

Problem Statement:
You are playing the Cows and Bulls game with your friend.
You write down a secret number and ask your friend to guess what the number is. 
When your friend makes a guess, you provide a hint with the following info:

The number of "bulls", which are digits in the guess that are in the correct position.
The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. 
Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
Given the secret number secret and your friend's guess guess, print the hint for your friend's guess.
The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. 
Note that both secret and guess may contain duplicate digits.


Input:
Input Format:
The first line contains the number of testcases - t
For each testcase:
The first line contains the length of the string - n
The second line contains the secret
The third line contains the guess

Constraints:
1<=t<=10
1<=n<=1000
The strings only consists of digits

Output:
Print the hint for your friend's guess for each testcase

Sample Input:
1
4
1817
8710

Sample Output:
1A2B

*/

function giveHint(n, secret, guess) {
  // Step1:- declare an obj & put elements of secret
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (!obj[secret[i]]) obj[secret[i]] = 1;
    else obj[secret[i]]++;
  }

  // Step2:- run a for loop
  let bulls = 0,
    cows = 0;
  for (let i = 0; i < n; i++) {
    // condtion for bulls
    if (secret[i] === guess[i]) bulls++;

    // condtion for cows
    if (obj[guess[i]]) {
      obj[guess[i]]--, cows++;
    }
  }

  // Step3:- decrement the cows by bulls
  cows = cows - bulls;

  console.log(`${bulls}A${cows}B`);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0],
    line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let mat = [];
    let secret = input[line++].trim().split("").map(Number);
    let guess = input[line++].trim().split("").map(Number);
    giveHint(n, secret, guess);
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
