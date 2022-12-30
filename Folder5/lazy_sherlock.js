/*

Description:
Sherlock is an intelligent detective but he is too lazy. 
    He wants to buy a new suit for the upcoming event at Buckingham Palace. 
    He has all types of currency notes and has no shortage of any currency. 
    The notes have the denomination values as 2000, 2000, 500, 200, 200, 100, 50, 50, 20, 10, 10, 5, 2 and 2 and 1.
There are n shops located in his neighbour hood and he knows the prices of the suits each shop is selling at. 
He wants to carry the minimum number of currencies with him to buy the suit as he is too lazy. 
As he has no shortage of money, he won't think about the prices of the suit but in case of tie, 
    he will choose a shop which is selling at a lesser amount because he is smart too.
Recently, he received a message from Dr. John Watson regarding a new lead in his criminal case so he is busy.
He has to buy only one suit. He has to select the least costly suit but while carrying minimum notes.
Can you find out the amount he should carry with him to buy the new suit?

Input:
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. 
Then t test cases follow.
The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) — the number of shops in the neighborhood. (array a)
The second line of each test case contains n integers (1≤ ai ≤10000) - the cost of suits in each shop.

Output:
For each test case, print the answer: The amount Sherlock has to carry to buy the new suit.

Sample Input:
2
5
11 50 51 1000 2000
3
200 13 5000

Sample Output:
50
200

Hint:
Test Case#1
Suit 1 = 11 RS = 10 + 1 => 2 notes
Suit 2 = 50 Rs = 50 => 1 notes
Suit 3 = 51 Rs = 50 + 1 => 2 notes
Suit 4 = 1000 Rs = 500 + 500 => 2 notes
Suit 5 = 2000 Rs = 2000 => 1 note
So, both Suit2 and Suit5  require minimum notes and that is 1 note.
Since there is a tie on number of minimum notes, so we go for cheaper suit that is$50 suit.

*/

function lazySherlock(n, arr) {
  arr = arr.sort((a, b) => a - b);
  if (arr.length === 0) {
    return 0;
  }
  let min = Infinity;
  let ans;
  for (let i = 0; i < n; i++) {
    let count = 0;
    let temp = arr[i];
    while (temp !== 0) {
      let rupess = Notes(temp);
      let notes = Math.floor(temp / rupess);
      temp = temp % rupess;
      count += notes;
    }
    if (count < min) {
      min = count;
      ans = arr[i];
    }
  }

  return ans;

  function Notes(money) {
    let arr = [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000];
    let ans = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (money >= arr[i]) {
        ans = arr[i];
      }
    }
    return ans;
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;

  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    let result = lazySherlock(n, arr);
    console.log(result);
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
    runProgram(read);
    process.exit(0);
  });
}
