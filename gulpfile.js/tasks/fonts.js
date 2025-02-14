import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';

import { fonts } from '../config.js';

gulp.task('fonts', () => {
    return gulp.src(fonts.src, { encoding: false })
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(newer(fonts.dist))
        .pipe(gulp.dest(fonts.dist))
});