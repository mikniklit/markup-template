import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import beautify from 'gulp-beautify';
import pug from 'gulp-pug';
import pugbem from 'gulp-pugbem';

import { templates } from '../config.js';

gulp.task('templates', () => {
    return gulp.src(templates.src)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(pug({plugins: [pugbem]}))
        .pipe(beautify.html())
        .pipe(gulp.dest(templates.dist))
});