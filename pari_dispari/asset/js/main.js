
/*
User choses Even or Odd and type a number between 1 and 5, software generates a random number (between 1 and 5) for the computer, then sums the two numbers
and outputs if the sum is odd or even. Then declares if the user won or not.

*/

const userChoice = prompt("Please choose Even or Odd").toLowerCase();
const userNumber = parseInt(prompt("Please choose a number between 1 and 5, i will choose another number and sum it to yours. if you guessed the type, you win."));
const element = document.querySelector("h1");
let sumResult;
let message;

const cpuNumber = oneToFiveRNG();

sumResult = sumAndDefineOddEven(userNumber, cpuNumber);

message = declareWinner(sumResult, userChoice);

element.innerHTML = message;



/**
 * Generates a random number between 1 to 5
  */
function oneToFiveRNG() {
    return Math.floor(Math.random() * 5) + 1;
}

/**
 * Sum params and determine if it's Odd or Even
 * @param {number} num1 - The first number
 * @param {number} num2 - The second number
 *
*/
function sumAndDefineOddEven(num1, num2) {

    let sum = num1 + num2;

    if (sum % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

/**
 * make a comparison between the two params
 * @param {string} opt1 - The first option
 * @param {string} opt2 - The second option
 *
*/
function declareWinner(opt1, opt2) {
    if (opt1 == opt2) {
        return `You win: your number was ${userNumber}, mine was ${cpuNumber}, their sum was ${userNumber + cpuNumber} and you choose ${userChoice}`
    } else {
        return `You lost (or you choose a wrong type, so you lost anyway): your number was ${userNumber}, mine was ${cpuNumber}, their sum was ${userNumber + cpuNumber} and you choose ${userChoice}`
    }
}