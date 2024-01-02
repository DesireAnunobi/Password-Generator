// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let answers = {};
  let password_length = Number(prompt('How many characters should your password contain? Pick from 8 - 128. characters.'))
}

// Validate input
// NaN is short for "Not-a-Number". The isNaN() method returns true if a value is NaN.
while(isNaN(password_length) ==true || password_length<8 || password_length>128) {
  password_length = prompt(`Invalid password. Pick a password with 8 - 128 characters. Input the amount of characters`)
};

// Password criteria options
let password_lowerCasedCharacters = confirm(`Will your password include lowercase letters? If No, press Cancel`)
let password_upperCasedCharacters = confirm(`Will your password include uppercase letters? If No, press Cancel`)
let password_numericCharacters = confirm(`Will your password include numbers? If No, press Cancel`)
let password_specialCharacters = confirm(`Will your password include special characters? If No, press Cancel`)

// Answers object
answers.length = password_length;
answers.lower = password_lowerCasedCharacters;
answers.upper = password_upperCasedCharacters;
answers.numeric = password_numericCharacters;
answers.special = password_specialCharacters;

return answers

// Function for getting a random element from an array
function getRandom(arr) {
  index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

// Function to generate password with user input
function generatePassword() {
  const options = [];
  const answers = getPasswordOptions();
}

let randomPassword= '';
for (let i = 0; i < options.length; ++i);

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);