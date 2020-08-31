/*Given a string, return a new string with the reversed order of characters */

// solution 1
function reverse(str) {
  return str.split("").reverse().join("");
}

// soltuion 2
function reverse(str) {
  newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  return newStr;
}

// solution 3
function reverse(str) {
  return str.split("").reduce((prev, item) => {
    return item + prev;
  }, "");
}

console.log(reverse("apple"));
console.log(reverse("abcd"));
console.log(reverse(" abcd"));
