
/*
User choses Even or Odd and type a number between 1 and 5, software generates a random number (between 1 and 5) for the computer, then sums the two numbers
and outputs if the sum is odd or even. Then declares if the user won or not.

*/

const userChoice = prompt("Please choose Even or Odd");
const userNumber = parseInt(prompt("Please choose a number between 1 and 5, i will choose another number and sum it to yours. if you guessed the type, you win."));
let sumResult;

const cpuNumber = oneToFiveRNG();

sumResult = sumAndDefineOddEven(userNumber, cpuNumber);

declareWinner();




function oneToFiveRNG() {
    return Math.floor(Math.random() * 5) + 1;
}

function sumAndDefineOddEven(num1, num2) {

    let sum = num1 + num2;

    if (sum % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }

}

function declareWinner() { }