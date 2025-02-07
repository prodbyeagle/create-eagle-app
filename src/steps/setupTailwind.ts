import chalk from 'chalk';
import { execa } from 'execa';
import fs from 'fs-extra';
import path from 'path';

export async function setupTailwind(projectPath: string): Promise<void> {
	console.log(chalk.blue('Installing Tailwind CSS...'));
	await execa(
		'pnpm',
		['i', 'tailwindcss@latest', 'postcss', '@tailwindcss/postcss'],
		{
			stdio: 'inherit',
		}
	);

	const globalsCssPath = path.join(projectPath, 'src', 'app', 'globals.css');
	const globalsCssContent = `@import "tailwindcss";
@source "../../node_modules/@prodbyeagle/eagle-ui";

@theme {
  --font-sans: "Geist";
  --font-mono: "Geist Mono";
}`;

	await fs.writeFile(globalsCssPath, globalsCssContent, 'utf8');

	console.log(chalk.green('Tailwind setup complete.'));
}
