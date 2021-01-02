// Assignment Code

// Document IDs & classes
var generateBtn = document.querySelector("#generate");
var pCriteria = document.querySelector("#criteria");

// Password criteria
var critLow = true;
var critUp = false;
var critNum = true;
var critSpec = false;

// Characters
var charLow = "abcdefghijklmnopqrstuvwxyz";
var charUp = charLow.toUpperCase();
var charNum;
var charSpec = "~!@#$%^&*";

// Generate random characters (lower, upper, number & special) as determined by the type argument
function genChar(type) {
  if (type === charLow || type === charUp || type === charSpec ) {
    var ranChar = type.charAt(Math.floor(Math.random() * type.length));
  }
  else if (type === charNum) {
    var ranChar = Math.floor(Math.random() * 10);
  }
  else {
    console.log("Invalid argument: 'type' for random character generation.");
  }
  return ranChar;
}

// Display the password criteria form
function showCriteria() {
  pCriteria.innerHTML = markupCriteria;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button that will display the password criteria form
generateBtn.addEventListener("click", showCriteria);

// Add event listener to submit form input that will write the password using selected criteria

// Inline HTML
var markupCriteria = `<form action="#" method="get">
<input type="checkbox" name="uppercase" value="upper">
<label for="uppercase">Uppercase</label>

<input type="checkbox" name="numeric" value="number" checked>
<label for="numeric">Numbers</label><br>


<input type="checkbox" name="lowercase" value="lower" checked>
<label for="lowercase">Lowercase</label>

<input type="checkbox" name="special" value="special">
<label for="special">Symbols</label><br><br>

<label for="length">Password Length <i>(8-128 characters)</i></label><br>
<input type="range" id="pLength" name="length" oninput="this.nextElementSibling.value=this.value" min="8" max="128" value="10" step="1">
<output>10</output><br><br>

<input type="submit" value="Fill Password">
<input type="reset" value="Reset">
</form>`;


