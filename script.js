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
  var len = 0;
  do {
    len = prompt("What would be the length of the password?\n(Min:8 /Max:128):");
    if(len < 8 || len > 128){alert("Invalid length")}
  } while (len < 8 || len > 128);
  
  do{
    var char_types = [];
    confirm("Use lowercase characters?")? char_types.push(lowerCasedCharacters):null;
    confirm("Use uppercase characters?")? char_types.push(upperCasedCharacters):null;
    confirm("Use numeric symbols?")? char_types.push(numericCharacters):null;
    confirm("Use special characters?")? char_types.push(specialCharacters):null;
    if(char_types.length === 0){alert("No character type selected. Select at least one")}
  }while(char_types.length === 0);

  console.log(len,char_types);

  return len,char_types;
}

// Function for getting a random element from an array
function getRandom(arr) {
    return arr[_.random(arr.length-1)]
}

// Function to generate password with user input
function generatePassword() {
    [len,selection_array] = getPasswordOptions();
    var password = "a";
    for (let i = 0; i < len; i++) {
      console.log( getRandom(selection_array[_.random(selection_array.length-1)]));
    }

    return password;
}

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