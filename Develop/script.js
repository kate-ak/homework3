const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const specialChar = "~!@#$%^&*()-+=?;:";
const numChar = "1234567890";

// Write password to the #password input
function writePassword() {
  let passwordChars = "";
  let passwordLength = prompt("Please select your password length between 8 and 128 characters");
  const characterLength = parseInt(passwordLength);
  if (characterLength < 8 || characterLength > 128) {
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
  alert("please confirm at least one option for password")
  }
  return characterLength;
}
// let pwLength = characterLength;
// function for randomizing to user character limit
// YOU ARE HAVING ISSUES WITH TAKING A VARIABLE FROM A PREVIOUS FUNCTION AND USING IT IN  A NEW FUNCTION
// You need to do input

function generatePassword() {
  for (var i = 0; i < characterLength.length; i++){
    var password = passwordChar[Math.floor(Math.random) * characterLength.length];
  }
  return password;
}
writePassword ();
generatePassword();

//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // Set i = 0, then for loop until index.length of LENGTH--- done
