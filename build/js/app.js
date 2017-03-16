(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Game(score, correct_letters) {
  this.score = score;
  this.correct_letters = correct_letters;
  this.word =  "";
}

Game.prototype.getWord = function(new_game) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1').then(function(response){
    var word = (response[0][0]);
    new_game.word = word;
    console.log(new_game.word);
    new_game.wordLength(new_game);
    $('#letter-input').show();
    $("#word").text(new_game.correct_letters);
 }).fail(function(error){
    $("#word").text("Sorry there was an error. Apparently dinosaurs are already extinct. Try refreshing the page");
 });
};

Game.prototype.wordLength = function (new_game) {
  var word = new_game.word;
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

},{}],2:[function(require,module,exports){
var Game = require('./../js/hangman.js').GameModule;

$(document).ready(function() {
  $('#new-game').click(function(event) {
   event.preventDefault();
   var new_game = new Game(0, []);
   new_game.getWord(new_game);

      $('#letter-input').submit(function(event) {
          event.preventDefault();
          var letter = $("#letter").val();
          new_game.hangman(letter);
          var win_or_lose = new_game.winLose();
          $("#score").text(new_game.score);
          $("#word").text(new_game.correct_letters);
          $("#win-lose").text(win_or_lose);

      });
    });

  });

},{"./../js/hangman.js":1}]},{},[2]);
