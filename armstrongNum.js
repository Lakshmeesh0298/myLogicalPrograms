let number = Number(prompt("enter a number"));
let sum = 0;
let temp = number;

while (temp > 0) {
  let reminder = temp % 10;
  sum += reminder * reminder * reminder;
  temp = parseInt(temp / 10);
}
if (number == sum) {
  console.log("yes you enter number is armstrong number");
} else {
  console.log("no you enter number is not a armstrong number");
}
