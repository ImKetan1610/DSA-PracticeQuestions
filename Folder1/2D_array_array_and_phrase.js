/*

Problem Statement:
You are given an array matrix of n rows and m columns which contains lower case English letters.
How many times does the phrase "saba" appear horizontally, vertically, and diagonally in the grid?


Input:
Input Format:
First line: Two integer n and m, 
where n denotes the number of rows and m denotes the number of columns in the grid

Next n lines: Each line contains m characters which contains lower-case English letters only

Constraints:
1 <= n,m <= 100

Output:
Output Format:
Print the number of times the word “saba” appears in the grid.

Sample Input:
5 5
safer
amjad
babol
aaron
songs

Sample Output:
2

*/

function twoArrayAndPhrase(N, M, matrix) {
  //could be reverse also
  //have to be global so any test case could have pass
  let total_count = 0;
  let search_phrase = "saba";
  let search_phrase_length = search_phrase.length;

  //check row first
  //by looping though the row
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      let row_string = "";
      //check if the letters are enough to make phrase
      if (col + search_phrase_length <= M) {
        //store the search phrase
        for (
          let phrase_index = 0;
          phrase_index < search_phrase_length;
          phrase_index++
        ) {
          row_string += matrix[row][col + phrase_index];
        }
        if (row_string === search_phrase) {
          total_count += 1;
        }
      }
    }
  }

  //check columns
  for (let col = 0; col < M; col++) {
    for (let row = 0; row < N; row++) {
      let col_string = "";
      //check if there are enough letters to make phrase
      if (row + search_phrase_length <= N) {
        //store the search phrase
        for (
          let phrase_index = 0;
          phrase_index < search_phrase_length;
          phrase_index++
        ) {
          col_string += matrix[row + phrase_index][col];
        }
        if (col_string === search_phrase) {
          total_count += 1;
        }
      }
    }
  }

  //check diagonally
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      let diagonal_string = "";
      //check if there are enough letters to make phrase
      if (row + search_phrase_length <= N && col + search_phrase_length <= M) {
        for (
          let phrase_index = 0;
          phrase_index < search_phrase_length;
          phrase_index++
        ) {
          diagonal_string += matrix[row + phrase_index][col + phrase_index];
        }
        if (diagonal_string === search_phrase) {
          total_count += 1;
        }
      }
    }
  }

  //check reverse diagonally
  for (let row = N - 1; row >= 0; row--) {
    for (let col = 0; col < M; col++) {
      let diagonal_string = "";
      //check if there are enough letters to make phrase
      if (row - search_phrase_length >= -1 && col + search_phrase_length <= M) {
        for (
          let phrase_index = 0;
          phrase_index < search_phrase_length;
          phrase_index++
        ) {
          diagonal_string += matrix[row - phrase_index][col + phrase_index];
        }
        if (diagonal_string === search_phrase) {
          total_count += 1;
        }
      }
    }
  }

  console.log(total_count);
}
