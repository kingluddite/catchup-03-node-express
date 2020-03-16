var randNum = Math.floor(Math.random() * 10);
// let's log out to see what the randNum is
console.log(randNum);
if (process.argv[2] === randNum) {
  console.log('You win!');
} else {
  console.log('You lose :( ');
}

// What type of data is randNum?
// RUN in terminal with: $ node app
// console.log(typeof randNum); // number

// What type of data is process.argv[2]?
// RUN in terminal with: $ node app.js 4
// console.log(typeof process.argv[2]); // string

// Remember to parse when comparing
// Google Fu parseInt (MDN parstInt)
// var randNum = Math.floor(Math.random() * 10);
// var userInput = parseInt(process.argv[2]);
// console.log('randNum is of data type ' + typeof randNum);
// console.log('userInput is of data type ' + typeof userInput);
// console.log(`The random number is of data type ${randNum}`);
//
// // compare user input to the random number
// if (userInput === randNum) {
//   // log if user input is a match with the random number
//   console.log('You win!');
// } else {
//   // no match then log the bad news
//   console.log('You lose :( ');
// }
