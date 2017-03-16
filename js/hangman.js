function Game(score, correct_letters) {
  this.score = score;
  this.correct_letters = correct_letters;
  this.word =  "";
}

Game.prototype.getWord = function(new_game, callback) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1').then(function(response){
    var word = (response[0][0]);
    new_game.word = word;
    new_game.wordLength(new_game);
    console.log(new_game.word);
    callback();
    }).fail(function(error){
    $("#word").text("Sorry there was an error. Apparently dinosaurs are already extinct. Try refreshing the page");
 });
};

Game.prototype.wordLength = function (new_game) {
  var word = new_game.word;
  console.log(new_game.word);
  var length = word.length;
  for(var i = 1; i<=length; i++){
    new_game.correct_letters.push("_ ");
  }
};

Game.prototype.hangman = function(letter) {
  var split_word = this.word.toLowerCase().split("");
  if (split_word.includes(letter) === true) {
    for (var i = 0; i <= this.word.length; i++) {
      if (split_word[i] === letter){
      this.correct_letters.splice(i, 1, letter);
      }
    }
  } else {
    this.score++;
  }
};

Game.prototype.winLose = function () {
  var length = this.word.length;
  if(this.correct_letters.join('') == this.word.toLowerCase()){
    return "you win";
  }else if (this.score == length && this.correct_letters != this.word.split('')){
    return "you lose, The word was: " + this.word.toString();
  }
};

exports.GameModule = Game;
