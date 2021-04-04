// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define function to write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Define character types into arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Define global variables
var passwordLength;
var useLowerCase;
var useUpperCase;
var useNumber;
var useSpecialChar;

// Define function to generate password
function generatePassword() {

  // Prompt user to input password length
  passwordLength = window.prompt("Choose a password length between 8 and 128 characters.");
  console.log("Password Length", passwordLength);

  // Validate password length against requirements
  while (!Number.isInteger(Number.parseInt(passwordLength)) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid Input: Password length must be between 8 and 128 characters.")
    passwordLength = window.prompt("Choose a password length between 8 and 128 characters.");
    console.log("Password Length", passwordLength);
  }

  // User confirmation to include/exclude characters
  useLowerCase = window.confirm("Click OK to include lowercase characters.");
  console.log("Use Lowercase Characters", useLowerCase);
  useUpperCase = window.confirm("Click OK to include uppercase characters.");
  console.log("Use Uppercase Characters", useUpperCase);
  useNumber = window.confirm("Click OK to include numeric characters.");
  console.log("Use Numeric Characters", useNumber);
  useSpecialChar = window.confirm("Click OK to include special characters.");
  console.log("Use Special Characters", useSpecialChar);

  // Validate character type against requirements
  while (!useLowerCase && !useUpperCase && !useNumber && !useSpecialChar) {
    // Rerun confirmation sequence all character types are false
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

  var success = false;
  var password = "";

  // Build password that meets selected criteria
  while (!success) {
    password = buildPassword();
    success = validatePassword(password);
  } 
  return password;
}

// Define function to build password based on selected character types and length
function buildPassword() {
  var password = "";
  var selectedCharType = [];

  // Use if statements to determine which arrays to add to selectedCharType
  if (useLowerCase) {
      selectedCharType = selectedCharType.concat(lowerCase);
  }
  if (useUpperCase) {
      selectedCharType = selectedCharType.concat(upperCase);
  }
  if (useNumber) {
      selectedCharType = selectedCharType.concat(number);
  }
  if (useSpecialChar) {
      selectedCharType = selectedCharType.concat(specialChar);
  }

  // Build password using requirements for length and character type
  for (var i = 0; i < passwordLength; i++) {
      password = password + selectedCharType[Math.floor(Math.random() * selectedCharType.length)];
  }
  console.log("Password", password);
  return password;
}

// Define function to validate password against character type requirements
function validatePassword(password) {
  var lowerString = new RegExp("[a-z]+", `g`);
  var upperString = new RegExp("[A-Z]+", `g`);
  var numberString = new RegExp("[0-9]+", `g`);
  var specialCharString = new RegExp("[ !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~]+", `g`);
  var result = true;
  
  // Use if statements to determine perform 
  if (useLowerCase && result) {
      result = lowerString.test(password);
  }
  if (useUpperCase && result) {
      result = upperString.test(password);
  }
  if (useNumber && result) {
      result = numberString.test(password);
  }
  if (useSpecialChar && result) {
      result = specialCharString.test(password);
  }
  return result;
}