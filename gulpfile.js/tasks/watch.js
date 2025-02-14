import gulp from 'gulp';

import { templates, styles, images, sprite, fonts } from '../config.js';

gulp.task('watch', () => {
    gulp.watch(templates.watch, gulp.series('templates'));
    gulp.watch(styles.watch, gulp.series('styles'));
    gulp.watch(images.watch, gulp.series('images'));
    gulp.watch(sprite.png.watch, gulp.series('sprite:png'));
    gulp.watch(sprite.svg.watch, gulp.series('sprite:svg'));
    gulp.watch(fonts.watch, gulp.series('fonts'));
});