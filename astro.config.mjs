import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://ostrzolka.github.io',
	base: '/wiki/',
	integrations: [
		starlight({
			title: 'Ostrzółka Wiki',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Polski',
					lang: 'pl',
				},
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Start',
					items: [
						{ label: 'Witamy', slug: 'index' },
						{ label: 'Pierwsze kroki', slug: 'setup' },
					],
				},
			],
		}),
	],
});
