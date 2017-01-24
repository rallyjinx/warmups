// Given a string, you have to return a string in which
// each character (case-sensitive) is repeated once.
// if anything but a string is passed to the function,
// return "Ruh roh! That isn't a string!"

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!

// DONE?? Do it with a RegEx! (a 2 line solution is possible)
var chai = require('chai');

function doubleChar(str) {
  ssttrr = "";
  if (typeof str === "string") {
    for (i = 0; i < str.length; i++) {
      ssttrr += str[i] + str[i];
    }
  } else {
    return "Ruh roh! That isn't a string!";
}
  return ssttrr;
}

module.exports = {
  doubleChar:doubleChar,
  attendance:"wordy word here"
}

console.log(doubleChar("String"));
console.log(doubleChar("Hello World"));
console.log(doubleChar("1234!_ "));
console.log(doubleChar(57));

//from solution.js
function doubleCharRE(str) {
    if (typeof str === "string") return str.replace(/(.)/g, "$1$1")
    return "Ruh roh! That isn't a string!"
}

console.log(doubleCharRE("String"));
console.log(doubleCharRE("Hello World"));
console.log(doubleCharRE("1234!_ "));
console.log(doubleCharRE(57));
