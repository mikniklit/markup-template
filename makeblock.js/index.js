import { init } from './core.js';

const blockNameFromCLI = process.argv.slice(2);

init(blockNameFromCLI);