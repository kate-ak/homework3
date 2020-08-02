const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const specialChar = "~!@#$%^&*()-+=?;:";
const numChar = "1234567890";
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generate() {
  let passwordChars = "";
  let passwordLength = prompt("Please select your password length between 8 and 128 characters");
  let characterLength = parseInt(passwordLength);
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("please enter a valid password length");
    return;
  }
  let userUpperChar = confirm("Do you want to use uppercase characters?");
  let userLowerChar = confirm("Do you want to use lowercase characters?");
  let userSpecialChar = confirm("Do you want to use special characters?");
  let userNumChar = confirm("Do you want to use numbers?")

  if(userUpperChar) {
    passwordChars += upperChar;
  }
  if (userLowerChar) {
    passwordChars += lowerChar;
  }
  if (userSpecialChar) {
    passwordChars += specialChar;
  }
  if (userNumChar) {
    passwordChars += numChar;
  }
  if (passwordChars.length < 1) {
  alert("please confirm at least one option for password"); 
  return
  }
  else {
    var length = characterLength;
      charset = passwordChars;
      password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
  return password;
  }
}
// Write password to the #password input
function writePassword() {
  var password = generate();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);