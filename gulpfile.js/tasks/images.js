import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';

import { images } from '../config.js';

gulp.task('images', () => {
    return gulp.src(images.src, { encoding: false })
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(newer(images.dist))
        .pipe(gulp.dest(images.dist))
});