/*

Problem Statement:
You are given a 2D array, whose dimensions are stored in two variables with the name N and M
The value stored in N denotes the number of rows, and the value in M denotes the number of columns
The 2D array is stored in a variable with the name arr, and contains lower case English characters
You have to print Yes, if any particular row of a 2D array contains at least one vowel, at least print No

For example, 
consider the value stored in N = 3, M = 2, 
and the array is arr = [a,b],[c,d],[e,f], then the required output will be

Yes (This row contains the vowel a)
No  (This row does not contains any vowel)
Yes (This row contains the vowel e)

Input:
The first line of the input contains the value stored in N and M
The next N lines contain M values each denoting the value stored in arr

Output:
For each row, print Yes, if the row contains at least one vowel, otherwise print No

Sample Input:
3 2
a b
c d
e f

Sample Output:
Yes
No
Yes

Hint:
In the sample test case, the value stored in N = 3,M = 2, 
and the array is arr = [a,b],[c,d],[e,f], then the required output will be

Yes (This row contains the vowel a)
No  (This row does not contains any vowel)
Yes (This row contains the vowel e)

*/

function vowelsInRows(N, M, arr) {
  //write code here
  for (let i = 0; i < N; i++) {
    let bag = "";
    for (let j = 0; j < M; j++) {
      bag += arr[i][j] + " ";
    }
    if (checkprime(bag)) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}

function checkprime(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "a" ||
      arr[i] == "e" ||
      arr[i] == "u" ||
      arr[i] == "i" ||
      arr[i] == "o"
    ) {
      return true;
    }
  }
  return false;
}
