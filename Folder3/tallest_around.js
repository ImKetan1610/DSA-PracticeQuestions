/*

Problem Statement:
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
    Tallest among them is 3. For the second interval the height are 2, 3, 1 
    and the tallest in them is 3 and so on

*/

function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i += 2) {
    let nm = input[i].trim().split(" ").map(Number);
    let nn = nm[0];
    let kp = nm[1];
    let ar = input[i + 1].trim().split(" ").map(Number);
    let val = tall(nn, kp, ar);
    console.log(val.join(" "));
  }
}

let tall = (n, K, ar) => {
  let bx = [];
  for (let i = 0; i <= n - K; i++) {
    let min = -Infinity;
    for (let j = i; j < i + K; j++) {
      if (ar[j] > min) {
        min = ar[j];
      }
    }
    bx.push(min);
  }
  return bx;
};

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
