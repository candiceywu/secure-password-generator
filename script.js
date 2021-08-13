// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericalCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`", "-", "+", "=", ",", ".", "<", ">", "?", "/"];

// Ask user to generate password by clicking on Generate Password button

function generatePassword(){
    var passwordLength = window.prompt("Please enter a password length between 8 and 128 characters:");
    while (passwordLength <=7 || passwordLength >=129) {
        passwordLength=window.prompt("Please enter a password length between 8 and 128 characters:");
    };
}
console.log(passwordLength);

//Ask the user to confirm choice of lowercase y/n: 
var userLowercase = [];
if (window.confirm("Do you want to include lowercase characters?"));
console.log(userLowercase);

//Ask the user to confirm choice of Uppercase y/n: 
var userUppercase = [];
if (window.confirm("Do you want to include uppercase characters?"));
console.log(userUppercase);

//Ask the user to confirm choice of numerical y/n: 
var userNumerical = [];
if (window.confirm("Do you want to include numerical characters?"));
console.log(userNumerical);

//Ask the user to confirm choice of special characters y/n: 
var userSpecial = [];
if (window.confirm("Do you want to include special characters?"));
console.log(userSpecial);

//Now all options have been selected and stored, but need to make sure options are guaranteed in next password array as an object.

var userSelection = {
    totalLength: passwordLength,
    userLowercase: [],
    userUppercase: [],
    userNumerical: [],
    userSpecial: []
}
console.log(userSelection);

//Below is code that was provided in homework. 
//Write password to the #password input

function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);