/*

Problem Statement:
Encryption is the process of converting a plaintext message into cipher text 
    which can be decoded back into the original message. 
    An encryption algorithm along with a key is used in the encryption and decryption of data. 
    There are several types of data encryptions which form the basis of network security. 
    Encryption schemes are based on block or stream ciphers.

Today, your task is to encrypt and print the encrypted string. 
    You will be given a single line which contains alphabets, numbers and symbols, followed by a number K. 
    You need to encrypt it in a way such that every character in the string is rotated by the given fixed number K.

Only encrypt Alphabets and Numbers. (A-Z, a-z, and 0-9) . 
    All Symbols, such as - , ; %, should remain unencrypted.

Look at the sample test case for better understanding.

Input:
Input Format:
First line of input contains a single line of string 'S'
Second line contains the number, encrypt key  K

Constraints:
S contains alpha, numeric and symbols
0<=N<=1000


Output:
Print the encrypted string.

Sample Input:
All-convoYs-9-be:Alert1.
4

Sample Output:
Epp-gsrzsCw-3-fi:Epivx5.

Hint:
Sample 1 Explanation
A becomes E, Y becomes C, 9 becomes 3,
-, . unchanged.

*/

function encryptIt(S, K) {
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789",
    bag = "";

  for (let i = 0; i < S.length; i++) {
    if (upper_case.includes(S[i])) {
      let index_of_char = upper_case.indexOf(S[i]);
      let encrypted_index = (index_of_char + K) % upper_case.length;

      bag += upper_case[encrypted_index];
    } else if (lower_case.includes(S[i])) {
      let index_of_char = lower_case.indexOf(S[i]);
      let encrypted_index = (index_of_char + K) % lower_case.length;

      bag += lower_case[encrypted_index];
    } else if (numbers.includes(S[i])) {
      let index_of_num = numbers.indexOf(S[i]);
      let encrypted_index = (index_of_num + K) % numbers.length;

      bag += numbers[encrypted_index];
    } else {
      bag += S[i];
    }
  }
  console.log(bag);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let S = input[0],
    K = +input[1];
  encryptIt(S, K);
}

if (process.env.USER === "") {
  runProgram("");
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
    runProgramm(read);
    process.et(0);
  });
}
