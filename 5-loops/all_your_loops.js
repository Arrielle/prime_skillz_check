// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;

for (var i = 0; i < 5; i++) {
  checkz += 1;
};


// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2

for (var i = 0; i < 3; i++) {
  checkz -= 2;
};


// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.

var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < 3; i++) {
  total += numbers[i];
}
console.log(total);

//the first line is setting an array to the variable numbers
// the second line is setting the new variable 'total' to 0
// the third line is running through a for loop 7 times (the length of the array)
// on each run, total (initially set to 0) is added to the value of the current array index
// here's how the loop would run
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// 15 + 6 = 21
// 21 + 7 = 28
// then the loop would end and our final total would be 28
// console is logging out the final total of 28
