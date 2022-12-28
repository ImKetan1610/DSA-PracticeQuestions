/*

Description:
Piyush went to fight for Coding Club. 
There were N soldiers with various powers. 
There will be Q rounds to fight and in each round Piyush's power will be varied. 
With power M, Piyush can kill all the soldiers whose power is less than or equal to M(<=M). 
After each round, All the soldiers who are dead in previous round will reborn.
Such that in each round there will be N soldiers to fight. 
Count the number of soldiers that he can kill in each round and total sum of their powers.

Input:
Input Format:
First line contains N
Next N line contains N integers which represents power of N soldiers
Next line contains Q
Next Q line contains Piyush's power for each of the Q rounds

Constraints:
1<=N<=10000
1<=power of each soldier<=100
1<=Q<=10000
1<=power of bishu<=100

Output:
Output Format:
In each line, print the number of soldiers that he can kill in each round and total sum of their powers.

Sample Input:
7
1 
2 
3 
4 
5 
6 
7
3
3
10
2

Sample Output:
3 6
7 28
2 3

*/

function CodingClubFight(N, Q, soilder, piyush) {
  for (i = 0; i < Q; i++) {
    let sum = 0;
    let count = 0;
    for (j = 0; j < N; j++) {
      if (piyush[i] >= soilder[j]) {
        count++;
        sum = sum + soilder[j];
      }
    }
    console.log(count, sum);
  }
}

function runProgram(input) {
  input = input.split("\n");
  N = +input[0];
  let soilder = [];
  let line = 1;
  for (z = 0; z < N; z++) {
    soilder.push(+input[line]);
    line++;
  }
  let Q = +input[line];
  line++;

  let piyush = [];
  for (z = 0; z < Q; z++) {
    piyush.push(+input[line]);
    line++;
  }
  CodingClubFight(N, Q, soilder, piyush);
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
