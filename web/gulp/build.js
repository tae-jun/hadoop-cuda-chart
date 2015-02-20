var gulp = require('gulp'),
  tsc = require('gulp-tsc'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  flatten = require('gulp-flatten'),
  plumber = require('gulp-plumber'),
  runSequence = require('run-sequence');

var config = require('./config'),
  src = config.src,
  tscOptions = config.tscOptions;



gulp.task('build', ['build:ts', 'build:scss']);

gulp.task('build:ts', function() {
  return gulp.src(src.ts)
    .pipe(plumber())
    .pipe(tsc(tscOptions))
    .pipe(gulp.dest('dist'));
});

gulp.task('build:scss', function(cb) {
  runSequence(
    'build:scss:compile',
    'build:scss:concat',
    'clean:css',
    cb
  );
});

gulp.task('build:scss:compile', function() {
  return gulp.src(src.scss, {
      base: '.'
    })
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('.'));
})

gulp.task('build:scss:concat', function() {
  return gulp.src(src.css)
    .pipe(concat('app.css'))
    .pipe(gulp.dest('dist'));
});
