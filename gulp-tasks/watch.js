
var config = require('../config');
var gulp   = require('gulp');
var path   = require('path');
var watch  = require('gulp-watch');
var bs     = require('browser-sync').create();
var del = require('del');


var paths = {
  styles :  path.join(config.root.src, config.tasks.css.src, '/*.{' + config.tasks.css.extensions + '}'),
  scripts : path.join(config.root.src, config.tasks.js.src, '/*.{' + config.tasks.js.extensions + '}'),
  images : path.join(config.root.src, config.tasks.images.src, '/*.{' + config.tasks.images.extensions + '}')
}


var watchTask = function() {

  gulp.watch(paths.styles, ['styles'])
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);

  console.log(paths.styles, paths.scripts,paths.images)
};



gulp.task('watch', ['browserSync'], watchTask)
module.exports = watchTask
