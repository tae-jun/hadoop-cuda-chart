var gulp = require('gulp'),
  flatten = require('gulp-flatten');

var config = require('./config');

var src = config.src;



gulp.task('copy', ['copy:index', 'copy:tpl']);

gulp.task('copy:index', function() {
  return gulp.src(src.index)
    .pipe(gulp.dest('dist'));
})

gulp.task('copy:tpl', function() {
  return gulp.src(src.tpl)
    .pipe(flatten())
    .pipe(gulp.dest('dist/tpl'));
});
