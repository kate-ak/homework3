const upperChar ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const lowerChar ('abcdefghijklmnopqrstuvwxyz');
const specialChar ('~!@#$%^&*()-+=?;:');
const numChar ('1234567890');

let totalUserChar = "";

var passwordLength = prompt("Please slect your password length between 8 and 128 characters");

if (passwordLength < 8 || passwordLength > 128) {
  alert("please enter a valid password length");
  return
}




let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var passwordLength = prompt("Please slect your password length between 8 and 128 characters");
  

// Set i = 0, then for loop until index.length of LENGTH

