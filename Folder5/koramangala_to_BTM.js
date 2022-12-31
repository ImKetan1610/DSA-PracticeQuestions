/*

Description:
You are in Koramangala and want to go to BTM 2nd Stage, 
    but roads are blocked. Instead there are n trampolines kept on the route. 
These trampoline are different in a way that you don't just jump on it, but it takes you forward as well. 
There is a number written on all the trampolines 
    that indicates the maximum number of trampoline you can jump from there.
NOTE: The last trampoline is in BTM 2nd stage (where you want to reach)
For instance, assume there are 6 trampolines with numbers 1,3,6,1,0,9 written on it. 
So, from first trampoline you can jump at most 1 trampoline and move to second trampoline with number 3, 
    from which you can take a jump of at max 3 trampolines, that is, you can go to 3rd, 4th or the 5th trampoline..
    so on..
So, in this case, you can reach to BTM in just 3 steps: (1 -> 3 -> 6 -> last(9))

Input:
Input Format :
First line contains   n
Second line contains the number present on the trampolines

Constraints :
n <= 1000

Output:
Output one number (minimum number of steps)

Sample Input:
11
1 3 5 8 9 2 6 7 6 8 9

Sample Output:
3

*/

function call(n, arr) {
  let jump = 0;
  let pos = 0;
  let dest = 0;

  for (let i = 0; i < n; i++) {
    //how max can i reach
    dest = Math.max(dest, arr[i] + i);

    if (pos == i) {
      pos = dest;
      jump++;
    }
  }
  console.log(jump);
}

function rp(input) {
  input = input.trim().split("\n");
  let n = +input[0];

  var arr = input[1].trim().split(" ").map(Number);
  call(n, arr);
}

if (process.env.USER === "") {
  rp(" ");
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
    rp(read);
  });

  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    rp(read);
    process.et(0);
  });
}
