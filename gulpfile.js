var gulp  = require('gulp');
var sass  = require('gulp-sass');
var react = require('gulp-react');


gulp.task('styles', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('react', function() {
    gulp.src('./build/**/*.js')
        .pipe(react())
        .pipe(gulp.dest('./js/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('scss/**/*.scss',['styles']);
    gulp.watch('build/myreact.js', ['react']);
});
