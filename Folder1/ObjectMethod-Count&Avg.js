/*

Problem Statement:
Given an object which contain a key data containing some values.
Implement the following object methods for the given problem.
// Given data array, find the count of even number present in data array
                 countEven : function() { },
// Given data array, find the sum of odd number present in the data array
                 sumOdd : function() { },
// Find the average of all the numbers present in data array
                 average : function() { },
Note : For Average take the floor value

Input:
The first line of the input contains the value N, the number of elements in the array
The next line contains N space separated values, denoting the values of the array

Output:
Complete the three function, and Print the required value
Please note you have to print the value


Sample Input:
13
27 31 42 78 62 12 34 89 51 41 31 38 40

Sample Output:
7
6
45

Hint:
In the given input array27 31 42 78 62 12 34 89 51 41 31 38 40
Even numbers are :42, 78, 62, 12, 34, 38, 40
Odd numbers are :27, 31, 89, 51, 41, 31
average = (27+31+42+78+62+12+34+89+51+41+31+38+40)/13 = floor(44.83)=45
Count of Even = 7
Count of Odd = 6
Average = 45

*/

obj = {
  data: [], // DO NOT WRITE ANYTHING IN THIS [ Data will be automatically available during execution]

  countEven: function () {
    // Part 1 : Write Code Here
    let count = 0;
    for (x of obj.data) {
      if (x % 2 === 0) {
        count++;
      }
    }
    console.log(count);

    // Console.log the output : even count
  },

  countOdd: function () {
    // Part 2 : Write Code Here
    let count1 = 0;
    for (x of obj.data) {
      if (x % 2 !== 0) {
        count1++;
      }
    }
    console.log(count1);

    // Console.log the result : odd count
  },

  average: function () {
    // Part 3 : Write Code Here
    let sum = 0;
    for (x of obj.data) {
      sum += x;
    }
    console.log(Math.floor(sum / obj.data.length));

    // Console.log the output : average
  },
};
