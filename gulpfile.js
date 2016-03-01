'use strict';

var gulp = require('gulp');

gulp.task('html', function(){
  gulp.src('src/partials/home.html')
    .pipe(gulp.dest('public/partials'))
});

gulp.task('controller', function(){
  gulp.src('src/**/*.js')
    .pipe(gulp.dest('public/js'))
});

gulp.task('default', ['html', 'controller'], function() {
  gulp.src('src/module.js')
    .pipe(gulp.dest('public'));
});
