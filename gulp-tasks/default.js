var gulp            = require('gulp')
var gulpSequence    = require('gulp-sequence')
var getEnabledTasks = require('./lib/getEnabledTasks')


var defaultTask = function(cb) {
  var tasks = getEnabledTasks('watch')
  gulpSequence('clean', assetTasks, codeTasks, 'static', 'watch', cb)
}

gulp.task('default', defaultTask)
module.exports = defaultTask


var config  = require('../config')
var compact = require('lodash/compact')

// Grouped by what can run in parallel
var assetTasks = [ 'images']
var codeTasks = [ 'styles', 'scripts']

module.exports = function(env) {

  function matchFilter(task) {
    if(config.tasks[task]) {
      if(task === 'js') {
        task = env === 'production' ? 'webpack:production' : false
      }
      return task
    }
  }

  function exists(value) {
    return !!value
  }

  return {
    assetTasks: compact(assetTasks.map(matchFilter).filter(exists)),
    codeTasks: compact(codeTasks.map(matchFilter).filter(exists))
  }
}
