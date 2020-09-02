/*
Check to see it two provided strings are anagrams of eachother, One string is an anagram of another if it uses the same character in the same quantity. Only consider characters, not spaces or punctaion. consider capital letters to be the same as lower case

anagrams('rail safety' , 'fairy tales')
anagrams('RAIL! SAFETY!' , 'fairy tales')
anagrams('Hi there' , 'Bye there')

*/
// solution 1
function anagrams(string1, stringB) {
  let stringA = string1.replace(/[^\w]/g, "").toLowerCase();
  strA = {};
  strB = {};
  isAnagram = false;
  for (let ch of stringA) {
    strA[ch] = strA[ch] + 1 || 1;
  }
  for (let ch of stringB) {
    strB[ch] = strB[ch] + 1 || 1;
  }

  for (let ch of stringB) {
    if (strA[ch] === strB[ch]) {
      isAnagram = true;
    } else {
      return isAnagram;
    }
  }
  return isAnagram;
}

// solution 2
function anagrams(string1, string2) {
  let stringA = string1.replace(/[^\w]/g, "").toLowerCase().split("").sort();
  let stringB = string2.replace(/[^\w]/g, "").toLowerCase().split("").sort();

  if (stringA.length === stringB.length) {
    for (let i = 0; i < stringA.length; i++) {
      if (stringA[i] !== stringB[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

console.log(anagrams("rail safety", "fairy tales"));
console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
console.log(anagrams("Hi there", "Bye there"));
