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


var passwordLength = prompt("Please slect your password length between 8 and 128 characters");

if (passwordLength < 8 || passwordLength > 128) {
  alert("please enter a valid password length");
} else {
  var length = document.createElement(passwordLength);
}

// Set i = 0, then for loop until index.length of LENGTH

