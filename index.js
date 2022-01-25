function isPalindrome(word) {
  // Write your algorithm here
  function reverseString(word) {
    return word.split("").reverse().join("");
  }
}

/* 
  Add your pseudocode here
  create an array from the input string
reverse the array
create a string from the reversed array
return the reversed string
*/

/*
  Add written explanation of your solution here
  We create an array and m
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
