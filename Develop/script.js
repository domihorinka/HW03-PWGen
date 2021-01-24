// Add array of lowercase letters, uppercase letters, numbers, and special letters
var lowerLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

var upperLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N","M"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", "`"];


// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  
  var passwordExecuted = "";
 // created an alert that asks character letters
  var passwordLength = prompt("How many characters would you like?")
    if (passwordLength < 8 || passwordLength > 128) {
      alert ("Please enter a number between 8-128!!") //return message if  < 8 or > 128
    return generatePassword()
    }
    else {
      passwordExecuted += lowerLetters.upperLetters.numbers.specialCharacters.passwordLength
    }

  var lowerLetters = confirm("Do you want your password to contain lower case letters?")
  console.log(lowerLetters)
  if(true)
  passwordExecuted =+ lowerLetters
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

