#!/usr/bin/env node

import path from 'node:path';
import * as fs from 'node:fs';
import {spawnSync, execSync} from 'node:child_process';

// --- Verify arguments
console.log(process.argv);
if (process.argv.length !== 3) {
	console.log('Usage: npm create @jdeighan/app <name>');
	process.exit(1);
	}

// --- Parse arguments and option
const newDirName = process.argv[2];
const newDirPath = path.join(process.cwd(), newDirName);
const git_repo = 'https://github.com/johndeighan/create-app.git';

// --- Validate existing folder
try {
	console.log(`Creating dir ${newDirPath}`);
	fs.mkdirSync(newDirPath);
	console.log("SUCCESS, directory created");
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

async function main() {
	try {
		console.log(`Cloning ${git_repo}...`);
		let cmd = `git clone --depth 1 ${git_repo} ${newDirPath}`;
		execSync(cmd, {}, function(error, stdout, stderr) {
			if (error) {
				console.log(`ERROR ${error.code}`);
				}
			else {
				console.log("SUCCESS");
				console.log(stdout);
				}
			});
		process.exit();
		}
	catch (error) {
		console.log(error);
		}
	} // main()

main()