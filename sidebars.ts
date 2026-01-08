import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    docsSidebar: [
        {
            type: 'doc',
            id: 'intro',
            label: 'Introduction',
        },
        {
            type: 'doc',
            id: 'quickstart',
            label: 'Quick Start',
        },
        {
            type: 'doc',
            id: 'authentication',
            label: 'Authentication',
        },
        {
            type: 'category',
            label: 'SDK',
            items: [
                'sdk/installation',
                'sdk/knowledge-bases',
                'sdk/chat',
                'sdk/usage',
            ],
        },
        {
            type: 'category',
            label: 'API Reference',
            items: [
                'api/overview',
                'api/authentication',
                'api/knowledge-bases',
                'api/chat',
            ],
        },
    ],
};

export default sidebars;
