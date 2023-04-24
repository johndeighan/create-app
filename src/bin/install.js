#!/usr/bin/env node

import path from 'node:path';
import * as fs from 'node:fs';

// --- Verify arguments
console.log(process.argv);
if (process.argv.length < 3) {
	console.log('You have to provide a name to your app.');
	console.log('For example :');
	console.log('    npm create @jdeighan/app my-app');
	process.exit(1);
	}

// --- Parse arguments and option
const newDirName = process.argv[4];
const currentPath = process.cwd();
const newDirPath = path.join(currentPath, newDirName);
const git_repo = 'https://github.com/johndeighan/create-app.git';

// --- Validate existing folder
try {
	console.log(`Creating dir ${newDirPath}`);
	fs.mkdirSync(newDirPath);
	console.log("SUCCESS");
	}
catch (err) {
	if (err.code === 'EEXIST') {
		console.log('Directory already exists. Please choose another name for the project.');
		}
	else {
		console.log(err);
		}
	process.exit(1);
	}

console.log("In install.js - created directory, quitting...");
process.exit(1);

// --- define steps in workflow
async function main() {
	try {
		console.log('Downloading files...');
		execSync(`git clone --depth 1 ${git_repo} ${newDirPath}`);

		// --- Change directory
		process.chdir(newDirPath);

		// --- Install dependencies
		console.log('Installing dependencies...');
		await runCmd('npm install');
		console.log('Dependencies installed successfully.');
		console.log();

		// --- Clean unused files
		console.log('Removing useless files');
		execSync('npx rimraf ./.git');
		fs.rmdirSync(path.join(newDirPath, 'bin'), {recursive: true});

		console.log('The installation is done, this is ready to use !');
		}
	catch (error) {
		console.log(error);
		}
	}

// --- trigger workflow
main();
