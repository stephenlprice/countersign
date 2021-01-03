// Assignment Code

// Document IDs & classes
var generateBtn = document.querySelector("#generate");
var writeBtn = document.querySelector("#write");
var pControls = document.querySelector("#controls");
var pCriteria = document.querySelector("#criteria");
var inputLow = document.querySelector("#inputLow");
var inputUp = document.querySelector("#inputUp");
var inputNum = document.querySelector("#inputNum");
var inputSpec = document.querySelector("#inputSpec");
var inputLen = document.querySelector("#inputLen");
var resetBtn = document.querySelector("#reset");

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
  else if (this === resetBtn) {
    pCriteria.reset();
    setTimeout(function() {
      critLow = document.querySelector("#inputLow").checked;
      critUp = document.querySelector("#inputUp").checked;
      critNum = document.querySelector("#inputNum").checked;
      critSpec = document.querySelector("#inputSpec").checked;
      passLength = document.querySelector("#inputLen").value;

      var passConsole = document.querySelector("#password");
      passConsole.value = "Your Secure Password";
    }, 10)
  }
  else {
    console.log("Invalid input ID provided")
  }
}

// Display or hide the password criteria form
function showCriteria() {
  if (pControls.style.display === "none") {
    pControls.style.display = "block";
    var passConsole = document.querySelector("#password");
    passConsole.value = "Please select at least 1 character type and set a password length";
  }
  else if (pControls.style.display === "block") {
    pControls.style.display = "none";
    var passConsole = document.querySelector("#password");
    passConsole.value = "Your Secure Password";
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

// Resets the form, made as seperate button for layout purposes
resetBtn.addEventListener("click", inputCheck);

// Submits form input that will write the password using selected criteria
writeBtn.addEventListener("click", writePassword);
