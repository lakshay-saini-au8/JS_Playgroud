/* Write a fuction that accepts a string. the function  will capatlize the string*/

function capitalize(str) {
  words = [];
  for (const word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
}

console.log(capitalize("the, name of the!"));
