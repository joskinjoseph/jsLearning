const genderTerms = 'transGender';

if (genderTerms === 'male') {
    console.log('Gents');
} else if (genderTerms === 'female') {
    console.log('Ladies');
} else if (genderTerms === 'transGender') {
    console.log('Toilet');
} else {
    console.log('FUCK OFF!!!');
}


switch (genderTerms) {
    case 'male':
        console.log('Gents');
        break;
    case 'female':
        console.log('Ladies');
        break;
    case 'transGender':
         console.log('Toilet');
         break;    
   default:
        console.log('FUCK OFF!!!');
}
// SWitch statement is  checking for strictly quality

// And what if its not strict (===) but corresponding (> or< or others)?.. Then..

const grade = 85

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


  switch (true) {
    case grade >= 60:
        console.log('Letter Grade: A');
        break;
    case grade >= 70:
        console.log('Letter Grade: B');
        break;
    case grade >= 60:
         console.log('Letter Grade: C');
         break;
    case grade >= 50:
        console.log('Letter Grade: D');
        break;     
   default:
         console.log('Letter Grade: F');
  }

      
  const animal = 'Cow'

  switch(animal) {
case 'Cow':
console.log('I am a cow');
case 'Giraffe':
console.log('I am a Giraffe');
case 'Dog':
case 'Pig':
console.log('This animal is NOT extinct');
break;
case 'Dinosaur':
case 'Dodo':
    default:
        console.log('This animal is extinct');    
  }


