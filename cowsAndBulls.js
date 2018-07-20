var number = Math.floor(Math.random()*10000);
var tries = 0;

var guessButton = document.getElementById('guessButton');
guessButton.addEventListener('click', function() {
  var numberStr = number.toString();
  if (number < 1000) {
    numberStr = numberStr.padStart(4,"0");
  }
  //document.getElementById('actual').innerHTML = numberStr;
  var text;
  var guess = document.getElementById("guess").value;
  var guessStr = guess.toString();
  if (guess < 1000) {
    guessStr = guessStr.padStart(4,"0");
  }
  if (guess == "" || guess.toString().length != 4) {
      text = 'Must be a 4 digit number.';
    } else {
      var cows = 0;
      var bulls = 0;

      for (var i=0; i<4; i++) {
        if (guessStr[i] === numberStr[i]) {
          cows += 1;
          continue;
        } else if (numberStr.includes(guessStr[i])) {
          bulls += 1;
        }
      }
      text = cows + ' cows, ' + bulls + ' bulls';
    }
    document.getElementById('outcome').innerHTML = text;
    console.log("Guess: " + guessStr + ", " + text);

    tries += 1;

    if (cows == 4) {
      text = 'You guessed the number, ' + numberStr + '.';
      document.getElementById('congrats').innerHTML = 'Congratulations!';
      document.getElementById('actual').innerHTML = text;
      document.getElementById('tries').innerHTML = 'It took ' + tries + ' tries.';
    }
});

var retryButton = document.getElementById('retryButton');
retryButton.addEventListener('click', function() {
  number = Math.floor(Math.random()*10000);
  //console.log(number);
  document.getElementById("guess").value = "0000";
  document.getElementById('outcome').innerHTML = '';
  document.getElementById('congrats').innerHTML = '';
  document.getElementById('actual').innerHTML = '';
  document.getElementById('tries').innerHTML = '';
  tries = 0;
});
