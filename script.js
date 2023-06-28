const person = {
    firstName: 'Oluwadamilare',
    'last-name': 'Akinbomi',
    age: 20,
    isCool: false,
    hobbies: ['video games', 'watching movie', 'sleeping'],
    address: {
        street: '3 Dada st.',
        city: 'Lagos',
        country: 'Nigeria',
    },
    howOldAmI: function() {
        console.log(`I am ${age} years old.`);

    }
 };

 //console.log(person.firstName)
 // console.log(person['last-name']);

person.hairColor ='black';

delete person.isCool;

//person.howOldAmI();

 //console.log(person)

 const groupOfPeople = [
    {
        name: 'Joskin',
        age: 20,
    },
    {
        name: 'Samuel',
        age: 22,
    },
    {
        name: 'Favour',
        age: 30,
    },

 ];

 console.log(groupOfPeople);