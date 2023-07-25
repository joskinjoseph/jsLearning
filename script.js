// for loop

// for (let i = 0; i < 10; i++) {
//   console.log (`i is ${i}`);
// }

// const people = ['Andre', 'Bob', 'Sally'];

// for (let i = 0; i < people.length; i++) {
//   console.log (people[i]);
// }

//Break and Continue

// for (let i = 0; i < 10; i++) {
//   if (i === 4) {
//     braek;
//   }

//   console.log(`i is ${i}`);
//}

// for (let i = 0; i < 10; i++) {
//   if (i === 4) {
//     continue;
//   }

//   console.log(`i is ${i}`);
// }

//While Loops

// let j = 0;
// while (j < 10) {
//   console.log(`j is ${j}`);
//   j = j + 2;
// }

//do while loop

// let k = 10 - 5;

// do {
//   console.log(`k is ${k}`);
//   k++;
// } while (k < 10)

//for in loops

// const person = {
//   firstName: 'Andre',
//   lastName: 'Madarang',
//   job: 'web Developer',
// };

// for(const x in person) {
//   console.log(person[x]);
// }

//for of loops
const people = ['Andre', 'Bob', 'Sally'];

// for(const y of people) {
//   console.log(y);
// }

//foreach

// people.forEach((person, index) => {
//   console.log(`Index ${index}: ${person}`);
// });

//map
const peopleMap = people.map((person, index) => {
  return `${index}: ${person}`;
});

console.log(peopleMap);
