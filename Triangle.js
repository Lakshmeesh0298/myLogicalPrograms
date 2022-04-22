// //! 31. Triangle pattern

let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);

//! 44. Star Pattern

let n1 = 6;
let string1 = "";

for (let i = 0; i < n1; i++) {
  for (let j = 0; j < n1; j++) {
    string1 += "L";
  }
  string1 += "\n";
}
console.log(string1);




