export const blocksDir = 'src/blocks/';
export const fileSources = {
	pug: `mixin {blockName}()\n\t.{blockName}&attributes(attributes)\n\t\t`,
	scss: `.{blockName} {\n\tdisplay: block;\n}`
};
export const includePaths = {
    pug: 'src/templates/utils/blocks.pug',
    scss: 'src/styles/utils/blocks.scss'
}
export const includeSources = {
    pug: `include ../../blocks/{blockName}/{blockName}\n`,
    scss: `@use '../../blocks/{blockName}/{blockName}';\n`
};