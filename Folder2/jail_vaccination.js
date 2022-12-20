/*

Problem Statement:
In a Jail, there are N rooms, they are numbered with integers from 1 to N. 
Each room consists of captives, there are a[i] captives in the ith room. 
The captives in the room are numbered from 1 to a[i].
A Doctor is arranged for vaccinating some of the captives who had casualties during the war. 
The doctors vaccinate the captives and a fixed number of vaccines are given for specific numbered captives  
Sometimes there is no specific room and captive number on the vaccine cover. 
In this case, assume that all the captives are numbered from 1 to a[1] + a[2] + a[3] + ….+ a[n] 
and the captives of the first room goes first, the captives of the second room goes after that and so on.

For example, in case n=2, a[1]=3 and a[2]=5 a vaccine can have any integer from 1 to 8 written on it. 
If the number 7 is written on the vaccine, 
it means that the vaccine should be injected to captive number 4 of the second room.

For each of M vaccines by the captive number among all N rooms, 
Determine the particular room and the captive number in the room 
where this letter should be injected to that captive and he may be saved.


Input:
The first line contains two integers N and M, the number of rooms and captives
The second line contains a sequence a[1],a[2],...a[N], where a[i] equals to the number of captives in the ith room.
The third line contains a sequence b[1],b[2]...,b[M] (1 <= b[j] <= a[1] + a[2],....a[N]) where b[j] equals to the captive number(among all flats of all buildings) for the jth vaccine. All b[j] are in increasing order.

Constraints:
1 <= N <= 10^5
1 <= M <= 10^5
1 <= a[i] <= 10^10
1 <= b[j] <= a[1] + a[2] + a[3] +....+a[N]


Output
Print M lines, For each vaccine print two integers f and k,  
the room number f(1 <= f <= N) and the captive number k 
in this building (1 <= k <= a[f]) to inject this vaccine to.


Sample Input:
3 6
10 15 12
1 9 12 23 26 37

Sample Output:
1 1
1 9
2 2
2 13
3 1
3 12

Sample Input:
2 3
5 10000000000
5 6 9999999999

Sample Output:
1 5
2 1
2 9999999994

Hint:
Explanation of Sample 1
In the first example, the letters should be delivered in the following order.
The first vaccine in flat 1 to the first captive
The second vaccine in flat 9 to the first captive.
The third vaccine to captive 2 of the second room.
The fourth vaccine to captive 13 of the second room
The fifth vaccine to the captive 1 of the third room
The sixth vaccine to captive 12 of the third room.

*/

// Partially Accepted

function runProgram(input) {
  var input = input.trim().split("\n");
  var room_vac = input[0].trim().split(" ").map(Number);
  var room = room_vac[0];
  var vac = room_vac[1];
  var room_arr = input[1].trim().split(" ").map(Number);
  var vac_arr = input[2].trim().split(" ").map(Number);
  logic(room, vac, room_arr, vac_arr);
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

function logic(room, vac, room_arr, vac_arr) {
  var arrp = [];
  var sum = 0;
  var arr1 = room_arr;
  var arr2 = vac_arr;
  for (var i = 0; i < room; i++) {
    sum += room_arr[i];
    arrp.push(sum);
  }
  //  console.log(room_sum)
  var c = 0;
  var i = 0;
  var j = 0;
  while (i < vac) {
    if (j == 0 && arr2[i] <= arrp[j]) {
      console.log(j + 1, arr2[i]);
      i += 1;
    } else if (arr2[i] <= arrp[j]) {
      //   console.log(arrp[j],arr2[i])
      var p = arr2[i] - arrp[j - 1];
      console.log(j + 1, p);
      i += 1;
    } else {
      j += 1;
    }
    c += 1;
  }
}
