var gulp = require("gulp");
var source = require("vinyl-source-stream");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var utilities = require("gulp-util");
var jshint = require("gulp-jshint");
var buildProduction = utilities.env.production;
