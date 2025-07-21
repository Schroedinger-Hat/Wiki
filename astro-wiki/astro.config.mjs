// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Schrödinger Hat Wiki',
			description: 'Documentation and knowledge base for the Schrödinger Hat community',
			logo: {
				src: './src/assets/logo.svg',
				alt: 'Schrödinger Hat Logo'
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/schroedinger-hat' },
				{ icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@schroedingerhat' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/schroedinger-hat' },
			],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/favicon.svg',
						type: 'image/svg+xml'
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/favicon.ico',
						type: 'image/x-icon'
					}
				},
				{
					tag: 'script',
					attrs: {
						src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
					}
				}
			],
			sidebar: [
				{
					label: 'General',
					autogenerate: { 
						directory: 'general',
						collapsed: false
					},
				},
				{
					label: 'Association',
					autogenerate: { 
						directory: 'association',
						collapsed: false
					},
				},
				{
					label: 'Finance',
					autogenerate: { 
						directory: 'finance',
						collapsed: false
					},
				},
				{
					label: 'DevOps',
					autogenerate: { 
						directory: 'devops',
						collapsed: false
					},
				},
				{
					label: 'Tools',
					autogenerate: { 
						directory: 'tools',
						collapsed: false
					},
				},
			],
			components: {
				// Add custom components here if needed
			}
		}),
	],
});
