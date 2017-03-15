var gulp = require("gulp");
var source = require("vinyl-source-stream");
var browserify = require("browserify");
// var concat = require("gulp-concat");
// var uglify = require("gulp-uglify");
// var utilities = require("gulp-util");
var jshint = require("gulp-jshint");
// var buildProduction = utilities.env.production;

gulp.task('jsBrowserify' , function(){
  return browserify({ entries: ['./js/hangman-interface.js', './js/hangman.js'] })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});

gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});
