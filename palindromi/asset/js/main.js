//Palidroma 
/*
Ask the user for a word/sentence, then create a function to discover if the word/sentence is a palindrome

*/

//this is LET because i'll remove all spaces
let userString = prompt("Type a word or a sentence, i will tell you if it's a palindrome or not!");

checkPalindrome(userString);

function checkPalindrome(stringToCheck) {

    stringToCheck = stringToCheck.replace(/\s+/g, '');

    const stringCopy = stringToCheck;

    let i = 0;
    let j = stringToCheck.length;

    while (j > 0) {
        if (stringToCheck[(j - 1)] == stringCopy[i]) {
            console.log(stringToCheck[(j - 1)], stringCopy[i]);
        }
        i++;
        j--;
    }





}




