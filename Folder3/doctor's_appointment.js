/*

Problem Statement:
You have a terrible toothache, so you went to book an appointment to see your doctor. 
    When you reach there you notice that there are no seats and everyone's standing.
The doctor's assistant is pretty strict, so she doesn't allow anyone inside the cabin until it's his turn. 
    People are standing in a random order so she passes each person to check if he's next, 
    when she finds the one she takes him with her. 
    Meanwhile, nobody is allowed to exchange places, 
    when she comes back she repeats the process from the front of the line. 
    She takes one move to move from one person to another. 
    You have to find the total number of moves she used to completely clear the queue.
Note-when she finds the person and takes him with her during that no move is counted.

Input:
The First Line contains the number (n) of persons in the queue.
The Second line contains n evenly spaced integers which represent the names of people according to the list the assistant has.
The Third line again contains n evenly spaced integers which represent the names of people as they are standing in the queue

Output:
You have to output a single number which is the total number of moves she requires.

Sample Input:
4
1 2 3 4
4 2 3 1

Sample Output:
8

Hint:
She goes firstly to Mr. "4" (Move-1) and since "1" is the next person in her list she continues forward. 
    Similarly, she passes "2" and "3" (Move-2 and Move-3), then she goes to "1" (Move-4) and since he's next she takes him with her. 
    When she comes back she again starts with "4" (Move-5) and since "2" is the next person she moves forward (Move-6), and so on.

*/

function runProgram(input) {
  input = input.trim().split("\n");
  var N = +input[0];
  var arr1 = input[1].trim().split(" ").map(Number);
  var arr2 = input[2].trim().split(" ").map(Number);
  checksum(arr1, arr2, N);
}

function checksum(arr1, arr2, N) {
  var moves = 0;

  for (var i = 0; i < N; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        arr2.splice(j, 1);
        moves += j + 1;
        break;
      }
    }
  }
  console.log(moves - 1);
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
