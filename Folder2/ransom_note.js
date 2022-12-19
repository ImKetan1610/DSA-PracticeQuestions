/*

Problem Statement:
Harold is a kidnapper who wrote a ransom note, 
but now he is worried it will be traced back to him through his handwriting. 
He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. 
The words in his note are case-sensitive and he must use only whole words available in the magazine. 
He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, 
print Yes if he can replicate his ransom note exactly using whole words from the magazine; 
otherwise, print No.


Input:
Input Format:
The first line contains two space-separated integers,n and m, 
the numbers of words in the magazine and the note, respectively.
The second line contains n space-separated strings, each magazine[i].
The third line contains m space-separated strings, each note[i].

Constraints:
1 <= n,m <= 30000
1 <= length of magazine[i] <= 5
1 <= length of note[i] <= 5
Each word consists of english alphabetic letters (i.e a to z and A to Z)


Output:
Output Format:
Print Yes if he can replicate his ransom note exactly using whole words from the magazine; 
otherwise, print No.


Sample Input:
6 4
give me one grand today night
give one grand today

Sample Output:
Yes

Sample Input:
6 5
two times three is not four
two times two is four

Sample Output:
No

Hint:
First testcase
All words in the note occur in the magazine

Second testcase
'two' only occurs once in the magazine

*/

//Enter code here
function RansomNote(N, M, string1, string2) {
  let number = 0;

  for (let i = 0; i <= string2.length - 1; i++) {
    for (let j = 0; j <= string1.length - 1; j++) {
      if (string2[i] == string1[j]) {
        number++;
      }
    }
  }
  if (number == string2.length) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
function runProgram(input) {
  // Write Code Here
  input = input.split("\n");
  let [N, M] = input[0].trim().split(" ").map(Number);
  let string1 = input[1].trim().split(" ");
  let string2 = input[2].trim().split(" ");
  RansomNote(N, M, string1, string2);
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
