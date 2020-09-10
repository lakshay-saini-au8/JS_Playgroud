/*
Write a funtion taht reutrns the number og vowels used in a strin. Vowels are the cahracter 'a','e','i','o', and 'u'.

Examples 
vowels('Hi there!') --> 3

 */

// const vowels = (str) => {
//   let count = 0;
//   let vo = ["a", "e", "i", "o", "u"];
//   for (let value of str) {
//     if (vo.includes(value.toLowerCase())) {
//       count++;
//     }
//   }
//   return count;
// };

const vowels = (str) => {
  const match = str.match(/[aeiou]/gi);
  return match ? match.length : 0;
};

console.log(vowels("Hi There!"));
console.log(vowels("Why do you ask?"));
console.log(vowels("Why?"));
