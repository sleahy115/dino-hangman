function Game(score, correct_letters) {
  this.score = score;
  this.correct_letters = correct_letters;
}

Game.prototype.hangman = function(letter, word) {
  var split_word = word.split("");
  if (split_word.includes(letter) === true) {
      var index = word.indexOf(letter);
      var wordArray = this.correct_letters;
      this.correct_letters = wordArray.substr(0, index) + letter + wordArray.substr(index + 1);
  } else {
    this.score = score++;
  }
};

Game.prototype.wordLength = function (word) {
  var length = word.length;
  var wordArray = "";
  for(var i = 1; i<=length; i++){
    wordArray += "_ ";
  }
  this.correct_letters += wordArray;
};


exports.GameModule = Game;
