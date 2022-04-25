let num1 = Number(prompt("enter a number"));
const opretor = prompt("enter a sign");
let num2 = Number(prompt("enter a number"));

function calculator() {
  if (opretor == "+") {
    let add = num1 + num2;
    console.log(add);
  } else if (opretor == "-") {
    let sub = num1 - num2;
    console.log(sub);
  } else if (opretor == "*") {
    let multi = num1 * num2;
    console.log(mulit);
  } else if (opretor == "/") {
    let dive = num1 / num2;
    console.log(dive);
  } else if (opretor == "%") {
    let mod = num1 + num2;
    console.log(mod);
  }
}
calculator();
