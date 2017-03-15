var hangman = require('./../js/hangman.js').hangmanModule;

$(document).ready(function() {
  $('#letter-input').submit(function(event) {
    event.preventDefault();
    var letter = $("#letter").val();
    var hangman = hangman(letter, 'yes');
    $("#score").append(hangman);
  })
});
