//function declaration
//function helloAgain(firstName) {
 //   console.log(`Hello ${firstName}`);
//}
//function expression
//const hello =function (firstName) {
  // console.log(`Hello ${firstName}`);
//}
//helloAgain('Boss Man');
//hello('Man')

const hello = firstName =>  `Hello ${firstName}`;
console.log(hello('Joskin'))

//another example of the shortcut

//const add = function(num1, num2) {
    //const sum = num1 + num2;

   // return sum;
//}


//short cut
const add = (num1, num2) => 
    num1 + num2;



console.log(add(2,5));

//IIFE -Immediately Invokable Function Expression

//(function(firstName) {
   // console.log(`Hello ${firstName}`);
//})();

const person = {
  firstName: 'Oluwadamilare',
  'last-name': 'Akinbomi',
  age: 20,
  howOldAmI() {
      console.log(`I am ${this.age} years old.`);

  }
};

person.howOldAmI();

//call back function
const button = document.querySelector('button');

const greeting = function() {
  console.log('Hello there!');
}

button.addEventListener('click', greeting)