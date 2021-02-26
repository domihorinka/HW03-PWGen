var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '1234567890';
var specialLetters = '!@#$^&%*()+=-[]{}|:<>?,.';

var ps = '';

var lowerChoice = false;
var upperChoice = false;
var specialChoice = false;
var numberChoice = false;




function generate() {
    var questionLength = '';
    while (isNaN(questionLength) || questionLength < 8 || questionLength > 128) {
      questionLength = prompt("What length would you like the password to be? (Between 8 to 128 characters)");
        if (questionLength === null) {
            break;
        }
    }
//prompts asking about password the user would like
    if (questionLength) {
        if (confirm("Would you like to use lowercase letters?") == true) {
          lowerChoice = true
        } 

        if (confirm("Would you like to use uppercase letters?") == true) {
          upperChoice = true
        }

        if (confirm("Would you like to use special characters?") == true) {
          specialChoice = true
        }

        if (confirm("Would you like to use numerical characters?") == true) {
          numberChoice = true
        }
        if (lowerChoice === false && upperChoice === false && specialChoice === false && numberChoice === false) {
            alert("At least one character type must be selected")
        }
    }

    var letters = '';
    letters += (lowerChoice ? lowerLetters : '');
    letters += (upperChoice ? upperLetters : '');
    letters += (specialChoice ? specialLetters : '');
    letters += (numberChoice ? numbers : '');

    ps = password(questionLength, letters);

    document.getElementById("passwordBox").innerHTML = ps;

}

function password(l, letters) {
    var ps = '';
    for (var i = 0; i < l; ++i) {
        ps += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return ps;
}



function copied() {
    document.getElementById("passwordBox").select();
    document.execCommand("copy");
    alert("The password has been copied to your clipboard!");
}