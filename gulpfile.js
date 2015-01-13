"use strict";

var gulp = require('gulp')
    , mocha = require('gulp-mocha')
    , istanbul = require('gulp-istanbul');

gulp.task('test', function (cb) {
    gulp.src('./lib/gulp-apidoc-to-markdown.js')
        .pipe(istanbul()) // Covering files
        .pipe(istanbul.hookRequire()) // Force `require` to return covered files
        .on('finish', function () {
            gulp.src(['./test/test.js'])
                .pipe(mocha({
                    reporter: 'spec'
                }))
                .pipe(istanbul.writeReports()) // Creating the reports after tests runned
                .on('end', cb);
        });
});

gulp.task("default");