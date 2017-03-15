var Game = require('./../js/hangman.js').GameModule;

$(document).ready(function() {
  $('#new-game').click(function(event) {
   event.preventDefault();
   var new_game = new Game(0, []);
   var word = "yes";
   new_game.wordLength(word);
   $('#letter-input').show();
   $("#word").text(new_game.correct_letters);

    $('#letter-input').submit(function(event) {
     event.preventDefault();
      var letter = $("#letter").val();
      var word = 'yes';
      new_game.hangman(letter, word);
      var win_or_lose = new_game.winLose(word);
      $("#score").text(new_game.score);
      $("#word").text(new_game.correct_letters);
      $("#win-lose").text(win_or_lose);
      console.log(win_or_lose);

    });

  });
});
