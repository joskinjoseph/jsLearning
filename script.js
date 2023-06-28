// function declaration / function definition
function sayHello(firstName = 'Joseph', lastName = 'Oluwadamilare') {
    //functionb body
    console.log('Hello',);
    console.log(firstName);
    console.log(lastName);
}

// function call / invoke / executing / run
sayHello('Samuel', 'Akinbomi')
sayHello('Favour', 'Mendy')
sayHello();

function add(num1, num2) {
    const sum = num1 + num2;

    // if the function wnt to return any value, the we use the return keyword at the end of the function

return sum;
}

const result = add(2, 3);
console.log(result);


function sayHelloAgain(firstName = 'Joseph', lastName = 'Oluwadamilare') {
    return `Hello, ${firstName} ${lastName}`;
}


const person = {
    firstName: 'Oluwadamilare',
    'last-name': 'Akinbomi',
    age: 20,
    address: {
        street: '12 Dada street',
        city: 'Lagos',
        country: 'Nigeria',
    },
    howOldAmI: function() {
        console.log(`I am ${this.age} years old.`);

    }
 };

 person.howOldAmI();