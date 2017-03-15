var hangman = require('./../js/hangman.js').hangmanModule;

$(document).ready(function() {
  $('#letter-input').submit(function(event) {
   event.preventDefault();
    var letter = $("#letter").val();
    var word = 'yes';
    var result = hangman(letter, word);
    console.log(result);
    $("#score").text(result);
  });
});
