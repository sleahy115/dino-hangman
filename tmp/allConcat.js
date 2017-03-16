var Game = require('./../js/hangman.js').GameModule;

$(document).ready(function() {
  $('#new-game').click(function(event) {
   event.preventDefault();

   var new_game = new Game(0, []);
   new_game.getWord(new_game, function(){
     $('#letter-input').show();
     $("#word").text(new_game.correct_letters);
    });

    $('#letter-input').submit(function(event) {
      event.preventDefault();
      var letter = $("#letter").val();
      new_game.hangman(letter);
      $("#output-image").empty();
      if(new_game.score <= 3){
        $("#output-image").prepend('<img src="img/1.jpg" />');
      } else if (new_game.score >= 4){
        $("#output-image").prepend('<img src="img/3.jpg" />');
      var win_or_lose = new_game.winLose();
      $("#score").text(new_game.score);
      $("#word").text(new_game.correct_letters);
      $("#win-lose").text(win_or_lose);
      $("#letter").val("");

    });
  });
});
