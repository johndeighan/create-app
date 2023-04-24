#!/usr/bin/env node

import path from 'node:path';
import * as fs from 'node:fs';
import {execSync} from 'node:child_process';

// --- Verify arguments
console.log(process.argv);
let dir = process.cwd();
console.log(`Current Dir: ${dir}`);

let pos = dir.indexOf('create-app');
if (pos > -1) {
	dir = dir.substring(0,pos-1);
	}

if (process.argv.length === 3) {
	var newDirName = process.argv[2];
	var newDirPath = path.join(dir, newDirName);
	var git_repo = 'https://github.com/johndeighan/create-app.git';
	}
else if (process.argv.length === 5) {
	var newDirName = process.argv[4];
	var newDirPath = path.join(dir, newDirName);
	var git_repo = 'https://github.com/johndeighan/create-app.git';
	}
else {
	console.log('Usage: npm create @jdeighan/app <name>');
	process.exit(1);
	}

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

	console.log('Removing .git');
//	await run_cmd('npx', ['rimraf','./.git']);
	cmd = 'npx rimraf ./.git';
	execSync(cmd, {}, function(error, stdout, stderr) {
		if (error) {
			console.log(`ERROR ${error.code}`);
			}
		else {
			console.log("SUCCESS");
			console.log(stdout);
			}
		});

	console.log('Removing bin files');
	fs.rmdirSync(path.join(newDirPath, 'bin'), {recursive: true});

	console.log('The installation is done, this is ready to use !');
	console.log("Please run 'npm install' and 'git init'");

	process.exit();
	}
catch (error) {
	console.log(error);
	}
