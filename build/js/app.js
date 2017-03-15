(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
      var index = word.indexOf(letter);
      var wordArray = this.correct_letters;
      this.correct_letters.splice(index, 1, letter);
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

},{}],2:[function(require,module,exports){
var Game = require('./../js/hangman.js').GameModule;

$(document).ready(function() {
  $('#new-game').click(function(event) {
   event.preventDefault();
   var new_game = new Game(0, []);

    $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1', function(response){
      var word = (JSON.stringify(response));
      console.log(word);
      new_game.wordLength(word);
      $('#letter-input').show();
      $("#word").text(new_game.correct_letters);

      $('#letter-input').submit(function(event) {
          event.preventDefault();
          var letter = $("#letter").val();
          new_game.hangman(letter, word);
          var win_or_lose = new_game.winLose(word);
          $("#score").text(new_game.score);
          $("#word").text(new_game.correct_letters);
          $("#win-lose").text(win_or_lose);


      });
    });

  });
});

},{"./../js/hangman.js":1}]},{},[2]);
