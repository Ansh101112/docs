import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Jabrod Docs',
    tagline: 'Build AI-powered apps with knowledge bases',
    favicon: 'img/jabrod-logo.png',

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

    // SEO enhancements
    headTags: [
        {
            tagName: 'meta',
            attributes: {
                name: 'keywords',
                content: 'RAG, knowledge base, AI, SDK, API, semantic search, embeddings, LLM, TypeScript',
            },
        },
        {
            tagName: 'meta',
            attributes: {
                name: 'author',
                content: 'Jabrod',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: 'anonymous',
            },
        },
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/jabrod/docs/tree/main/',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    filename: 'sitemap.xml',
                },
                gtag: {
                    trackingID: 'G-4VCYPKG9VP',
                    anonymizeIP: true,
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Social card for sharing
        image: 'img/jabrod-social-card.png',

        // Color mode
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },

        // Announcement bar (optional)
        // announcementBar: {
        //   id: 'sdk-v2',
        //   content: 'SDK v2.0 is out with Builder Pattern API. <a href="/sdk/installation">Learn more</a>',
        //   backgroundColor: '#7c3aed',
        //   textColor: '#ffffff',
        //   isCloseable: true,
        // },

        navbar: {
            title: 'Jabrod',
            logo: {
                alt: 'Jabrod Logo',
                src: 'img/jabrod-logo.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'docsSidebar',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    href: '/sdk/installation',
                    label: 'SDK',
                    position: 'left',
                },
                {
                    href: '/api/overview',
                    label: 'API',
                    position: 'left',
                },
                {
                    href: 'https://agent.jabrod.com',
                    label: 'Dashboard',
                    position: 'right',
                },
                {
                    href: 'https://github.com/jabrod/sdk',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ],
        },

        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Documentation',
                    items: [
                        {
                            label: 'Quick Start',
                            to: '/quickstart',
                        },
                        {
                            label: 'SDK Reference',
                            to: '/sdk/installation',
                        },
                        {
                            label: 'API Reference',
                            to: '/api/overview',
                        },
                    ],
                },
                {
                    title: 'Resources',
                    items: [
                        {
                            label: 'Dashboard',
                            href: 'https://agent.jabrod.com',
                        },
                        {
                            label: 'Status',
                            href: 'https://cloud.jabrod.com/health',
                        },
                        {
                            label: 'Changelog',
                            href: 'https://github.com/jabrod/sdk/releases',
                        },
                    ],
                },
                {
                    title: 'Company',
                    items: [
                        {
                            label: 'About',
                            href: 'https://jabrod.com/about',
                        },
                        {
                            label: 'Privacy',
                            href: 'https://jabrod.com/privacy',
                        },
                        {
                            label: 'Terms',
                            href: 'https://jabrod.com/terms',
                        },
                    ],
                },
            ],
            copyright: `© ${new Date().getFullYear()} Jabrod. All rights reserved.`,
        },

        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ['bash', 'json', 'typescript'],
        },

        // Algolia search (optional - configure when ready)
        // algolia: {
        //   appId: 'YOUR_APP_ID',
        //   apiKey: 'YOUR_SEARCH_API_KEY',
        //   indexName: 'jabrod',
        //   contextualSearch: true,
        // },

        // Table of contents
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 3,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
