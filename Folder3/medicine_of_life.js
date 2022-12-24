/*

Problem Statement:
The vaccine for corona virus is in short supply, 
    therefore, the Scientists at the University of Masai, 
    came up with certain number of chemical compounds 
    which on combining can make an alternative medicine for Corona Virus
But, all these chemical compounds have different reactive power, and for the vaccine to be effective, 
    two chemical compounds need to be mixed such that the sum of total reactivity of the two compounds is equal to K.
The compounds are kept strictly increasing order of their reactivity. 
    You have to find out if there are two compounds whose combine reactivity is equal to K or not.

Input:
The first line of the input contains T, the number of test cases.
The first line of each test case, containsN, the number of compounds, andKis the required reactivity
The next line contains N space separated integers, indicating the reactivity of individual compounds
1 <= T <= 10
2 <= N <= 1000, 2 <= B <= 3*10^5
1 <= Ai <= 10^5

Output:
For each test case, print Possible, if there are two compounds for whom the sum of individual reactivity is K, 
    else print Impossible, on a new line.

Sample Input:
2
5 7
1 2 3 4 5
5 12
1 2 3 4 5

Sample Output:
Possible
Impossible

Hint:
In the first test case, the sum of compounds with reactivity 2 and that with reactivity 5 is equal to K = 7, 
    therefore, the answer is Yes
In the second test case, no two compounds have the sum equal to K = 12. Therefore, the answer is No.

*/

const major = (n, k, arr) => {
  let l = 0,
    r = n - 1;

  let result = "Impossible";
  while (l < r) {
    let sum = arr[l] + arr[r];
    if (sum == k) {
      result = "Possible";
      break;
    } else if (sum < k) {
      l++;
    } else if (sum > k) {
      r--;
    }
  }
  console.log(result);
};

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0],
    j = 1;
  for (let i = 0; i < tc; i++) {
    let nk = input[j++].trim().split(" ").map(Number);
    let n = nk[0],
      k = nk[1];
    let arr = input[j++].trim().split(" ").map(Number);
    major(n, k, arr);
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
