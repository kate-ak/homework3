const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const specialChar = "~!@#$%^&*()-+=?;:";
const numChar = "1234567890";

// Write password to the #password input
function writePassword() {
  let passwordLength = prompt("Please select your password length between 8 and 128 characters");
  let characterLength = parseInt(passwordLength);
  if (characterLength < 8 || characterLength > 128) {
    alert("please enter a valid password length");
    return;
  }
  let userUpperChar = confirm("Do you want to use uppercase characters?");
  let userLowerChar = confirm("Do you want to use lowercase characters?");
  let userSpecialChar = confirm("Do you want to use special characters?");
  let userNumChar = confirm("Do you want to use numbers?")

}
writePassword ();

//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // Set i = 0, then for loop until index.length of LENGTH
