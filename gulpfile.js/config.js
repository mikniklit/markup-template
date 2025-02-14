export const src = 'src/';
export const dist = 'build/';
export const assets = 'assets/';
export const templates = {
    src: `${src}templates/*.pug`,
    dist,
    watch: [
        `${src}templates/**/*.pug`,
        `${src}blocks/**/*.pug`
    ]
};
export const styles = {
    src: `${src}styles/*.{scss,sass}`,
    dist: `${dist + assets}styles/`,
    watch: [
        `${src}styles/**/*.{scss,sass}`,
        `${src}blocks/**/*.{scss,sass}`
    ]
};
export const scripts = {
    src: `${src}scripts/*.{js,mjs,ts}`,
    dist: `${dist + assets}scripts/`,
    watch: [
        `${src}scripts/**/*.{js,mjs,ts}`,
        `${src}blocks/**/*.{js,mjs,ts}`
    ]
};
export const images = {
    src: [
        `${src}images/**/*.{png,jpg,jpeg,gif,webp,svg,ico}`,
        `${src}blocks/**/*.{png,jpg,jpeg,gif,webp,svg,ico}`,
        `!${src}images/sprite/**`
    ],
    dist: `${dist + assets}images/`,
    watch: [
        `${src}images/**/*.{png,jpg,jpeg,gif,webp,svg,ico}`,
        `${src}blocks/**/*.{png,jpg,jpeg,gif,webp,svg,ico}`,
        `!${src}images/sprite/**`
    ]
};
export const sprite = {
    png: {
        src: `${src}images/sprite/png/*.png`,
        dist: `${dist + assets}images/`,
        watch: `${src}images/sprite/png/*.png`,
        style: `${src}styles/utils/`
    },
    svg: {
        src: `${src}images/sprite/svg/*.svg`,
        dist: dist + assets,
        watch: `${src}images/sprite/svg/*.svg`,
        style: `${src}styles/utils/`
    }
};
export const fonts = {
    src: `${src}fonts/**/*.{ttf,otf,woff,woff2,eot,svg}`,
    dist: `${dist + assets}fonts/`,
    watch: `${src}fonts/**/*.{ttf,otf,woff,woff2,eot,svg}`
};