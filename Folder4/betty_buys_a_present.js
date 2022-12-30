/*

Description:
Betty and Archie are best friends and since Archie's birthday is in one week, 
    Betty wants to buy a present for him. 
She goes to the gift shop and selects a gift of price P. 
Betty has 9 coins each of value from 1 to 9 respectively. 
Find out the different in which Betty can pay for the gift such that she can only use K coins.

Input:
Input Format:
The first line contains price P of the gift and number of coins K she can use.

Constraints:
1<= P <= 60
2<= K <= 9

Output:
Display the different ways in which Betty can pay for the gift using only K coins in 
    lexicographically increasing order. If no combinations are present print -1.

Sample Input:
8 2

Sample Output:
1 7
2 6
3 5

Hint:
There are three distinct ways to buy the gift by using 2 coins : (1 + 7), (2 + 6) , (3 + 5)
She can not use (4 + 4) as she only has one coin for each value.

*/

let runProgram = (input) => {
  input = input.split("\n");
  let [amount, k] = input[0].split(" ").map(Number);
  let line = 1;
  bettybuy(amount, k, [], 1);
  if (flag === false) {
    console.log("-1");
  }
};
let spent = 0;
let flag = false;
let bettybuy = (amount, k, arr, index) => {
  if (arr.length == k && spent == amount) {
    flag = true;
    console.log(arr.join(" "));
    return;
  }
  if (arr.length > k || spent > arr) {
    return;
  }
  for (let i = index; i < 10; i++) {
    arr.push(i);
    spent += i;
    bettybuy(amount, k, arr, i + 1);
    arr.pop();
    spent -= i;
  }
};

if (process.env.USER === "") {
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
