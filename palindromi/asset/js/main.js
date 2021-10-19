//Palidroma 
/*
Ask the user for a word/sentence, then create a function to discover if the word/sentence is a palindrome

*/

//this is LET because i'll remove all spaces
const element = document.querySelector("h1");
let userString = prompt("Type a word or a sentence, i will tell you if it's a palindrome or not!");
let message;

if (checkPalindrome(userString)) {
    message = `Yes, ${userString} is a palindrome!`
} else {
    message = `No, ${userString} is not a palindrome!`
}

element.innerHTML = message;

function checkPalindrome(stringToCheck) {

    stringToCheck = stringToCheck.replace(/\s+/g, '');

    const stringCopy = stringToCheck;

    let i = 0;
    let j = stringToCheck.length;

    while (j > 0) {
        if (stringToCheck[(j - 1)] != stringCopy[i]) {
            return false;
        }
        i++;
        j--;

    }
    return true;
}



