 function convertMinutesIntoSeconds(minutes) {
  return minutes * 60;
 }

//  console.log(convertMinutesIntoSeconds(5));
//  console.log(convertMinutesIntoSeconds(10));

function ensureQuestionMark(str) {
  const lastChar =str.charAt(str.length-1);

  // if (lastChar === '?') {
  //   return str;
  // } 

  //   return `${str}?`;


  return lastChar === '?' ? str: `${str}'?'`;
  }

// console.log(ensureQuestionMark('Joskin'));
// console.log(ensureQuestionMark('Man?'));
// console.log(ensureQuestionMark('music'));

function maxOfNumber(numbers) {
  let maxNumber = numbers[0];
 
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber= numbers[i];
    }
  }

  numbers.forEach(number => {
    if (number > maxNumber) {
      maxNumber = number
    }
  });
  return maxNumber;

  return Math.max(...numbers);
}

console.log(maxOfNumber([1, 2, 3]));
console.log(maxOfNumber([1, 2, 3, 10]));

function sarcasticCase(str) {
  let newString = '';

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newString = newString + str[i].toUpperCase();
    } else {
      newString = newString + str[i].toLowerCase();
    }
  }

  return newString;
}

// console.log(sarcasticCase('Hello there'));
// console.log(sarcasticCase('React is a library'));

function noSpace(str) {
  // let newString = '';

  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] !== ' ') {
  //     newString = newString + str[i];
  //   }
  // }

  // return newString;

  return str.split(' ').join('');
}

// console.log(noSpace('Hafa my Guy'));
// console.log(noSpace('I dey Boss'));

function squareSum(numbers) {
//   let result = 0;

//   numbers.forEach(number => {
//      result += (number * number);
//   });

//   return result;

 return numbers
  .map(number => number * number)
  .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}
 
// console.log(squareSum([1,2,3]));
// console.log(squareSum([3,5]));

function positiveSum(numbers) {
  // let total = 0;

  // numbers.forEach(number => {
  //   if (number > 0) {
  //      total += number;
  //   }
  // })

  // return total;

  return numbers
    .filter(number => number > 0)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

}

console.log(positiveSum ([1, 2, -3, 4, 5]));
console.log(positiveSum ([2, -33, -4, 100]));