import { defineConfig } from 'vite';
import pkg from './package.json' with { type: 'json' };

export default defineConfig({
	base: './',
	define: {
		__APP_VERSION__: JSON.stringify(pkg.version),
	},
	build: {
		outDir: 'docs',
		emptyOutDir: true,
		rollupOptions: {
			output: {
				manualChunks: {
					phaser: ['phaser'],
				},
			},
		},
	},
	server: {
		port: 8000,
		open: true,
	},
});
