'use strict';
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2, 1220);
// skipping over set value in the function array
createBooking('LH123', undefined, 16666);



const flight = 'LH234';
const tony = {
  name: 'Tony Cavasos',
  passport: 3211515156,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 3211515156) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, tony);
// console.log(flight);
// console.log(tony);

// // Is the same as doing......

// const flightNum = flight;
// const passenger = tony;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(tony);
checkIn(flight, tony);


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function
////////////////////////////////////////////////////////////////// ------- Higher-Order Functions 
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('🤌');
};

document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);


// Functions Returning Functions 
////////////////////////////////////////////////////////////////// ------- Functions Returning Functions 
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');
greetHey('Tony');
greetHey('Jonas');

greet('Hello')('Jonas');

// Challenge
// -Arrow function shortcut
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Tony');

// The Call and Apply Methods
////////////////////////////////////////////////////////////////// --- The Call and Apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(655, 'Tony Cavasos');
lufthansa.book(854, 'Shayla Cavasos');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Does NOT work you have to use one out of 3 functions to do so CALL || BIND || APPLY
//book(23, 'Sarah Williams');

// Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');

const swiss = {
  airline: 'Swiss Air Lines ',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 598, 'Mary Cooper');
book.call(swiss, 55, 'Marvin Gayy');
// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//
//////////////////////////////////////////////////  ------------ The Bind Method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
bookLH(848, 'Mark Twains');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Tony Cavasos');
bookEW23('Shayla Cavasos');

// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;

  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Challenge function returning functions

//example code
// const greet = function (greeting) {
//     return function (name) {
//       console.log(`${greeting} ${name}`);
//     };
//   };

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(23));
console.log(addVAT2(100));
///////////////////////////////////////
// Coding Challenge #1
*/
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0,0,0,0]. More in the next section
  answers: new Array(4).fill(0),
///////  Coding Answer Solution
////////////////////////////////////////////////

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer

    typeof answer === 'number' &&
      answer < this.answer.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4 , 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
//poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

poll.displayResults.call({ answer: [1, 5, 3, 9, 6, 1] });


/// immediately Invoked Function Expressions 
///////////////////////////////////////
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again '))();

{
  const isPrivate = 23;
  var notPrivate = 46;

}

// console.log(isPrivate)
console.log(notPrivate); 


////// closures
////////////////////////////////////////

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

///// 3 more EXAMPLES of closures

////// EXAMPLE 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 558;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();

// Re-assigning f function
h();
f();
console.dir(f);

/////// EXAMPLE 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, 1000);

  console.log(`Will start boarding in ${wait} seconds `);
};

const perGroup = 1000;
boardPassengers(180, 3);
*/
//// Coding Challenge
/////////////////////////////////////////////////////////////////  Coding Challenge # 2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'yellow';
  });
})();
