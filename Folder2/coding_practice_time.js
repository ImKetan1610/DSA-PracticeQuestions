/*

Problem statement:
Sandhya is going to practice N different problems in the exact given order over the next M days. 
For each problem, she writes down the amount of time q[i] she will take to think and code the i-th problem.
Before starting on the problems, 
she took advice from experienced competitive programmers on her practice routine 
and almost all of them advised her to keep her daily load at the minimum possible and avoid over training.
Since she already has N problems to solve, 
she asks you to find the minimum time T such that training everyday for a time t[i]<T is sufficient to solve all the N problems in M days.

Note : Unlike in real world, you cannot think on a problem on one day and solve it on the other day. 
You need to do it on the very same day!

Input:
Input Format :
The first line contains two space separated integers N and M. 
The next line contains N space separated integers denoting the time q[i] required to solve the i-th problem.

Constraints :
N <= 100000
M < N
q[i] <= 1000000000000

Output:
The output consists of one integer, the minimum time T as described in the problem statement.

Sample Input:
5 3
1 2 2 1 3

Sample Output:
3

*/

function check(mid, array, n, K) {
  var count = 0;
  var sum = 0;
  for (var i = 0; i < n; i++) {
    // If individual element is greater
    // maximum possible sum
    if (array[i] > mid) return false;

    // Increase sum of current sub - array
    sum += array[i];

    // If the sum is greater than
    // mid increase count
    if (sum > mid) {
      count++;
      sum = array[i];
    }
  }
  count++;

  // Check condition
  if (count <= K) return true;
  return false;
}

// Function to find maximum subarray sum
// which is minimum
function solve(array, n, K) {
  var max = array.reduce((a, b) => Math.max(a, b));
  var start = max; //Max subarray sum, considering subarray of length 1
  var end = 0;

  for (var i = 0; i < n; i++) {
    end += array[i]; //Max subarray sum, considering subarray of length n
  }

  // Answer stores possible
  // maximum sub array sum
  var answer = 0;
  while (start <= end) {
    var mid = parseInt((start + end) / 2);

    // If mid is possible solution
    // Put answer = mid;
    if (check(mid, array, n, K)) {
      answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return answer;
}

function runProgram(input) {
  input = input.split("\n");
  var [x, z] = input[0].split(" ").map(Number);
  arr = input[1].split(" ").map(Number);

  console.log(solve(arr, x, z));
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
