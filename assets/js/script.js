// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let validatedPasswordLength = false;
  while (!validatedPasswordLength) {
    let enteredPasswordLength = prompt("Enter a number for the length of password (Between 8 and 128)");
    if (enteredPasswordLength >= 8 && enteredPasswordLength <= 128) {
      validatedPasswordLength = true;
    }
  }



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);