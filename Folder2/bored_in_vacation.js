/*

Problem Statement:
Currently, your summer vacations are going on and you are bored so you decided to do something to pass your time.

You found two strings of lowercase english letters having different lengths 
and you decide to create a new string from these two strings.

So decide to create a new string c using the first two strings a and b by performing the following operations-

Choose any character from the string a, remove it from a, and add it to the end of c.
Choose any character from the string b, remove it from b, and add it to the end of c.
But you decided to challenge yourself as this was too easy. 
You decided that you will not perform the same operation more than k times continuously 
and you will perform these operations until one of the strings become empty.

Find the lexicographically smallest string you can create using these conditions.

A string x is lexicographically smaller than a string y if and only if one of the following holds:

x is a prefix of y, but x≠y;
in the first position where x and y differ, the string x has a letter that appears earlier in the alphabet than the corresponding letter in y.

Input:
Input Format
The first line of input contains an integer t, the total number of testcases.

Next 3*t lines, contain the description of the testcases.

For each testcase there are three lines of input.

The first line of input contains three space-separated integers- n, m, and k 
denoting the size of string a, string b, and k.

The second line of input contains the string a.

The third line of input contains the string b.

Constraints:
1 <=t<= 100
1 <=n,m,k<= 100

Output:
Output Format
For each test case output a single line containing the string c.

Sample Input:
3
6 4 2
aaaaaa
bbbb
5 9 3
caaca
bedededeb
7 7 1
noskill
wxhtzdy

Sample Output:
aabaabaa
aaabbcc
dihktlwlxnyoz

Hint:
First Testcase
In the first test case, it is optimal to take two 'a's from the string a and add them to the string c. Then it is forbidden to take more characters from a, hence one character 'b' from the string b has to be taken. Following that logic, we end up with c being 'aabaabaa' when string a is emptied.

Second Testcase
In the second test case it is optimal to take as many 'a's from string a as possible, then take as many 'b's as possible from string b. In the end, we take two 'c's from the string a emptying it.

*/

function runProgram(input) {
  input = input.split("\n");
  let tc = input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [s1, s2, n] = input[line].split(" ").map(Number);
    line++;
    let str1 = input[line].split("");
    line++;
    let str2 = input[line].split("");
    line++;
    logic(s1, s2, n, str1, str2);
    //console.log(s1,s2,n,str1,str2)
  }
}

function logic(s1, s2, n, str1, str2) {
  str1.sort();
  str2.sort();
  let res = "";
  let count1 = 0;
  let count2 = 0;
  let i = 0;
  let j = 0;
  while (i < s1 && j < s2) {
    if (str1[i] < str2[j] && count1 < n) {
      res += str1[i];
      i++;
      count1++;
      count2 = 0;
    } else if (str1[i] > str2[j] && count2 < n) {
      res += str2[j];
      j++;
      count2++;
      count1 = 0;
    } else if (count2 < n) {
      res += str2[j];
      j++;
      count2++;
      count1 = 0;
    } else {
      res += str1[i];
      i++;
      count1++;
      count2 = 0;
    }
  }

  console.log(res);
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
