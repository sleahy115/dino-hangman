function Game(score = 0, correct_letters = []) {
  this.score = score;
  this.correct_letters = correct_letters;
}

Game.prototype.hangman = function(letter, word) {
  var split_word = word.split("");
  if (split_word.includes(letter) === true) {
    this.correct_letters.push(letter);
  } else {
    this.score = score++;
  }
};

exports.GameModule = Game;
