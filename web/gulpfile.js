var gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  runSequence = require('run-sequence');

require('require-dir')('./gulp');

var config = require('./gulp/config'),
  src = config.src;

gulp.task('default', function(cb) {
  runSequence('clean', ['build', 'copy'], cb);
});

gulp.task('livereload', function() {
  return gulp.src('')
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();

  gulp.watch(src.ts, function() {
    runSequence('build:ts', 'livereload');
  });

  gulp.watch(src.index, function() {
    runSequence('copy:index', 'livereload');
  });

  gulp.watch(src.tpl, function() {
    runSequence('copy:tpl', 'livereload');
  });

  gulp.watch(src.scss, function() {
    runSequence('build:scss', 'livereload', 'clean:css');
  });
});
