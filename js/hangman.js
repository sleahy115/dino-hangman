
var hangman = function(letter, word) {
  var split_word = word.split("");
  return split_word.includes(letter)
};
//   var score = 0;
//   var result = [];
//   split_word.forEach(function(element) {
//     if (element === letter) {
//       result.push(letter);
//     }
//   });
//   return result;
//   else {
//     if (element !== letter)
//     score++;
//     alert(score);
//     console.log(score);
//   }
// };

exports.hangmanModule = hangman;
