// Assignment Code

// Document IDs & classes
var generateBtn = document.querySelector("#generate");
var writeBtn = document.querySelector("#inputWrite");
var pCriteria = document.querySelector("#criteria");
var inputLow = document.querySelector("#inputLow");
var inputUp = document.querySelector("#inputUp");
var inputNum = document.querySelector("#inputNum");
var inputSpec = document.querySelector("#inputSpec");
var inputLen = document.querySelector("#inputLen");
var inputReset = document.querySelector("#inputReset");
var inputFill = document.querySelector("#inputFill");

// Password criteria (default values)
var critLow = true;
var critUp = false;
var critNum = true;
var critSpec = false;
var passLength = 10;

// Character pool
var charLow = "abcdefghijklmnopqrstuvwxyz";
var charUp = charLow.toUpperCase();
var charNum = "0123456789";
var charSpec = "~!@#$%^&*";

// Create a string 'charString' from the character pool used to generate 
// random characters based on user input or defaults if unchanged
function charConcat(l,u,n,s) {
  var charSum = "";

  if (l === true) {
    charSum += charLow;
  }
  if (u === true) {
    charSum += charUp;
  }
  if (n === true) {
    charSum += charNum;
  }
  if (s === true) {
    charSum += charSpec;
  }
  return charSum;
}

// Generate a random string of characters (lower, upper, number & special)
// as determined by a character pool and password length
function stringGen(charSum, passLength) {
  var ranString = "";
  for (var i = 0; i < passLength; i++) {
    ranString += charSum.charAt(Math.floor(Math.random() * charSum.length));
  }
  return ranString;
}

// Generate a password
function generatePassword () {
  var charSet = charConcat(critLow, critUp, critNum, critSpec);
  var countersign = stringGen(charSet, passLength);
  return countersign;
}

// Write password to the #password input
function writePassword() {
  if (critLow === false && critUp === false && critNum === false && critSpec === false) {
    console.log("ERROR: invalid inputs, please select at least 1 character type to generate a password");
    var passConsole = document.querySelector("#password");
    passConsole.value = "ERROR: invalid inputs, please select at least 1 character type to generate a password";
  }
  else {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Display the password criteria form
function showCriteria() {
  pCriteria.innerHTML = markupCriteria;
  var passConsole = document.querySelector("#password");
  passConsole.value = "Please select at least 1 character type and choose a password length";
}

// Uses checkbox & range inputs to alter password criteria values or resets them
function inputCheck() {
  if (this === inputLow) {
    critLow = document.querySelector("#inputLow").checked;
    return critLow;
  }
  else if (this === inputUp) {
    critUp = document.querySelector("#inputUp").checked;
    return critUp;
  }
  else if (this === inputNum) {
    critNum = document.querySelector("#inputNum").checked;
    return critNum;
  }
  else if (this === inputSpec) {
    critSpec = document.querySelector("#inputSpec").checked;
    return critSpec;
  }
  else if (this === inputLen) {
    passLength = document.querySelector("#inputLen").value;
  }
  else if (this === pCriteria) {
    setTimeout(function() {
      critLow = document.querySelector("#inputLow").checked;
      critUp = document.querySelector("#inputUp").checked;
      critNum = document.querySelector("#inputNum").checked;
      critSpec = document.querySelector("#inputSpec").checked;
      passLength = document.querySelector("#inputLen").value;
    }, 10)
    // setTimeout(function, milliseconds, param1, param2, ...)
  }
  else {
    console.log("Invalid input ID provided")
  }
}


// Add event listener to generate button that will display the password criteria form
generateBtn.addEventListener("click", showCriteria);

// Event listeners for form inputs
inputLow.addEventListener("input", inputCheck);
inputUp.addEventListener("input", inputCheck);
inputNum.addEventListener("input", inputCheck);
inputSpec.addEventListener("input", inputCheck);
inputLen.addEventListener("input", inputCheck);
pCriteria.addEventListener("reset", inputCheck);

// Add event listener to submit form input that will write the password using selected criteria
writeBtn.addEventListener("click", writePassword);

// Inline HTML
// var markupCriteria = `<form action="#" method="get">
// <input type="checkbox" name="uppercase" value="upper">
// <label for="uppercase">Uppercase</label>

// <input type="checkbox" name="numeric" value="number" checked>
// <label for="numeric">Numbers</label><br>


// <input type="checkbox" name="lowercase" value="lower" checked>
// <label for="lowercase">Lowercase</label>

// <input type="checkbox" name="special" value="special">
// <label for="special">Symbols</label><br><br>

// <label for="length">Password Length <i>(8-128 characters)</i></label><br>
// <input type="range" id="pLength" name="length" oninput="this.nextElementSibling.value=this.value" min="8" max="128" value="10" step="1">
// <output>10</output><br><br>

// <input type="submit" value="Fill Password">
// <input type="reset" value="Reset">
// </form>`;
