let a = 'hi';
let b = a;
b = b+ ' there';  

console.log(a);
console.log(b);

let c = [1, 2];
let d = c;
d.push(3);

console.log(c);
console.log(d);


let num1 = 2;
let num2 = 3;

function add(param1, param2) {
  return param1 + param2;
}

const result = add (num1, num2);
console.log(result);

const myArray = ['a', 'b'];

function appendToArray(someArray) {
  someArray.push('c');
  return someArray;
}

const arrayResult = appendToArray(myArray);
console.log(myArray);
console.log(arrayResult);


const x ={name: 'Andre'};
const y ={name: 'Andre'};
const z = x;
z.name = 'Bob';

console.log(x === y);
console.log(x);
console.log(y);
console.log(z);

