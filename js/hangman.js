function Game(score, correct_letters) {
  this.score = score;
  this.correct_letters = correct_letters;
}

Game.prototype.wordLength = function (word) {
  var length = word.length;
  for(var i = 1; i<=length; i++){
    this.correct_letters.push("_ ");
  }
};

Game.prototype.hangman = function(letter, word) {
  var split_word = word.split("");
  if (split_word.includes(letter) === true) {
    for (var i = 0; i <= word.length; i++) {
      if (split_word[i] === letter){
      this.correct_letters.splice(i, 1, letter);
      }
    }
  } else {
    this.score++;
  }
};

Game.prototype.winLose = function (word) {
  var length = word.length;
  if(this.correct_letters.join('') == word){
    return "you win";
  }else if (this.score == length && this.correct_letters != word.split('')){
    return "you lose, The word was: " + word.toString();
  }
};

exports.GameModule = Game;
