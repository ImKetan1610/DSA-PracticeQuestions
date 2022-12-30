/*

Description:
Donald Trump has lost the presidential election of America, 
    and because of the sadness he decides to leaves the White House before he was supposed to. 
Also, he took the entire staff with him, leaving the white house empty, and unguarded. 
Seeing the opportunity, Kim-Jong-Un and his North Korean militias decide to take over the white-house, 
    and they did. 
But fortunately, all the important resources were safeguarded before they took over, except for the Nuclear codes. 
The Nuclear Codes are hidden at different spots in the white house, 
    and the its only a matter of time before the Koreans get it. 
Thankfully, Mike Banning has managed to get into the President’s office.
The white house has been designed in such a way, 
    that every spot where a Nuclear code is hidden can be reached from the President’s office in 1 unit of time. 
So, Mike can go to the site where the code is present, then get the code, come back to the office, 
    and go to the next site.
The time required by the Koreans to get to the Nuclear Codes is given in the form of an array of size N, 
    where N is the number of Nuclear Codes.
The President-elect, Joe Biden, is very tensed. 
He wants to know if Mike can get all the Nuclear Codes before the Koreans. 
Since, you are his personal secretary, he asks you for help. 
If Mike can get all the Nuclear Codes before the Koreans, print “Oorah!”, else print “MayDay”

Note : If the Koreans and the Mike reach the Nuclear Code together, 
    the Koreans will take the key, as they will outnumber him and defeat him to get the key.

Input:
The first line contains T, the number of test cases.
The first line of each test case contains N, the number of Nuclear Codes. 
The next line contains N space separated integers, where the ith integer indicates the time, 
    the Koreans will take to reach the nuclear codes kept at the ith position.

Constraints:
1 <= T <= 10
1 <= N <= 10^4
1 <= A[i] <= 10^4

Output:
For each test case, print “Oorah!”, if Mike can get all the Nuclear Codes before the Koreans, 
    else print “MayDay!”, on a new line.

Sample Input:
2
5
1 2 3 4 5
5
2 8 6 4 10

Sample Output:
MayDay!
Oorah!

Hint:
In the first  test case, the North Koreans and Mike both reach the Nuclear Code kept at position 0 at the same time, 
    the Koreans outnumber Mike, and take the Nuclear codes, so the output is MayDay!
In the second test case, Mike gets hold of all the Nuclear Codes before the North Koreans can reach them, 
    so the output is Oorah!.

*/

function mainsum(n, arr) {
  let count = 0;
  let flag = false;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (arr[i] <= count) {
      flag = true;
      break;
    }
    count++;
  }
  if (flag) {
    console.log("MayDay!");
  } else {
    console.log("Oorah!");
  }
}

function runProgram(read) {
  read = read.trim().split("\n");
  let tc = +read[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +read[line];
    line++;
    let arr = read[line].trim().split(" ").map(Number);
    line++;
    mainsum(n, arr);
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
