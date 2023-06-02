`#!/usr/bin/env node
`
import {
	mkpath, slurp, slurpPkgJSON, barf, barfPkgJSON,
	} from '@jdeighan/base-utils/fs'
import {
	mkdir, rmdir, rmfile,
	execCmd, cloneRepo,
	} from '@jdeighan/coffee-utils/fs'
import {LOG, LOGVALUE} from '@jdeighan/base-utils/log'

# ---------------------------------------------------------------------------

main = () =>
	# --- LOG argv
	LOG "process.argv:"
	LOG process.argv

	# --- Get the App name
	switch process.argv.length
		when 3
			appName = process.argv[2]
		when 5
			appName = process.argv[4]
		else
			LOG 'Usage: npm create @jdeighan/app <name>'
			process.exit(1)
	LOG "App name: #{appName}"

	# --- cd to /Users dir and get the full path
	process.chdir('~')
	userDir = process.cwd()

	projDir = mkpath(userDir, appName)
	mkdir projDir
	LOG "dir #{projDir} created"

	output = cloneRepo('johndeighan', 'create-app', projDir)
	LOG output

	# --- Changing working directory
	LOG "cd to #{projDir}"
	process.chdir("~/#{appName}")
	projDir = process.cwd()

	LOG 'Remove README.md and NOTES.md'
	rmfile './NOTES.md'
	await rmfile './README.md'

	# --- Create new README.md
	barf """
		#{appName} App
		===============

		Describe how to create your app
		""", './README.md'

	LOG 'Remove directory .git'
	rmdir './.git'

	LOG 'Remove directory src/bin'
	rmdir './src/bin'

	LOG "Update package.json at #{projDir}"

	# --- Read package.json
	hJson = slurpPkgJSON()

	# --- Modify hJson
	hJson.name = hJson.name.replace 'create-app', appName
	hJson.version = '1.0.0'
	delete hJson.bin

	# --- Write package.json
	barfPkgJSON hJson

	LOG "Set up GIT"
	execCmd 'git init'
	execCmd 'git add -A'
	execCmd 'git commit -m "initial commit"'
	execCmd 'git branch -M main'

	LOG "DONE! - please run:"
	LOG "   cd #{appName}"
	LOG "   npm install"
	LOG "   npm audit fix"
	return

# ---------------------------------------------------------------------------

try
	await main()
catch err
	LOG "ERROR: #{err}"
