
		// --- Change directory
		process.chdir(newDirPath);

		// --- Install dependencies
		console.log('Installing dependencies...');
	//	spawnSync('npm install');
		await run_cmd('npm', ['install']);
		console.log('Dependencies installed successfully.');
		console.log();

		// --- Clean unused files
		console.log('Removing useless files');
	//	spawnSync('npx rimraf ./.git');
		await run_cmd('npx', ['rimraf','./.git']);
		fs.rmdirSync(path.join(newDirPath, 'bin'), {recursive: true});

		console.log('The installation is done, this is ready to use !');
