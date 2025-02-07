import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';

export async function cleanUp(projectPath: string): Promise<void> {
	const publicPath = path.join(projectPath, 'public');
	const faviconPath = path.join(projectPath, 'src', 'app', 'favicon.ico');
	const stylesPath = path.join(projectPath, 'styles');
	const tailwindConfigPath = path.join(projectPath, 'tailwind.config.ts');
	const postcssConfigPath = path.join(projectPath, 'postcss.config.mjs');

	console.log(chalk.blue('Cleaning up project structure...'));

	if (await fs.pathExists(publicPath)) {
		await fs.remove(publicPath);
	}
	if (await fs.pathExists(faviconPath)) {
		await fs.remove(faviconPath);
	}
	if (await fs.pathExists(stylesPath)) {
		await fs.remove(stylesPath);
	}
	if (await fs.pathExists(tailwindConfigPath)) {
		await fs.remove(tailwindConfigPath);
	}

	const postcssConfigContent = `/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;`;

	await fs.writeFile(postcssConfigPath, postcssConfigContent, 'utf8');

	console.log(chalk.green('Cleanup complete.'));
}
