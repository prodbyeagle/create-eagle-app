import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { createNextApp } from './steps/createNextApp';
import { setupTailwind } from './steps/setupTailwind';
import { setupPrettier } from './steps/setupPrettier';
import { installEagleUI } from './steps/installEagleUI';
import { cleanUp } from './steps/cleanUp';

export async function createProject(projectDirectory: string): Promise<void> {
	const projectPath = path.resolve(process.cwd(), projectDirectory);
	if (await fs.pathExists(projectPath)) {
		console.error(
			chalk.red(`Directory "${projectDirectory}" already exists.`)
		);
		process.exit(1);
	}

	try {
		console.log(
			chalk.blue(`Creating Next.js project: "${projectDirectory}"`)
		);
		await createNextApp(projectDirectory);
		process.chdir(projectPath);

		await cleanUp(projectPath);
		await setupTailwind(projectPath);
		await setupPrettier(projectPath);
		await installEagleUI(projectPath);

		console.log(
			chalk.green('Project setup complete! Enjoy building with Eagle.')
		);
	} catch (error) {
		console.error(chalk.red('Error during setup:'), error);
		process.exit(1);
	}
}
