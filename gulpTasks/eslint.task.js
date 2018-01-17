var gulp = require('gulp');
var eslint = require('gulp-eslint');
var conf = require('./gulp.config');

gulp.task('eslint:server', function() {
  return gulp
    .src(conf.server.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
});