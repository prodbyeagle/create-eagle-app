import { execa } from 'execa';

export async function createNextApp(projectDirectory: string): Promise<void> {
	await execa(
		'pnpx',
		[
			'create-next-app',
			projectDirectory,
			'--ts',
			'--use-pnpm',
			'--turbopack',
			'--app',
			'--eslint',
			'--tailwind',
			'--yes',
		],
		{
			stdio: 'inherit',
		}
	);
}
