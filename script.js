// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Prompt for length and repeat until correct input
  var length = prompt("How Long would you like your password?");
  while (length < 8 || length > 128) {
    var length = prompt("Invalid: Password has to be between 8 and 128 characters in length. How Long would you like your password?");
  }

  // prompts for password character parameters and repeats if none selected
  do {
    alert("You must select at least one lowercase, uppercase, numeric or special characters")
    var lowerCase = confirm("Would you like to include lowercase letters?");
    var upperCase = confirm("Would you like to include uppercase letters?");
    var numeric = confirm("Would you like to include numbers?");
    var specialChar = confirm("Would you like to include special characters?");
  }
  while (lowerCase == false && upperCase == false && numeric == false && specialChar == false);

  // defining the character sets
  lowerCaseCharset = "abcdefghijklmnopqrstuvwxyz",
  upperCaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numericCharset = "0123456789",
  specialCharCharset = "`~!@#$%^&*()-_=+\|{}[]':;/?.,><";

  // charset = lowerCaseCharset + upperCaseCharset + numericCharset + specialCharCharset;

  var charset = ""
// If lowercase and uppercase then add characterets together
    if (lowerCase = 'true') {
      charset += lowerCaseCharset;
    }
    if (upperCase = 'true') {
      charset += upperCaseCharset;
    }
    if (numeric = 'true') {
      charset += numericCharset;
    }
    if (specialChar = 'true') {
      charset += specialCharCharset;
    }

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


// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789