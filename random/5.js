/*
Given a string, teturn the character that is most comonly used in the string.

*/

function charMap(strToCharObj) {
  countChar = {};

  for (ch of strToCharObj) {
    if (countChar.hasOwnProperty(ch)) {
      countChar[ch] = countChar[ch] + 1;
    } else {
      countChar[ch] = 1;
    }
  }
  return countChar;
}

function maxChar(str) {
  let charMapData = charMap(str);
  prevKey = "";
  prevCount = 0;
  for (let [key, count] of Object.entries(charMapData)) {
    if (prevCount < count) {
      prevCount = count;
      prevKey = key;
    }
  }
  return prevKey;
}

console.log(maxChar("abbcccccd"));
