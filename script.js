// Define character types into arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "`", "{", "|", "}", "~"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Prompt user to input password length
var passwordLength = window.prompt("Choose a password length between 8 and 128 characters.");
console.log("Password Length", passwordLength);

// Validate password length against requirements
while (passwordLength < 8 || passwordLength > 128) {
  alert("Password length must be between 8 and 128 characters.");
  passwordLength = window.prompt("Choose a password length between 8 and 128 characters.");
  console.log("Password Length", passwordLength);
}

// User confirmation to include/exclude lowercase characters
var useLowerCase = window.confirm("Click OK to include lowercase characters.");
console.log("Use Lowercase Characters", useLowerCase);

// User confirmation to include/exclude uppercase characters
var useUpperCase = window.confirm("Click OK to include uppercase characters.");
console.log("Use Uppercase Characters", useUpperCase);

// User confirmation to include/exclude numeric characters
var useNumber = window.confirm("Click OK to include numeric characters.");
console.log("Use Numeric Characters", useNumber);

// User confirmation to include/exclude special characters
var useSpecialChar = window.confirm("Click OK to include special characters.");
console.log("Use Special Characters", useSpecialChar);

// Validate character type against requirements
while (!useLowerCase && !useUpperCase && !useNumber && !useSpecialChar) {
  alert("At least one character type is required.");
  useLowerCase = window.confirm("Click OK to include lowercase characters.");
  console.log("Use Lowercase Characters", useLowerCase);
  useUpperCase = window.confirm("Click OK to include uppercase characters.");
  console.log("Use Uppercase Characters", useUpperCase);
  useNumber = window.confirm("Click OK to include numeric characters.");
  console.log("Use Numeric Characters", useNumber);
  useSpecialChar = window.confirm("Click OK to include special characters.");
  console.log("Use Special Characters", useSpecialChar);
  }
