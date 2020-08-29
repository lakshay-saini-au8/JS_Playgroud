/*

A palindrome is a word that is identical forward and backwards.

mom
racecar
kayak
Given a word, create a function that checks whether it is a palindrome.

Examples
checkPalindrome("mom") ➞ true

checkPalindrome("scary") ➞ false

checkPalindrome("reviver") ➞ true

*/

// solution

function checkPalindrome(str) {
  newStr = str.split("").reverse().join("");
  if (str === newStr) {
    return true;
  } else {
    return false;
  }
}
