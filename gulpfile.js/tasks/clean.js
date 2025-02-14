import gulp from 'gulp';
import { deleteAsync } from 'del';

import { dist } from '../config.js';

gulp.task('clean', () => {
    return deleteAsync(dist);
});