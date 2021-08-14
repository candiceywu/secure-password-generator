// below is code provided 
var generateBtn = document.querySelector("#generate");
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// array of potential characters
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericalCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`", "-", "+", "=", ",", ".", "<", ">", "?", "/"];
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
        finalArray = finalArray.concat(lowercaseCharacters);
    } if (userUppercase) {
        finalArray = finalArray.concat(uppercaseCharacters);
    } if (userNumerical) {
        finalArray = finalArray.concat(numericalCharacters);
    } if (userSpecial) {
        finalArray = finalArray.concat(specialCharacters);
    }

    // need to guarantee that all user selection(s) will be included in password
    // // 0 = lowercaseCharacters, 1 = uppercaseCharacters, 2 = numericalCharacters, 3 = specialCharacters
    // for (var i = 0; i < length; i++) {
    //     var randomOption = Math.floor(Math.random() * 4);
    //     if (randomOption == 0 && !userLowercase)
    //     //choose uppercaseCharacters
    //     finalArray.push(uppercaseCharacters[Math.floor(Math.random() * 3)]);

    // }

    var string = "";
    for (var i = 0; i < length; i++) {
        string = string + finalArray[Math.floor(Math.random() * finalArray.length)]; 
    }
    console.log(string); //need to fix something in this 

    console.log(finalArray);
    return string;
}

//then you have to display the password in the "#password" placeholder text - either textContent or append?