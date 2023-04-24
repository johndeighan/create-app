#!/usr/bin/env node

import path from 'node:path';
import * as fs from 'node:fs';
import {spawnSync} from 'node:child_process';

// --- Define functions ------------------------------------

function run_cmd(cmd, lArgs, callBack) {

	const result = spawnSync(cmd, lArgs, {encoding: 'utf-8'});
	console.log(result.stdout);
	return;
	}

// ----------------------------------------------------------

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

try {
	console.log('Cloning...');
//	spawnSync(`git clone --depth 1 ${git_repo} ${newDirPath}`);
	run_cmd('git' ['clone','--depth','1',git_repo, newDirPath]);

	// --- Change directory
	process.chdir(newDirPath);

	// --- Install dependencies
	console.log('Installing dependencies...');
//	spawnSync('npm install');
	run_cmd('npm', ['install']);
	console.log('Dependencies installed successfully.');
	console.log();

	// --- Clean unused files
	console.log('Removing useless files');
//	spawnSync('npx rimraf ./.git');
	run_cmd('npx', ['rimraf','./.git']);
	fs.rmdirSync(path.join(newDirPath, 'bin'), {recursive: true});

	console.log('The installation is done, this is ready to use !');
	}
catch (error) {
	console.log(error);
	}
