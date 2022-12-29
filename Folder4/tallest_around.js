/*

Description:
You are curious to find who is the tallest person in a queue. 
But you don't wanna go with the traditional method and find who is the tallest in the whole queue, 
    you want to pick an interval of like K people and find who is the tallest person in them.

Input:
First line contains the number of cases (t)
Next 2t lines contains the length of the queue L, the integer K and the queue A in two different lines
t <= 500
L <= 1000
A[i] <= 100

Output:
Output tallest person in the intervals separated by space for each case.

Sample Input:
1
9 3
1 2 3 1 4 5 2 3 6

Sample Output:
3 3 4 5 5 5 6

Hint:
Since the interval is 3, In the first one heights are- 1, 2, 3 ; 
    Tallest among them is 3. 
For the second interval the height are 2, 3, 1 and the tallest in them is 3 and so on

*/

function tallest(N, k, arr) {
  let tall = [];
  let max = -Infinity;
  let ans = [];
  for (let i = 0; i < k; i++) {
    tall.push(arr[i]);
    if (max < tall[i]) {
      max = tall[i];
    }
  }
  ans.push(max);
  for (let j = k; j < N; j++) {
    max = -Infinity;
    tall.shift(arr[j - k]);
    tall.push(arr[j]);
    //   console.log(tall)
    for (let l = 0; l < tall.length; l++) {
      if (max < tall[l]) {
        max = tall[l];
      }
    }
    ans.push(max);
  }
  console.log(ans.join(" "));
}

function runProgram(input) {
  input = input.split("\n");
  let tc = input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [N, k] = input[line].trim().split(" ").map(Number);
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    tallest(N, k, arr);
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
