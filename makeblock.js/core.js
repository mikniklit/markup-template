import path from 'path';
import fs from 'fs';
import { createInterface } from 'readline';

import { blocksDir, fileSources, includePaths, includeSources } from './config.js';

const rl = createInterface(process.stdin, process.stdout);

export function init(blockNames) {

    if (blockNames.length === 0) {
        rl.setPrompt('Block(s) name: ');
        rl.prompt();
        rl.on('line', line => {
            // If there are many spaces in a line, replace them with one
            line = line.replace(/ {2,}/g, ' ');
            init(line.split(' '));
        });
    }

    const makeBlock = blockName => {
        const blockPath = path.join(blocksDir, blockName);

        return validateBlockName(blockName)
            .then(() => directoryExist(blockPath, blockName))
            .then(() => createDir(blockPath, blockName))
            .then(() => createFiles(blockPath, blockName, fileSources))
            .then(() => includeBlock(includePaths, includeSources, blockName))
            .then(() => {
                const line = '-'.repeat(48 + blockName.length);

				console.log(line);
				console.log(`The block has just been created in '${blocksDir + blockName}'`);

				rl.close();
            });
    }

    const promises = blockNames.map(name => makeBlock(name));

    return Promise.all(promises);
}

function validateBlockName(blockName) {
    return new Promise((resolve, reject) => {
		const isValid = /^(\d|\w|-)+$/.test(blockName);

		if (isValid) {
			resolve(isValid);
		} else {
			const errMsg = (
				`ERR>>> An incorrect block name '${blockName}'\n` +
				`ERR>>> A block name must include letters, numbers & this symbols $ _ -`
			);
			reject(errMsg);
		}
	});
}

function directoryExist(blockPath, blockName) {
	return new Promise((resolve, reject) => {
		fs.stat(blockPath, notExist => {
			if (notExist) {
				resolve();
			} else {
				reject(`ERR>>> The block '${blockName}' already exists.`);
			}
		});
	});
}

function createDir(blockPath, blockName) {
	return new Promise((resolve, reject) => {
		fs.mkdir(blockPath, err => {
			if (err) {
				reject(`ERR>>> Failed to create a folder '${blockName}'`);
			} else {
				resolve();
			}
		});
	});
}

function createFiles(blockPath, blockName, fileSources) {
	const promises = [];

	Object.keys(fileSources).forEach(ext => {
		const fileSource = fileSources[ext].replace(/\{blockName}/g, blockName);
		const filename = `${blockName}.${ext}`;
		const filePath = path.join(blockPath, filename);

		promises.push(
            new Promise((resolve, reject) => {
                fs.writeFile(filePath, fileSource, 'utf8', err => {
                    if (err) {
                        reject(`ERR>>> Failed to create a file '${filePath}'`);
                    } else {
                        resolve();
                    }
                });
            })
		);
	});

	return Promise.all(promises);
}

function includeBlock(includePaths, includeSources, blockName) {
    const promises = [];

	Object.keys(includePaths).forEach(ext => {
        const includeSource = includeSources[ext].replace(/\{blockName}/g, blockName);
        const includePath = includePaths[ext];

		promises.push(
            new Promise((resolve, reject) => {
                fs.appendFile(includePath, includeSource, 'utf8', err => {
                    if (err) {
                        reject(`ERR>>> Failed to include a block into '${includePath}'`);
                    } else {
                        resolve();
                    }
                });
            })
		);
	});

	return Promise.all(promises);
}