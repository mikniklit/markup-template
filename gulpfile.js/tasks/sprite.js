import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import gulpif from 'gulp-if';
import spritesmith from 'gulp.spritesmith';
import svgSprite from 'gulp-svg-sprite';

import { sprite } from '../config.js';

gulp.task('sprite:png', () => {
    return gulp.src(sprite.png.src, { encoding: false })
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'spritePng.scss',
            imgPath: '../images/sprite.png'
        }))
        .pipe(gulpif('*.png', gulp.dest(sprite.png.dist, { encoding: false })))
        .pipe(gulpif('*.scss', gulp.dest(sprite.png.style)))
});

const svgSpriteConfig = {
    mode: {
        view: {
            bust: false,
            render: {
                scss: {
                    dest: '../../../' + sprite.svg.style + 'spriteSvg.scss'
                }
            },
            sprite: '../images/sprite.svg'
        }
    }
};

gulp.task('sprite:svg', () => {
    return gulp.src(sprite.svg.src)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(svgSprite(svgSpriteConfig))
        .pipe(gulp.dest(sprite.svg.dist))
});