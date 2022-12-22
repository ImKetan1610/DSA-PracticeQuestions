/*

Problem Statement:
You are given an array A of size N. For each element, 
print the closest greater element, to that particular element. 
If there is no greater element for a particular element, print -1.
If the two values, are equidistant from a particular value, 
print the value that occurs to the left of it.
Refer the sample I/O for better understanding

Input:
The first line of the input contains T, the number of test cases. 
The first line of each test case contains N, the size of the array.
The next line contains N space separated integers, denoting the array elements.

Constraints:
1 <= T <= 10
1 <= N <= 10^5
1 <= A[i] <= 10^4

Output:
For each test case, print N space separated integers, denoting the nearest greater element in the array, 
and -1, if no such element exists, on a new line.


Sample Input:
1
5
5 4 1 3 2

Sample Output:
-1 5 4 4 3

Hint:
In the sample test case, the first element 5 has no element greater than it, 
either to the left of it, or to the right of it, therefore, the output is -1.

The second element 4 has only one element greater than it, which is 5, 
which occurs to the left of it, therefore, the output for 4 is 5.

The third element is 1, which has four elements greater than it in the array, 
which are {5,4,3,2}. The closest to 1 are {4,3}, but 4 occurs to the left side. therefore, the output is 4.

The fourth element is 3, the elements greater than 3 in the array are {4,5} 
which both occur to the left of it. But the closer one is 4, therefore, the output is 4.

The fifth element 2 has three elements greater than it, {5,4,3}. 
The value closest to the element 2 is 3, therefore, the output is 3.

*/

function nearestGreatestElement(n, arr) {
  let l_stack = [],
    r_stack = [];
  let l_ans = [],
    r_ans = [];
  let main_ans = [];

  for (let i = 0; i < n; i++) {
    while (l_stack.length != 0 && arr[l_stack[l_stack.length - 1]] <= arr[i])
      l_stack.pop();
    if (l_stack.length == 0) l_ans.push(-1);
    else l_ans.push(l_stack[l_stack.length - 1]);
    l_stack.push(i);
  }
  for (let i = n - 1; i >= 0; i--) {
    while (r_stack.length != 0 && arr[r_stack[r_stack.length - 1]] <= arr[i])
      r_stack.pop();
    if (r_stack.length == 0) r_ans.push(-1);
    else r_ans.push(r_stack[r_stack.length - 1]);
    r_stack.push(i);
  }
  r_ans.reverse();

  for (let i = 0; i < n; i++) {
    if (l_ans[i] == -1 && r_ans[i] == -1) {
      main_ans.push(-1);
    } else if (l_ans[i] == -1 || r_ans[i] == -1) {
      if (l_ans[i] == -1) main_ans.push(arr[r_ans[i]]);
      else main_ans.push(arr[l_ans[i]]);
    } else if (l_ans[i] != -1 && r_ans[i] != -1) {
      let la = i - l_ans[i];
      let ra = r_ans[i] - i;

      if (la > ra) {
        main_ans.push(arr[r_ans[i]]);
      } else if (la < ra) {
        main_ans.push(arr[l_ans[i]]);
      } else if (la == ra) {
        main_ans.push(arr[l_ans[i]]);
      }
    }
  }
  console.log(main_ans.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let n = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    nearestGreatestElement(n, arr);
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
