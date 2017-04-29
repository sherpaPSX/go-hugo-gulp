var config       = require('../config')
if(!config.tasks.css) return

var gulp         = require('gulp')
var gulpif       = require('gulp-if')
var browserSync  = require('browser-sync')
var sourcemaps   = require('gulp-sourcemaps')
var path         = require('path')
var handleErrors = require('./lib/handleErrors.js')
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var watch        = require('gulp-watch');



var paths = {
  src: path.join(config.root.src, config.tasks.js.src, '/**/*.{' + config.tasks.js.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.js.dest)
}



var jsTask = function (cb) {
  return gulp.src(paths.src)
  .pipe(concat('combined.js'))
  .pipe(gulpif(global.production, uglify()))
  .pipe(gulp.dest(paths.dest));
};

gulp.task('scripts', jsTask)
module.exports = jsTask
