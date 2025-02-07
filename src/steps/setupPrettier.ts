import chalk from 'chalk';
import { execa } from 'execa';
import fs from 'fs-extra';
import path from 'path';

export async function setupPrettier(projectPath: string): Promise<void> {
	console.log(chalk.blue('Installing Prettier...'));
	await execa('pnpm', ['i', 'prettier'], { stdio: 'inherit' });

	const prettierConfig = {
		semi: true,
		singleQuote: true,
		trailingComma: 'es5',
		tabWidth: 4,
		useTabs: true,
		bracketSpacing: true,
		jsxSingleQuote: true,
		bracketSameLine: true,
	};
	await fs.writeFile(
		path.join(projectPath, '.prettierrc'),
		JSON.stringify(prettierConfig, null, 2)
	);
}
