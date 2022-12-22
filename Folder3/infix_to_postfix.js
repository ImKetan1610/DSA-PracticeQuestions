/*

Problem Statement:
You are given an infix expression, you need to convert it to a postfix expression.
Infix expression is an expression that is in the form of (a operator b). eg. a + b, a * b.
Postfix expression is an expression that is in the form of (a b operator). eg. a b +, a b *.

Note : This question is optional
Below is the algorithm to solve it, in case this excites you
Algorithm - Infix to Postfix Conversion
1. Scan the entire expression left to right. 
2. If the character is an operand, add it to the final postfix expression, as the relative ordering of the operands 
is same in postfix and infix expression.
3. If the character is an opening bracket, put it in the stack.
4. If the character is a closing bracket, pop all the elements from the stack, 
until an opening bracket is met. If the opening bracket is not met, and the stack becomes empty, 
then the given infix expression is invalid. 
Brackets in postfix expressions are superfluous, therefore, pop out the bracket, without adding it into the postfix expression.
5. If the character is an operator, pop out all the operators, until the stack becomes empty, 
or the character at the top of the stack has a lower priority than the current character. 
6. After the entire expression is scanned, pop off all the elements from the stack, 
until the stack becomes empty, and add it to the final postfix expression. 
7. Finally, print the postfix expression. 

Priority Order -> (^) > (*,/) > (+,-).
Operators at the same level have same priority. 

Brackets free the expression off the priorities, which the algorithm ensures is taken care of.

Input:
Input Format:
First-line of input contains the infix expression

Constraints:
Number of the operands<=26

Output:
Print the postfix expression

Sample Input:
a+b-c+d*(e-f)/g+(h*(i/j))

Sample Output:
ab+c-def-*g/+hij/*+

*/

function infix2postfix(s) {
  function prec(c) {
    if (c == "^") return 3;
    else if (c == "/" || c == "*") return 2;
    else if (c == "+" || c == "-") return 1;
    else return -11;
  }

  let st = [];
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    if (
      (c >= "a" && c <= "z") ||
      (c >= "A" && c <= "Z") ||
      (c >= "0" && c <= "9")
    )
      result += c;
    else if (c == "(") st.push("(");
    else if (c == ")") {
      while (st[st.length - 1] != "(") {
        result += st[st.length - 1];
        st.pop();
      }
      st.pop();
    } else {
      while (st.length != 0 && prec(s[i]) <= prec(st[st.length - 1])) {
        result += st[st.length - 1];
        st.pop();
      }
      st.push(c);
    }
  }

  while (st.length != 0) {
    result += st[st.length - 1];
    st.pop();
  }

  console.log(result);
}

function runProgram(input) {
  // Write Code Here
  infix2postfix(input);
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
