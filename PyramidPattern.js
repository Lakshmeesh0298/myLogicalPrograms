//! 30. Pyramid Pattern

let n = 10;
let count = 1;
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += "*";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    string += "L";
    // count++;
  }
  string += "\n";
}
console.log(string);
