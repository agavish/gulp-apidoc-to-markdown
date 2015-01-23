"use strict";

var gulp = require('gulp')
    , mocha = require('gulp-mocha')
    ,  bump = require('gulp-bump')
    , git = require('gulp-git')
    , istanbul = require('gulp-istanbul')
    , tag_version = require('gulp-tag-version');

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

gulp.task("bump", function () {
    gulp.src('./package.json')
        .pipe(bump({type: 'minor' }))
        .pipe(gulp.dest('./'))
        .pipe(git.commit('bumps package version'));
});

gulp.task("default");