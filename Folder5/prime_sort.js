/*

Description
Given an array of N non negative integers, you need to sort the elements in increasing order of number of distinct prime factors of the elements. If two elements have same number of distinct prime factors, the smaller number comes first in the sorted array.

Input
Input Format
The first line contains the size of the array N
The second line contains the elements in the array

Constraints
1<=N<=10^6
1<=Arr[i]<=10^6

Output
Print the elements in increasing order of number of distinct prime factors of the elements, if two numbers have same number of distinct prime factors, print the smaller element first

Sample Input 1 
5
7 18 5 25 10 

Sample Output 1
5 7 25 10 18 

Hint
The distinct prime factors of the elements are given as :
5 -> (5)
7 -> (7)
25 -> (5)
10 -> (2,5)
18 ->(2,3)
Therefore after sorting , we get (5,7,25) for 1 prime factor and (10,18) for 2 prime factors

*/

function findPrime(n) {
  prime[1] = false;
  for (let p = 2; p * p <= n; p++) {
    if (prime[p]) {
      for (let i = p * 2; i <= n; i += p) prime[i] = false;
    }
  }
}

var prime = Array(1000000).fill(true);
findPrime(1000000);

function runProgram(ip) {
  ip = ip.trim().split("\n");

  const n = +ip[0];
  const arr = ip[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  find(arr, n);
}

function find(arr, n) {
  let ans = [];
  let max = -Infinity;

  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (let i = 0; i < n; i++) {
    ans[arr[i]] = findFactors(arr[i]);
  }
  arr.sort((a, b) => ans[a] - ans[b]);

  console.log(arr.join(" "));
}

function findFactors(num, obj) {
  let ans = [];
  let count = 0;
  let sq = 1;
  for (let i = 2; i < Math.pow(num, 0.5); i++) {
    if (num % i === 0) {
      ans.push(i, num / i);
    }
    sq = i;
  }
  sq++;
  if (sq) {
    if (sq * sq === num) {
      ans.push(sq);
    }
  }
  ans.push(num);

  for (let i = 0; i < ans.length; i++) {
    if (prime[ans[i]]) {
      count++;
    }
  }

  return count;
}

function mergeSort(arr, ans, low, high) {
  if (high <= low) {
    return;
  }
  let p = partition(arr, ans, low, high);

  mergeSort(arr, ans, low, p - 1);

  mergeSort(arr, ans, p + 1, high);
}

function partition(arr, ans, low, high) {
  let p = low;
  let i = low,
    j = high;

  while (i < j) {
    while (arr[i] <= arr[p] && i < high) {
      i++;
    }
    while (arr[j] > arr[p] && j > low) {
      j--;
    }

    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      temp = ans[i];
      ans[i] = ans[j];
      ans[j] = temp;
    }
    if (j <= i && arr[j] < arr[p]) {
      let temp = arr[p];
      arr[p] = arr[j];
      arr[j] = temp;
      temp = ans[p];
      ans[p] = ans[j];
      ans[j] = temp;
    }
  }
  return j;
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
