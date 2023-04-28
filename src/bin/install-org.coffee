`#!/usr/bin/env node
`
import path from 'node:path'
import * as fs from 'node:fs'
import {readFile, writeFile, rm} from 'node:fs/promises'
import {execSync} from 'node:child_process'

# --- Verify arguments
console.log "process.argv:"
console.log process.argv

dir = process.cwd()
console.log "Initial Dir: #{dir}"

# --- If in create-app subdirectory, go up one level
pos = dir.indexOf('create-app')
if (pos > -1)
	dir = dir.substring(0, pos-1)
	console.log "Changed dir to #{dir}"

if (process.argv.length == 3)
	appName = process.argv[2]
else if (process.argv.length == 5)
	appName = process.argv[4]
else
	console.log 'Usage: npm create @jdeighan/app <name>'
	process.exit(1)

console.log "App name: #{appName}"
newDirPath = path.join(dir, appName)
git_repo = 'https://github.com/johndeighan/create-app.git'

# --- Validate existing folder
try
	fs.mkdirSync newDirPath
	console.log "dir #{newDirPath} created"
catch err
	if (err.code == 'EEXIST')
		console.log 'Directory exists. Please choose another name'
	else
		console.log err
	process.exit 1

# --------------------------------------------------------------------------

execCmd = (cmdLine) =>

	execSync cmdLine, {}, (error, stdout, stderr) =>
		if (error)
			console.log "ERROR in #{cmdLine}: #{error.code}"
			process.exit 1
		else
			console.log "OUTPUT from #{cmdLine}:"
			console.log stdout
	return

# --------------------------------------------------------------------------

gitSetup = () =>

	execCmd 'git init'
	execCmd 'git add -A'
	execCmd 'git commit -m "initial commit"'
	execCmd 'git branch -M main'
	return;

# --------------------------------------------------------------------------

main = () =>
	try
		console.log "Clone #{git_repo}..."
		execCmd "git clone #{git_repo} #{newDirPath}"

		# --- Changing working directory
		console.log "cd to #{newDirPath}"
		process.chdir newDirPath

		console.log 'Remove README.md and NOTES.md'
		await rm './README.md'
		await rm './NOTES.md'

		# --- Create new README.md
		await writeFile './README.md', """
			#{appName} App
			===============

			Describe how to create your app
			"""

		console.log 'Remove directory .git'
		await rm './.git', {recursive: true}

		console.log 'Remove directory src/bin'
		await rm './src/bin', {recursive: true}

		console.log "Update package.json at #{newDirPath}"

		# --- Read package.json
		pkgJsonPath = path.join newDirPath, 'package.json'
		jsonTxt = await readFile pkgJsonPath, {encoding: 'utf8'}
		hJson = JSON.parse jsonTxt

		# --- Modify hJson
		hJson.name = hJson.name.replace 'create-app', appName
		hJson.version = '1.0.0'
		delete hJson.bin

		# --- Write package.json
		jsonTxt = JSON.stringify hJson, null, 3
		await writeFile pkgJsonPath, jsonTxt

		console.log "Set up GIT"
		gitSetup()

		# --- Change shell's current directory to new directory
		execCmd "cd #{newDirPath}"

		console.log "DONE! - please run:"
		console.log "   cd #{appName}"
		console.log "   npm install"
		console.log "   npm audit fix"
		process.exit()

	catch err
		console.log err

# --------------------------------------------------------------------------

main()
