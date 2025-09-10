// TASK - COPY-MISC - MOVE MISC FILES INTO BUILD DIRECTORY

'use strict';

var gulp            = require('gulp'),
    configTask      = require('../config/copy-misc'),
    configGlobal    = require('../config/_global');

gulp.task('copy:favicon', function() {
    return gulp.src(configTask.favicon.src)
    .pipe(gulp.dest(configTask.favicon.dest))
});
