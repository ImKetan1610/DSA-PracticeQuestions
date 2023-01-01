/*


Description:
So, your boss Ankush gave you a challenge today.
He gave you an array and asked you to create an array where all elements are equal.
You are allowed only to perform two types of operations on this:
Create a duplicate of an array, i.e. now you have one more copy of that array.
Choose two elements, from the same array or the different arrays and swap them
You can perform these operations any number of times but you want to impress your boss and show him boss that you are smart, so you will try to use the minimum number of operations required for the job.

Input
Input Format
The input contains multiple testcases.
The first line contains an integer t - the number of testcases.
The next 2*t lines contain the description of the t testcases.
The first line of each testcase contains an integer n - the size of the array.
The second line contains n space-separated integers a1,a2..an, the elements of the array.

Constraints
1 <=t<= 10^3
1 <=n<= 10^5
-10^6 <=ai<= 10^6

Output
Output Format
For each test case output a single integer — the minimal number of operations needed to create at least one copy where all elements are equal.

Sample Input 1 
3
1
1789
6
0 1 3 3 7 0
2
-1000000 1000000

Sample Output 1
0
6
2

Hint
First testcase
In the first test case all elements in the array are already equal, that's why the answer is 0.

Second testcase
In the second test case it is possible to create a copy of the given array. After that there will be two identical arrays:[ 0 1 3 3 7 0 ] and [ 0 1 3 3 7 0 ]
After that we can swap elements in a way so all zeroes are in one array, so now the arrays become: [ 0 0 0 3 7 0 ] and [ 1 1 3 3 7 3 ]
Now let's create a copy of the first array, so now we have these arrays: [ 0 0 0 3 7 0 ], [ 0 0 0 3 7 0 ] and [ 1 1 3 3 7 3 ]
Let's swap elements in the first two copies, giving us: [ 0 0 0 0 0 0 ], [ 3 7 0 3 7 0 ] and [ 1 1 3 3 7 3 ].
Finally, we made a copy where all elements are equal and made 6 operations.
It can be proven that no fewer operations are enough.

Third testcase
In the third test case it is possible to create a copy of the given array. After that there will be two identical arrays:[ -1000000 1000000 ] and [ -1000000 1000000 ]
After that we can swap elements in a way so both the arrays have all elements equal: [ 1000000 1000000 ] and [ -1000000 -1000000 ]
It can be proven that no fewer operations are enough.

*/

function ok(len, arr) {
  if (len == 1) {
    console.log(0);
  } else {
    if (alleq(arr)) {
      console.log(0);
    } else {
      let obj = {},
        maxn = 0,
        max,
        ans = 0,
        initialmaxn;
      for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == undefined) {
          obj[arr[i]] = 1;
        } else {
          obj[arr[i]] = obj[arr[i]] + 1;
        }
      }
      for (let key in obj) {
        if (obj[key] > maxn) {
          maxn = obj[key];
          max = key;
        }
      }
      initialmaxn = maxn;
      // console.log(maxn,max)
      while (maxn < len) {
        //cpy
        ans++;
        //dbl
        //ans=ans*2
        maxn = maxn * 2;
      }

      if (maxn != len) {
        maxn = maxn / 2;
        maxn = maxn + (len - maxn);
      }
      console.log(ans + (maxn - initialmaxn));
    }
  }

  function alleq(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] != arr[0]) {
        return false;
      }
    }
    return true;
  }
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var tc = +input[0];

  var line = 1;
  for (var i = 0; i < tc; i++) {
    var len = +input[line++];

    var a = input[line++].split(" ").map(Number);

    ok(len, a);
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
  read = read.replace(/\nS/, "");
  runProgram(read);
});
