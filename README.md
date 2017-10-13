#  [![Build Status](https://secure.travis-ci.org/agavish/gulp-apidoc-to-markdown.png?branch=master)](http://travis-ci.org/agavish/gulp-apidoc-to-markdown)

#gulp-apidoc-markdown


## Getting Started

Install the module with: `npm install gulp-apidoc-to-markdown` .

Apidoc files need to be generated first, namely "api_data.json" and "api_project.json" .

The example below is based on your sources being written to the "app" folder, and your standard apidoc files being written to the "public/apidoc" folder

```js
var apidoc = require('gulp-apidoc'),
    apidoc2md = require('gulp-apidoc-to-markdown');

gulp.task('apidoc-to-markdown-only', function(){
    apidoc2md.generate(process.cwd() + "/public/apidoc", process.cwd() + "/public/apidoc/apidoc.md");
});

gulp.task('apidoc', function(){
    apidoc({
        src: "app/",
        dest: "public/apidoc/",
        debug: false,
    },done);
});

gulp.task('apidoc-md', ['apidoc', 'apidoc-to-markdown-only']);
```

## Documentation

_(Coming soon)_

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Gulp](http://gulpjs.com/).


## License

Copyright (c) 2015 Adam Gavish  
Licensed under the MIT license.
