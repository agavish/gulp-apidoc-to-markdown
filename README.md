#  [![Build Status](https://secure.travis-ci.org/agavish/gulp-apidoc-to-markdown.png?branch=master)](http://travis-ci.org/agavish/gulp-apidoc-to-markdown)

#gulp-apidoc-markdown


## Getting Started

Install the module with: `npm install gulp-apidoc-markdown`

```js
var apidoc2md = require('gulp-apidoc-markdown');

gulp.task('apidoc-to-markdown', function(){
    apidoc2md.generate(process.cwd() + "/docs/", process.cwd() + "/docs/test.md");
});
```

## Documentation

_(Coming soon)_

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Gulp](http://gulpjs.com/).


## License

Copyright (c) 2015 Adam Gavish  
Licensed under the MIT license.
