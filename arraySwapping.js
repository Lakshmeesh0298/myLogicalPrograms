// arra Swappin accending and deccending order

let arr = [10, 50, 30, 90, 40, 100, 20];
let temp;
for (let i = 1; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
let arr1 = [10, 50, 30, 90, 40, 100, 20];
let temp1;
for (let i = 1; i < arr1.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[i] > arr1[j]) {
      temp1 = arr1[i];
      arr1[i] = arr1[j];
      arr1[j] = temp1;
    }
  }
}
console.log(arr1);
