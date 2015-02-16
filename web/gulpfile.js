var gulp = require('gulp'),
    del = require('del'),
    livereload = require('gulp-livereload'),
    tsc = require('gulp-tsc'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    flatten = require('gulp-flatten'),
    plumber = require('gulp-plumber');

var src = {
    ts: ['src/**/*.ts', 'scripts/_references.d.ts'],
    index: 'src/index.html',
    css: ['src/**/*.css'],
    tpl: ['src/**/*.tpl.html']
};

var tsOutFileName = 'app.js';

var tscOptions = {
    module: 'commonjs',
    target: 'ES5',
    out: tsOutFileName
};


gulp.task('clean', function (cb) {
    del(['dist/**/*'], cb);
});

gulp.task('clean:tsout', function (cb) {
    del(['dist/' + tsOutFileName], cb);
});

gulp.task('copy', function () {
    return gulp.src(['src/index.html'])
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('copy:tpl', function () {
    return gulp.src(src.tpl)
        .pipe(flatten())
        .pipe(gulp.dest('dist/tpl'))
        .pipe(livereload());
});

gulp.task('concat:css', function () {
    return gulp.src(src.css)
        .pipe(concat('app.css'))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('tsc', function () {
    return gulp.src(src.ts)
        .pipe(plumber())
        .pipe(tsc(tscOptions))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('reload', function () {
    return gulp.src('')
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();

    gulp.watch(src.ts, ['clean:tsout', 'tsc']);

    gulp.watch(src.index, ['copy']);

    gulp.watch(src.tpl, ['copy:tpl']);

    gulp.watch(src.css, ['concat:css']);
});