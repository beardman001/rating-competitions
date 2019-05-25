"use strict"

let gulp = require('gulp');
let less = require('gulp-less');
let concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');
let rename = require("gulp-rename");
let watch = require('gulp-watch-less');



gulp.task('compile-less', function () {
    gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(concat('rating-competitions.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./dist/css'));
});



gulp.task('watch-less', function() {
    gulp.watch('less/**/*.less' , ['compile-less']);
});

gulp.task('default', ['compile-less', 'watch-less']);
