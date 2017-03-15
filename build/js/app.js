(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var hangman = require('./../js/hangman.js').hangmanModule;

$(document).ready(function() {
  $('#letter-input').submit(function(event) {
   event.preventDefault();
    var letter = $("#letter").val();
    var word = 'yes';
    var result = hangman(letter, word);
    console.log(result);
    $("#score").text(result);
  });
});

},{"./../js/hangman.js":2}],2:[function(require,module,exports){

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

},{}]},{},[1,2]);
