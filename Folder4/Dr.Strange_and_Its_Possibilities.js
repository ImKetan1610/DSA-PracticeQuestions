/*

Description:
Dr. Strange has n distinct integers from 1 to n. 
He uses his mind power and time stone to calculate all the possible subsets using the given n integers. 
Generate all the possible subsets.

Input:
The first line of the input contains one integer n (1 ≤ n ≤ 10).

Output:
Print each possible subset in a new line.
Elements within the set must be in non-decreasing order. 
All the subsets must be distinct and sorted in ascending order or lexicographically. 
For an empty subset just print a blank line.

Sample Input:
3

Sample Output:
1 
1 2 
1 2 3 
1 3 
2 
2 3 
3 

*/

function runProgram(input) {
  let n = +input;
  let arr = [];
  let vist = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
    vist.push(0);
  }
  find(arr, n, [], 0, vist);
}

function find(arr, n, ans, ind, vist) {
  if (ans.length == 0) {
    console.log(" ");
  }

  if (ans.length !== 0) {
    console.log(ans.join(" "));
  }
  if (ind === n) {
    return;
  }
  for (let i = ind; i < n; i++) {
    ans.push(arr[i]);
    find(arr, n, ans, i + 1, vist);
    ans.pop();
  }
}

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
