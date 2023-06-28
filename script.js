const age = 50;

const drinkingAge = 19;


// if (age >= drinkingAge) {

//   console.log('I can  drink beer!!!')

// } else {

//   console.log('I cannot drink beer!!!')

// }

const passwordTypedIn = 'somepassword';

const actualPassword = 'password';


if (passwordTypedIn === actualPassword) {

  console.log('Correct password, logging you in.')

} else {

  console.log('Incorrect password. Please try again.')

}


//logical operators


const month = 'Septemeber';

const day = 31;


if (month === 'Septemeber' && day === 31) {

  console.log('It is Halloween')

} else {

  console.log('It is not Halloween!!!')

}


//when we have multiple instances we use LS

const grade = 0;


if (grade >= 80) {

  console.log('Letter Grade: A')

} else if (grade >= 70) {

  console.log('Letter Grade: B')

} else if (grade >= 60) {

  console.log('Letter Grade: C')

} else if (grade >= 50) {

  console.log('Letter Grade: D')

} else {

  console.log('Letter Grade: F')

}

//Note: it start reading from up to find the most valid statement. or simply say that it start to find the first true condition from the top

//Tenary ----short form of the LS

//and this can only work with a single line statement

//reverting back to the first code.........

// if (age >= drinkingAge) {

//   console.log('I can  drink beer!!!')

// } else {

//   console.log('I cannot drink beer!!!')

// }


age >= drinkingAge ?   console.log('I can  drink beer!!!') : console.log('I cannot drink beer!!!')

// let canIDrinkMessage;

// if (age >= drinkingAge) {

//   canIDrinkMessage = 'I can  drink beer!!!';

// } else {

//   canIDrinkMessage = 'I cannot drink beer!!!';

// }

// let canIDrinkMessage = age >= drinkingAge

//  ? 'I can  drink beer!!!': 

//  'I cannot drink beer!!!';

 console.log(age >= drinkingAge

    ? 'I can  drink beer!!!': 

    'I cannot drink beer!!!');