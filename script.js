// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt for length and repeat until correct input
  var length = prompt("How Long would you like your password?");
  while (length < 8 || length > 128) {
    var length = prompt(
      "Invalid: Password has to be between 8 and 128 characters in length. How Long would you like your password?"
    );
  }

  // prompts for password character parameters and repeats if none selected
  do {
    alert(
      "You must select at least one lowercase, uppercase, numeric or special characters"
    );
    lowerCase = confirm("Would you like to include lowercase letters?");
    upperCase = confirm("Would you like to include uppercase letters?");
    numeric = confirm("Would you like to include numbers?");
    specialChar = confirm("Would you like to include special characters?");
  } while (
    lowerCase == false &&
    upperCase == false &&
    numeric == false &&
    specialChar == false
  );

  console.log(lowerCase);
  console.log(upperCase);
  console.log(numeric);
  console.log(specialChar);

  // defining the character sets
  (lowerCaseCharset = "abcdefghijklmnopqrstuvwxyz"),
    (upperCaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
    (numericCharset = "0123456789"),
    (specialCharCharset = "`~!@#$%^&*()-_=+|{}[]':;/?.,><");

  var charset = "";
  // If lowercase and uppercase then add characterets together
  if (lowerCase === true) {
    charset += lowerCaseCharset;
  }
  if (upperCase === true) {
    charset += upperCaseCharset;
  }
  if (numeric === true) {
    charset += numericCharset;
  }
  if (specialChar === true) {
    charset += specialCharCharset;
  }
  console.log(charset);

  // looping through the character set 'length' (initial prompt) number of times to select random characters
  retPassword = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retPassword += charset.charAt(Math.floor(Math.random() * n));
  }

  console.log(retPassword);
  checkPassword(retPassword);
  return retPassword;
}

// This takes the password and checks if contains the initial VREyeParameters, if Notification, recreates password
function checkPassword() {
  if (/[a-z]/g.test(retPassword) === false && lowerCase === true) {
    alert("There is no lowercase letter - Generating new password");
    generatePassword();
  } else if (/[A-Z]/g.test(retPassword) === false && upperCase === true) {
    alert("There is no uppercase letter - Generating new password");
    generatePassword();
  } else if (/[0-9]/g.test(retPassword) === false && numeric === true) {
    alert("There is no number - Generating new password");
    generatePassword();
  } else if (/\W|_/g.test(retPassword) === false && specialChar === true) {
    alert("There is special character - Generating new password");
    generatePassword();
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
