'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');
var config = require('../config');


gulp.task('hugo', shell.task('hugo server --baseUrl=http://example.com --appendPort=false'))
