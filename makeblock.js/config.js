export const blocksDir = 'src/blocks/';
export const fileSources = {
	pug: `mixin {blockName}()\n\t.{blockName}&attributes(attributes)\n\t\t`,
	scss: `@use '../../styles/utils/mixins';
@use '../../styles/utils/vars';
@use '../../styles/utils/spritePng';
@use '../../styles/utils/spriteSvg';

.{blockName} {
    display: block;
}`
};
export const includePaths = {
    pug: 'src/templates/utils/blocks.pug',
    scss: 'src/styles/utils/blocks.scss'
}
export const includeSources = {
    pug: `include ../../blocks/{blockName}/{blockName}\n`,
    scss: `@use '../../blocks/{blockName}/{blockName}';\n`
};