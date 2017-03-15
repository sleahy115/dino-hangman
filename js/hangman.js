var hangman = function(letter, word) {
  var split_word = word.split();
  var score = 0;
  split_word.forEach(function(element) {
    if (element === letter) {
      return letter;
    } else {
      return score++;
    }
  });
};

exports.hangmanModule = hangman;
