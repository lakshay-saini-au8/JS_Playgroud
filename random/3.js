/* Given a string, return ture if the string is a palindrome or false if it is not. Palindromes are strings that form the same word if it is reversed.  */

// solution 1

function palindrome(str) {
  newstr = str.split("").reverse().join("");
  if (str === newstr) {
    return true;
  } else {
    return false;
  }
}

// solution 2

function palindrome(str) {
  newStr = "";
  for (ch of str) {
    newStr = ch + newStr;
  }
  if (str === newStr) {
    return true;
  } else {
    return false;
  }
}

// solution 3

function palindrome(str) {
  newStr = str.split("").reduce((prev, item) => {
    return item + prev;
  }, "");
  if (str === newStr) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("ab,ba"));
console.log(palindrome("abcdefg"));
console.log(palindrome(" aba"));
