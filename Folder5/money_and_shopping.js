/*

Description:
Alice is in a shopping mall to buy books, shirts and shoes. 
The mall has exactly N different shops and each shop contains all these three items at different prices. 
Alice has a plan which she will be following. 
As per her plan, she won't buy the same item from the current shop 
    if she had already bought that item from the shop adjacent to the current shop.
Alice wants to follow her strategy strictly but at the same time 
    she wants to minimize the total money she spends on shopping. 
You are provided description about all N shops i.e costs of all three items in each shop. 
You need to help Alice find minimum money that she needs to spend 
    such that she buys exactly one item from every shop.

Input:
Input Format:
First line contain number of test cases T. 
Each test case in its first line contain N denoting the number of shops in shopping mall.
Then each of next N lines contains three space separated integers denoting cost of books, 
    shirts and shoes in that particular shop.

Constraints:
1 ≤ T ≤ 10
1 ≤ N ≤ 100000
Cost of each item (book/shirt/shoe) does not exceed 10000

Output:
Output Format:
For each test case, output the minimum cost of shopping taking 
    the mentioned conditions into account in a separate line.

Sample Input:
1
3
1 50 50
50 50 50
1 50 50

Sample Output:
52

*/

function getMinCost(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (j === 0) {
        arr[i][j] = Math.min(arr[i - 1][1], arr[i - 1][2]) + arr[i][j];
      } else if (j === 1) {
        arr[i][j] = Math.min(arr[i - 1][0], arr[i - 1][2]) + arr[i][j];
      } else if (j === 2) {
        arr[i][j] = Math.min(arr[i - 1][0], arr[i - 1][1]) + arr[i][j];
      }
    }
  }
  return arr;
}

function processData(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i++) {
    let arr = input
      .slice(i + 1, Number(input[i]) + i + 1)
      .map((str) => str.trim().split(" ").map(Number));
    let res = getMinCost(arr);
    res = Math.min(...res[res.length - 1]);
    console.log(res);
    i += Number(input[i]);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});
process.stdin.on("end", function () {
  processData(_input);
});
