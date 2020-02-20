// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Prompt for length and repeat until correct input
  var length = prompt("How Long would you like your password?");
  while (length < 8 || length > 128) {
    var length = prompt("Invalid: Password has to be between 8 and 128 characters in length. How Long would you like your password?");
  }

  
  (charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"),
    (retVal = "");
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
