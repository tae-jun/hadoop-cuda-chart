var gulp = require('gulp'),
    tsc = require('gulp-tsc'),
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    del = require('del');

var config = require('./gulp-config'),
    src = config.src,
    tscOptions = config.tscOptions;

gulp.task('default', function (cb) {
    runSequence('clean', 'build', cb);
});

gulp.task('build', ['build:ts']);

gulp.task('build:ts', function () {
    return gulp.src(src.ts, {base: '.'})
        .pipe(plumber())
        .pipe(tsc(tscOptions))
        .pipe(gulp.dest('.'));
});

gulp.task('clean', function (cb) {
    del(['src/**/*.js'], cb);
});