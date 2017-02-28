var gulp = require('gulp'),
    minify = require('gulp-clean-css'),
    concat = require('gulp-concat');


gulp.task('minify-concat-css', function() {
  gulp.src(['css/normalize.css', 'css/master.css'])
      .pipe(minify())
      .pipe(concat('minify.css'))
      .pipe(gulp.dest('css/'));
});
