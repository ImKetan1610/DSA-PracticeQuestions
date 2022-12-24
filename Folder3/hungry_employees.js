/*

Problem Statement:
The Cafeteria at Masai has two food choices, veg and non-veg, referres to as by numbers 0 and 1.
All employees stand in a queue and each of them have a preference, 
    i.e. the vegetarians eat only veg and non-vegetarians eat only non-veg food.
The number of meals in the cafeteria is same as the number of employees, 
    but the meals are stacked in a stack and the following event occurs at each step:
If the employee at the front of the queue eats veg food and the meal at the top of the stack is veg, 
    they will take it and leave the queue.
Otherwise, they will leave the queue and go to the queue's end.
This continues until none of the queue employees want to take the top meal and are thus unable to eat.
You are given two integer arrays employees and meals 
    where meals[i] is the type of the i​​​​​​th meal in the stack (i = 0 is the top of the stack) 
    and employees[j] is the preference of the j​​​​​​th employee in the initial queue (j = 0 is the front of the queue).
Return the number of employees that are unable to eat.

Input:
Input Format:
The first line of input contains an integer n - the size of employees queue and the number of meals available
The second line contains n space separated integers, the ith meal in the stack.
The third line contains n space separated integers, the preference of the ith employee in the queue.
Note:- 0 denotes veg and 1 denotes non-veg for both meal's in the stack and food preference of employees in the queue.

Constraints:
1 <= n <= 100
meal[i] = 0 OR meal[i] = 1
employees[i] = 0 OR employees[i] = 1

Output:
Output Format:
Print the number of employees that are unable to eat.

Sample Input:
4
1 1 0 0
0 1 0 1

Sample Output:
0

Hint:
Following sequence of event takes place :-
Front employee leaves the top meal and returns to the end of the line making employees = [1,0,0,1].
Front employee leaves the top meal and returns to the end of the line making employees = [0,0,1,1].
Front employee takes the top meal and leaves the line making employees = [0,1,1] and meals = [1,0,1].
Front employee leaves the top meal and returns to the end of the line making employees = [1,1,0].
Front employee takes the top meal and leaves the line making employees = [1,0] and meals = [0,1].
Front employee leaves the top meal and returns to the end of the line making employees = [0,1].
Front employee takes the top meal and leaves the line making employees = [1] and meals = [1].
Front employee takes the top meal and leaves the line making employees = [] and meals = [].
Hence all employees are able to eat.

*/

function employees(n, meals, pref) {
  for (let i = 0; i < n; i++) {
    let j = 0;
    while (pref.length != 0 && pref[0] != meals[0]) {
      let el = meals.shift();
      meals.push(el);
      if (j > n) {
        return pref.length;
      }
      j++;
    }

    if (pref[0] === meals[0]) {
      pref.shift();
      meals.shift();
    }
  }

  return pref.length;
}

function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let meals = input[1].trim().split(" ").map(Number);
  let pref = input[2].trim().split(" ").map(Number);
  console.log(employees(n, meals, pref));
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
