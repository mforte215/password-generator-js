// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let validatedPasswordLength = false;
  while (!validatedPasswordLength) {
    let enteredPasswordLength = prompt("Enter a number for the length of password (Between 8 and 128)");
    console.log("LOGGING PASSOWRD");
    console.log(enteredPasswordLength);
    if (enteredPasswordLength >= 8 && enteredPasswordLength <= 128) {
      validatedPasswordLength = true;
    } else if (enteredPasswordLength === null) {
      break;
    }
  }
  if (validatedPasswordLength == true) {
    let answerLowerCaseUsage = confirm("Confirm usage of lower case letters");
    let answerUpperCaseUsage = confirm("Confirm usage of upper case letters");
    let answerNumericUsage = confirm("Confirm usage of numeric characters");
    let specialCharUsage = confirm("Confirm usage of special characters");
    var password = passwordConstructor(enteredPasswordLength, answerLowerCaseUsage, answerUpperCaseUsage, answerNumericUsage, specialCharUsage);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }





}

const passwordConstructor = (length, lowerCase, upperCase, numeric, special) => {
  //TO DO: FUNCTION
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);