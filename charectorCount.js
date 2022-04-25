let string = prompt("enter a string");
let count = 0;
for (let i = 0; i < +string.length; i++) {
  count++;
}
console.log(`${string} the number of charector is ${count}`);
