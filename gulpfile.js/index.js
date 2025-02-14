import './tasks/templates.js';
import './tasks/styles.js';
import './tasks/scripts.js';
import './tasks/images.js';
import './tasks/sprite.js';
import './tasks/fonts.js';
import './tasks/watch.js';
import './tasks/clean.js';

import gulp from 'gulp';

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel(
        'templates',
        'styles',
        'images',
        'sprite:png',
        'sprite:svg',
        'fonts'
    ),
    gulp.parallel(
        'scripts',
        'watch'
    )
));