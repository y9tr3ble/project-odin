let arr = [
  'one',
  'two',
  'three' ,
];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

arr[0] = 'zero';
arr[1] = "one";
arr[2] = "two";
arr[3] = "three";
console.log(arr);

console.log(`Length of array - ${arr.length}`);

arr.pop();
console.log(arr);

arr.push("three");
console.log(arr);

arr.shift(arr);
console.log(arr);

arr.unshift("zero");
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(`element - ${i}`)
  console.log(arr[i]);
}
// or we can do it
for (let i of arr) {
  console.log(`element - ${i}`)
  console.log(i)
}

let martix = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
]

console.log(martix[2][0]);

// https://learn.javascript.ru/array
// #2
let styles = ['Джаз','Блюз'];
console.log(styles);
styles.push("Рок-н-ролл");
console.log(styles);
styles[1] = "Классика";
console.log(styles);
styles.shift(styles);
console.log(styles);
styles.unshift('Рэп', 'Регги');
console.log(styles);