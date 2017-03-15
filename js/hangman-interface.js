var Game = require('./../js/hangman.js').GameModule;

$(document).ready(function() {
  $('#new-game').click(function(event) {
   event.preventDefault();
   var new_game = new Game(0, "");
   var word = "yes";
   new_game.wordLength(word)
   $("#word").text(new_game.correct_letters);

    $('#letter-input').submit(function(event) {
     event.preventDefault();
      var letter = $("#letter").val();
      var word = 'yes';
      new_game.hangman(letter, word);
      $("#score").text(new_game.score);
      $("#word").text(new_game.correct_letters);

    });

  });
});
