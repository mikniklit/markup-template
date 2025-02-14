import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import beautify from 'gulp-beautify';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import mqsort from 'postcss-sort-media-queries';

import { styles } from '../config.js';

const sass = gulpSass(dartSass);

gulp.task('styles', () => {
    return gulp.src(styles.src)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sass())
        .pipe(postcss([autoprefixer(), mqsort()]))
        .pipe(beautify.css())
        .pipe(gulp.dest(styles.dist))
        .pipe(csso())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(styles.dist))
});