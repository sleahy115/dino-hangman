var Game = require('./../js/hangman.js').GameModule;

$(document).ready(function() {
  $('#new-game').click(function(event) {
   event.preventDefault();
   var new_game = new Game();
  });
  $('#letter-input').submit(function(event) {
   event.preventDefault();
    var letter = $("#letter").val();
    var word = 'yes';
    Game.hangman(letter, word);
    score = new_game.score;
    console.log(result);
    $("#score").text(score);
  });
});
