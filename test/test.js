/*global describe,it*/
'use strict';

var gulpApidoc2md = require('../lib/gulp-apidoc-to-markdown');
var path = require('path');
var apidoc = require('gulp-apidoc');
var fs = require('fs-extra');

describe('gulp-apidoc-markdown tests', function () {
    it('create apidoc-markdown test', function (done) {

        var apiDocInput = __dirname;
        var apiDocOutput = path.join(__dirname, 'apidoc');
        var outputMarkDownFile = path.join(__dirname, 'test.md');

        apidoc.exec({
            src: apiDocInput,
            dest: apiDocOutput
        });

        gulpApidoc2md.generate(apiDocOutput, outputMarkDownFile);
        fs.removeSync(apiDocOutput);
        fs.remove(outputMarkDownFile);
        done();
    });

    it('create apidoc-markdown with template test', function (done) {

        var apiDocInput = __dirname;
        var apiDocOutput = path.join(__dirname, 'apidoc');
        var outputMarkDownFile = path.join(__dirname, 'test.md');
        var template = path.join(__dirname, 'template.md');

        apidoc.exec({
            src: apiDocInput,
            dest: apiDocOutput
        });

        gulpApidoc2md.generate(apiDocOutput, outputMarkDownFile, template);
        fs.removeSync(apiDocOutput);
        fs.remove(outputMarkDownFile);
        done();
    });

    it('create apidoc-markdown with null input path  test', function (done) {

        var apiDocInput = __dirname;
        var apiDocOutput = path.join(__dirname, 'apidoc');
        var outputMarkDownFile = path.join(__dirname, 'test.md');

        apidoc.exec({
            src: apiDocInput,
            dest: apiDocOutput
        });

        gulpApidoc2md.generate(null, outputMarkDownFile);
        fs.removeSync(apiDocOutput);
        fs.remove(outputMarkDownFile);
        done();
    });

    it('create apidoc-markdown with null output path  test', function (done) {

        var apiDocInput = __dirname;
        var apiDocOutput = path.join(__dirname, 'apidoc');
        var outputMarkDownFile = path.join(__dirname, 'test.md');

        apidoc.exec({
            src: apiDocInput,
            dest: apiDocOutput
        });

        gulpApidoc2md.generate(apiDocOutput, null);
        fs.removeSync(apiDocOutput);
        fs.remove(outputMarkDownFile);
        done();
    });
});