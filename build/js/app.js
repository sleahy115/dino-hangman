(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Game = require('./../js/hangman.js').GameModule;

$(document).ready(function() {
  $('#new-game').click(function(event) {
   event.preventDefault();
   var new_game = new Game();
  });
  $('#letter-input').submit(function(event) {
   event.preventDefault();
    var letter = $("#letter").val();
    var word = 'yes';
    Game.hangman(letter, word);
    score = new_game.score;
    console.log(result);
    $("#score").text(score);
  });
});

},{"./../js/hangman.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1,2]);
