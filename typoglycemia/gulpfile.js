var gulp = require('gulp');

gulp.task('default', ['watch']);

gulp.task('changed', function() {
  console.log("you changed the file");
});

gulp.task('eslint', function () {
  gulp.src(['./challenge.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('watch', function() {
  gulp.watch(['./challenge.js'], ['changed', 'eslint'])
});
