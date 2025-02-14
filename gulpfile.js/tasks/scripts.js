import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import beautify from 'gulp-beautify';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import webpack from 'webpack-stream';

import { scripts } from '../config.js';
import webpackConfig from '../../webpack.config.js';

gulp.task('scripts', () => {
    return gulp.src(scripts.src)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(webpack(webpackConfig))
        .pipe(beautify())
        .pipe(gulp.dest(scripts.dist))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(scripts.dist))
});