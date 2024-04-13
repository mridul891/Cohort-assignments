/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newstring = str.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, "");;
  let first = 0;
  let last = newstring.length - 1;
  while (first <= last) {
    if (newstring[first] != newstring[last]) {
      return false;
    }
    first = first + 1;
    last = last - 1;
  }
  return true;
}

module.exports = isPalindrome;
