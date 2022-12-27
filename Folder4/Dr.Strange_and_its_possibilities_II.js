/*

Description:
Dr. Strange is back again and this time he has an array A with n integers which may have duplicates. 
So he again uses his mind power and time stone to calculate all the possible subsets of the input array A. 
Generate all the possible subsets.

Input:
The first line of the input contains one integer n (1 ≤ n ≤ 10) — The size of the array A.
The second line of the input contains n integers (1 ≤ Ai ≤ 10) - The elements of the array A.

Output:
Print each possible subset in a new line.
Elements within the subset must be in non-decreasing order. 
All the subsets must be distinct and sorted lexicographically. 
For an empty subset just print a blank line.

Sample Input:
3
1 2 2

Sample Output:
1 
1 2 
1 2 2 
2 
2 2 

*/

let new_arr = [];
let arr2 = [];
function check(n, arr, index) {
  if (arr2.includes(new_arr.join(" "))) {
  } else {
    arr2.push(new_arr.join(" "));
  }

  if (index == arr.length) {
    return;
  }
  for (let i = index; i < arr.length; i++) {
    new_arr.push(arr[i]);
    check(n, arr, i + 1);
    new_arr.pop();
  }
}

function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let line = 1;
  let arr = input[line].trim().split(" ").map(Number);
  let index = 0;
  arr.sort((a, b) => {
    return a - b;
  });
  check(n, arr, index);
  console.log(arr2.join("\n"));
}
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
