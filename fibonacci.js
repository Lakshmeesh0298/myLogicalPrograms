let number = Number(prompt("enter a num"));
let num1 = 0;
let num2 = 1;
let nextTerm;
nextTerm = num1 + num2;
while (nextTerm <= number) {
  console.log(nextTerm);
  num1 = num2;
  num2 = nextTerm;
  nextTerm = num1 + num2;
}

