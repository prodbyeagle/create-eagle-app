import chalk from 'chalk';
import { execa } from 'execa';

export async function installEagleUI(projectPath: string): Promise<void> {
	console.log(
		chalk.blue('Installing Eagle UI library (@prodbyeagle/eagle-ui)...')
	);
	await execa('pnpm', ['i', '@prodbyeagle/eagle-ui'], {
		stdio: 'inherit',
	});
}
