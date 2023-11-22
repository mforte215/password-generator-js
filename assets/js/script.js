// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let enteredPasswordLength;
  let validatedPasswordLength = false;
  while (!validatedPasswordLength) {
    enteredPasswordLength = prompt("Enter a number for the length of password (Between 8 and 128)");
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
    var password = generatePassword(enteredPasswordLength, answerLowerCaseUsage, answerUpperCaseUsage, answerNumericUsage, specialCharUsage);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

  }

}

const generatePassword = (psLength, lowerCase, upperCase, numeric, special) => {
  const numericCharSet = "0123456789";
  const lowerCaseCharSet = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialCharSet = "!\"#$%&'()*+,-./:;<=>?@[\]\\^_`{|}~";

  let useableChars = "";

  if (numeric) {
    useableChars += numericCharSet
  }

  if (lowerCase) {
    useableChars += lowerCaseCharSet
  }

  if (upperCase) {
    useableChars += upperCaseCharSet
  }
  if (special) {
    useableChars += specialCharSet
  }

  if (useableChars == "") {
    console.log()
    alert("You chose an empty password");
    return "You chose an empty password";
  }
  else {
    let thePassword = ""
    for (let i = 0; i <= psLength; i++) {
      let randomIndex = Math.floor(Math.random() * useableChars.length);
      thePassword += useableChars.substring(randomIndex, randomIndex + 1);
    }
    return thePassword;
  }
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);