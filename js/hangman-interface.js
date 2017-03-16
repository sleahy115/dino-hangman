var Game = require('./../js/hangman.js').GameModule;

$(document).ready(function() {
  $('#new-game').click(function(event) {
   event.preventDefault();
   var new_game = new Game(0, []);
   new_game.getWord(new_game);

      $('#letter-input').submit(function(event) {
          event.preventDefault();
          var letter = $("#letter").val();
          new_game.hangman(letter);
          var win_or_lose = new_game.winLose();
          $("#score").text(new_game.score);
          $("#word").text(new_game.correct_letters);
          $("#win-lose").text(win_or_lose);

      });
    });

  });
