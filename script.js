// below is code provided 
var generateBtn = document.querySelector("#generate");
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// array of potential characters
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericalCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`", "-", "+", "=", ",", ".", "<", ">", "?", "/"];
var selectedArray = [];
var finalArray = [];

// Ask user to generate password by clicking on Generate Password button
function generatePassword() {
    var passwordLength = window.prompt("Please enter a password length between 8 and 128 characters:");
    // var length = Number (passwordLength);
    while (passwordLength <= 7 || passwordLength >= 129) {
        passwordLength = window.prompt("Please enter a password length between 8 and 128 characters:");
    };
    console.log(passwordLength);

    //Ask the user to confirm choice of lowercase: 
    var userLowercase = window.confirm("Do you want to include lowercase characters?");
    console.log(userLowercase);

    //Ask the user to confirm choice of uppercase: 
    var userUppercase = window.confirm("Do you want to include uppercase characters?");
    console.log(userUppercase);

    //Ask the user to confirm choice of numerical: 
    var userNumerical = window.confirm("Do you want to include numerical characters?");
    console.log(userNumerical);

    //Ask the user to confirm choice of special characters: 
    var userSpecial = window.confirm("Do you want to include special characters?");
    console.log(userSpecial);

    // If the user doesn't select at least one option, it will cycle through this again
    while (!userLowercase && !userUppercase && !userNumerical && !userSpecial) {
        alert("Please select at least one option.");
        userLowercase = window.confirm("Do you want to include lowercase characters?");
        console.log(userLowercase);

        //Ask the user to confirm choice of uppercase: 
        userUppercase = window.confirm("Do you want to include uppercase characters?");
        console.log(userUppercase);

        //Ask the user to confirm choice of numerical: 
        userNumerical = window.confirm("Do you want to include numerical characters?");
        console.log(userNumerical);

        //Ask the user to confirm choice of special characters: 
        userSpecial = window.confirm("Do you want to include special characters?");
        console.log(userSpecial);
    };

    //takes the user's selections and adds them into the array of potential characters

    if (userLowercase) {
        selectedArray = selectedArray.concat(lowercaseCharacters);
        console.log(selectedArray);
    } if (userUppercase) {
        selectedArray = selectedArray.concat(uppercaseCharacters);
        console.log(selectedArray);
    } if (userNumerical) {
        selectedArray = selectedArray.concat(numericalCharacters);
        console.log(selectedArray);
    } if (userSpecial) {
        selectedArray = selectedArray.concat(specialCharacters);
        console.log(selectedArray);
    }

    // need to guarantee that all user selection(s) will be included in password
    if (userLowercase) {
        finalArray = finalArray.concat(lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)]);
        console.log(finalArray);
    } if (userUppercase) {
        finalArray = finalArray.concat(uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)]);
        console.log(finalArray);
    } if (userNumerical) {
        finalArray = finalArray.concat(numericalCharacters[Math.floor(Math.random() * numericalCharacters.length)]);
        console.log(finalArray);
    } if (userSpecial) {
        finalArray = finalArray.concat(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
        console.log(finalArray);
    }

    // put together all selected choices into the length of password

    var string = "";
    for (var i = finalArray.length; i < passwordLength; i++) {
        finalArray = finalArray.concat(selectedArray[Math.floor(Math.random() * selectedArray.length)]);
        console.log(string);
    }

    // convert final array into string, remove commas
    finalArray = finalArray.join("");

    return finalArray;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

