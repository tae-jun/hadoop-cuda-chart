var gulp = require('gulp'),
  del = require('del');

var config = require('./config'),
  src = config.src,
  tscOptions = config.tscOptions;



gulp.task('clean', function(cb) {
  del(['dist/**/*'], cb);
});

gulp.task('clean:tsout', function(cb) {
  del(['dist/' + tscOptions.out], cb);
});

gulp.task('clean:css', function(cb) {
  del(src.css, cb);
});
