import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Jabrod Docs',
    tagline: 'Build AI-powered apps with knowledge bases in minutes',
    favicon: 'img/favicon.ico',
    url: 'https://docs.jabrod.com',
    baseUrl: '/',
    organizationName: 'jabrod',
    projectName: 'docs',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    routeBasePath: '/',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],
    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'Jabrod',
            logo: {
                alt: 'Jabrod Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'docsSidebar',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    href: 'https://agent.jabrod.com',
                    label: 'Dashboard',
                    position: 'right',
                },
                {
                    href: 'https://github.com/jabrod',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        { label: 'Getting Started', to: '/' },
                        { label: 'SDK Reference', to: '/sdk/installation' },
                        { label: 'API Reference', to: '/api/overview' },
                    ],
                },
                {
                    title: 'Product',
                    items: [
                        { label: 'Dashboard', href: 'https://agent.jabrod.com' },
                        { label: 'Pricing', href: 'https://jabrod.com/pricing' },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        { label: 'GitHub', href: 'https://github.com/jabrod' },
                        { label: 'Twitter', href: 'https://twitter.com/jabrodai' },
                    ],
                },
            ],
            copyright: `Copyright ${new Date().getFullYear()} Jabrod.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ['bash', 'typescript', 'json'],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
