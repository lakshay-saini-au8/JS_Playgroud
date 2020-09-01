// Given an integer, retrun an integer that is the reverse ordering of number.

function reverseInt(n) {
  if (Math.sign(n) === 1) {
    return parseInt(n.toString().split("").reverse("").join(""));
  } else if (Math.sign(n) === -1) {
    return -1 * parseInt(Math.abs(n).toString().split("").reverse("").join(""));
  } else {
    return 0;
  }
}

console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-90));
