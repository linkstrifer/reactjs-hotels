var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var conf = require('./gulp.config');

gulp.task('watch:api', function() {
  return watch(conf.server.src, batch(function (event, done) {
    gulp.start('eslint:server', done);
  }));
});