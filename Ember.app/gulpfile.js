'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var map = require('gulp-sourcemaps');

var packageJSON = require('./package.json');
var dependencies = Object.keys(packageJSON && packageJSON.dependencies || {});

gulp.task('vendor', function () {
    return browserify('app/scripts/libs/lib.js')
        .require(dependencies)
        .bundle()
        .pipe(source('vendor.bundle.js'))
        .pipe(gulp.dest(__dirname + '/public/assets/scripts'));
});

gulp.task('clockMe', function () {
    return browserify('app/scripts/app.js')
        .external(dependencies)
        .bundle()
        .pipe(source('ac-clock.bundle.js'))
        .pipe(map.write('./'))
        .pipe(gulp.dest(__dirname + '/public/assets/scripts'));
});

gulp.task('watch', function () {
    gulp.watch('package.json', ['vendor']);
    gulp.watch('app/scripts/**', ['todo']);
});

gulp.task('default', ['vendor', 'clockMe', 'watch']);