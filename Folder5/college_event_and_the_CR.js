/*

Description
Himanshu the CR of class wants to spread some news about an event to every group of students of the college.He will have to miss Professor DK classes to spread the news to every student, so he came up with a plan,Instead of meeting every student in person he decided to meet few people such that the person to whom he pass the news will spread it to all his friends in a group.And those friends will pass it to other friends and so on.
Your task is to find minimum number of persons he need to meet to spread the news of the event.

Input
Input Format :
First line of input is 't' - Test cases.
Follwed by N, the number of students in the testcase ( 0 to N-1 ).
The next line will contain 'e', the number of friend descriptions 'e'.
The next 'e' lines are the descriptions of type "a b" denoting 'a' friends with 'b'. If 'a' is friends with 'b' then 'b' is friends with 'a'.

Constraints :
1<= t <= 10
2 <= N <= 100000
0 <= e <= N/2
0 <= a,b <= N-1

Output
Output contains t line, the number of people, Himanshu has to meet in person for each test case.

Sample Input 1 
2
4
2
0 1
1 2
3
0

Sample Output 1
2
3

Hint
Case 1: 0 is friends with 1; 1 is friends with 2; so if Himanshu passes the news to 0 & 3, news will pass to all the students.
Case 2: No one is friends with any one. So Himanshu will have to meet every one in person.

*/

function run(n, arr) {
  if (arr.length == 0) {
    console.log(n);
    return;
  }

  function createGraph(data) {
    let map = new Map();

    for (let i = 0; i < n; i++) {
      let z = [];
      map.set(i, z);
    }
    for (let item of data) {
      let x = item[0];
      let y = item[1];
      map.get(x).push(y);
      map.get(y).push(x);
    }
    return map;
  }
  let visited = new Array(+n).fill(false);
  let map = createGraph(arr);
  function dfs(map, start) {
    let stack = [];

    stack.push(start);
    let ans = [];
    while (stack.length) {
      let node = stack.pop();
      let lst = map.get(node);
      for (let x of lst) {
        if (visited[x] == false) stack.push(x);
      }
      visited[node] = true;
      ans.push(node);
    }

    return ans;
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i] == false) {
      dfs(map, i);
      count++;
      if (!visited.includes(false)) break;
    }
  }
  console.log(count);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tt = +input[0];
  i = 1;
  while (tt--) {
    let students = input[i];
    i++;
    let desc = input[i];
    i++;
    let des = [];
    while (desc--) {
      let arr = input[i].trim().split(" ").map(Number);
      i++;
      des.push(arr);
    }

    run(students, des);
  }
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
