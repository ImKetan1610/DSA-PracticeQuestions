/*

Problem Statement:
Harry and John want to do a competition of weightlifting in which they can lift as many weights as they want. 
    There are N weights numbered from 1 to N where ith weight has a value weight[i]. 
    We have to find the total weight lifted by both of them separately after the competition ends.
Competition ends when all the weights have been lifted by them. The rules of the game are as follows-
Harry will lift the weight from left to right and John will lift the weight from right to left.
Harry will start the game and in the first move he can only lift one weight i.e. weight[0].
After the first move, the players will play alternatively i.e. after the first move the John will lift, 
    then again Harry boy and so on…..
The boy will lift the least possible weight just greater than the weight lifted by the other boy in the previous move 
    i.e. if one boy lifts weight equal to 8 in the previous turn, 
    then the other boy has to lift a weight greater than 8 (using one or more weights).

Input:
The first line of input contains a single integer T, the number of test cases.
The first line of each test case contains N denoting the number of weights.
The second line of each test case contains N space-separated integer weight[i] denoting the value of ith weight.

Constraints:
1 <= T <= 10
1 <= N <= 10^5

Output:
The output must contain the total weight lifted by Harry and John respectively.

Sample Input:
1
11
3 1 4 1 5 9 2 6 5 3 5

Sample Output:
23 21

Sample Input:
2
1
1000
3
1 1 1

Sample Output:
1000 0
1 2

Hint:
Explanation of Sample 1
Move1: Harry lifts one weight i.e. 3 and the sequence of remaining weights becomes [1,4,1,5,9,2,6,5,3,5].
Move2: Harry lifted 3 on the previous move, which means John must lift 4 
    or more John lifts one weight of size 5 and the sequence of remaining weights becomes [1,4,1,5,9,2,6,5,3].
Move 3: John lifted 5 on the previous move, which means Harry must lift 6 or more. 
    Harry lifted three weights with a total weight of 1+4+1=6 
    and the sequence of remaining weights becomes [5,9,2,6,5,3].
Move 4: Harry lifted 6 on the previous move, which means John must lift 7 or more. 
    John lifted two weights with the total weight of 3+5=8 and the sequence of remaining weights becomes [5,9,2,6].
Move 5: John lifted 8 on the previous move, which means Harry must lift 9 or more. 
    Harry lifts two weights with the total weight of 5+9=14 and the sequence of remaining weights becomes [2,6].
Move 6(at last): Harry lifted 14 on the previous move, which means John must lift 15 or more. 
    As this is impossible to lift 15 or more, so John lifts the two remaining weights and the competition ends.
Hence the total weight lifted by Harry is 23 and John is 21.

*/

function weight(N, arr) {
  let l = 0;
  let r = N - 1;
  let hsum = arr[l];
  let jsum = 0;
  let john = 0;
  let henry = arr[l];
  l = 1;
  while (l <= r) {
    while (john <= henry && l <= r) {
      john += arr[r];
      jsum += arr[r];
      r--;
    }
    henry = 0;
    while (henry <= john && l <= r) {
      henry += arr[l];
      hsum += arr[l];
      l++;
    }
    john = 0;
  }
  console.log(hsum + " " + jsum);
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    weight(N, arr);
  }
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
    runProgramm(read);
    process.et(0);
  });
}
