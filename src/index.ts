#!/usr/bin/env node
import { program } from 'commander';
import { createProject } from './createProject';

async function run() {
	program
		.version('0.0.0')
		.argument('<project-directory>', 'Name of the new project')
		.action(async (projectDirectory: string) => {
			await createProject(projectDirectory);
		});

	await program.parseAsync(process.argv);
}

run().catch((error) => {
	console.error('Unexpected error:', error);
	process.exit(1);
});