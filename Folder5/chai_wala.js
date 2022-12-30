/*

Description:
Nandu sells tea. 
He knows that his customer would be sad 
    if they have to wait for more minutes than the number of cups of tea they are going to order. 
It takes 1 minute to make 1 tea.
Given an array, a, which is a queue of customers where a[i] is the number of cups of tea they are going to order.
Nandu can tell customers to swap places in the queue 
    so that he can have the maximum possible happy customers at the end of the day. 
Customers would switch without any argument when Nandu tells them to.
Nandu can swap customers any number of times.

Input:
Input Format:
First-line contains N, no of customers.
The second line contains N spaced integers, the number of cup of tea each customer is going to order.

Constraints:
1 <= N <= 10^5
1 <= a[i] <= 10^9

Output:
Output Format:
Print a single integer maximum possible number of happy customers at end of the day.

Sample Input:
3
1 2 3

Sample Output:
3

Sample Input:
3
3 3 1

Sample Output:
2

Hint:
Sample test case 1:-
Customer 1 is happy as he has to wait for 0 secs (0 <=1).
Customer 2 is happy as he has to wait for 1 sec (1<=2).
Customer 3 is happy as he has to wait for 3 sec (3<=3).
Sample test case 2:-
Nandu will swap customer 1 and customer 3.
Customer 3 is happy as he has to wait for 0 secs (0 <=1).
Customer 2 is happy as he has to wait for 1 sec (1<=3).
Customer 1 is sad as he has to wait for 4 sec (4>3).

*/

function chaiwala(n, arr) {
  arr.sort((a, b) => a - b);
  let time = 0,
    c = 0;
  for (let x = 0; x < n; x++) {
    if (time <= arr[x]) {
      time += arr[x];
      c++;
    }
  }
  console.log(c);
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let s = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  chaiwala(s, arr);
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
