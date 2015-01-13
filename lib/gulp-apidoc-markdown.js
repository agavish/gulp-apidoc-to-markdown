/*
 * 
 * https://github.com/agavish/gulp-apidoc-markdown
 *
 * Copyright (c) 2015 Adam Gavish
 * Licensed under the MIT license.
 */

"use strict";

var shelljs = require('shelljs');
var path = require('path');

var gulpApidoc2md = {

    generate: function(inputpath, outputfile, template) {


        if (inputpath == null || inputpath === undefined || inputpath.length === 0) {
            console.log('gulp-apidoc-markdown failed because of bad path: ' + inputpath);
        }

        if (outputfile == null || outputfile === undefined || outputfile.length === 0) {
            console.log('gulp-apidoc-markdown failed because of bad outputfile: ' + outputfile);
        }

        var apidocMdCmd = path.join(process.cwd(), 'node_modules', 'apidoc-markdown', 'index.js') + ' -p ' + inputpath + ' -o ' + outputfile;

        if (template != null && template !== undefined && template.length !== 0) {
            apidocMdCmd.concat(" -t " + template);
        }

        console.log('executing: ' + apidocMdCmd);

        if (shelljs.exec(apidocMdCmd).code !== 0) {
            console.log('gulp-apidoc-markdown failed');
        }
    }
};

module.exports = gulpApidoc2md;
