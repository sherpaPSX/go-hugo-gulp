var gulp         = require('gulp'),
    config       = require('./config'),
    requireDir   = require('require-dir'),
    runSequence  = require('run-sequence');


requireDir('./gulp-tasks', { recurse: true });


// Commonly used tasks defined here.
gulp.task( 'serve', function(  )
{
    runSequence(
        'clean',
        [
            'styles',
            'scripts',
            'images',
        ],
        'watch'
   );
} );
