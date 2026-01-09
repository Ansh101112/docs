import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

// Simple SVG icons
const KBIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
        <path d="M8 7h6" />
        <path d="M8 11h8" />
    </svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
    </svg>
);

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c4.97 0 9 3.58 9 8s-4.03 8-9 8c-1.29 0-2.52-.24-3.63-.68L3 21l2.68-5.37C4.02 14.35 3 12.79 3 11c0-4.42 4.03-8 9-8z" />
    </svg>
);

const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

const BuilderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const FeatureList = [
    {
        title: 'Knowledge Bases',
        Icon: KBIcon,
        description: (
            <>
                Upload documents (PDF, TXT, MD) and create searchable knowledge bases.
                Content is automatically chunked, embedded, and indexed.
            </>
        ),
    },
    {
        title: 'Semantic Search',
        Icon: SearchIcon,
        description: (
            <>
                Query documents with natural language using <code>jabrod.rag.query()</code>.
                Returns relevant chunks with similarity scores.
            </>
        ),
    },
    {
        title: 'RAG Chat',
        Icon: ChatIcon,
        description: (
            <>
                Chat with your knowledge bases using <code>jabrod.rag.chat()</code>.
                AI responses grounded in your content with source citations.
            </>
        ),
    },
    {
        title: 'TypeScript SDK',
        Icon: CodeIcon,
        description: (
            <>
                Type-safe SDK for Node.js and browsers.
                Install with <code>npm install jabrod</code> and start building.
            </>
        ),
    },
    {
        title: 'Builder Pattern',
        Icon: BuilderIcon,
        description: (
            <>
                Fluent API for complex queries.
                Chain methods like <code>.withQuery().withTopK().execute()</code>.
            </>
        ),
    },
    {
        title: 'Enterprise Security',
        Icon: ShieldIcon,
        description: (
            <>
                API keys with granular permissions. Keys hashed before storage.
                Rate limiting and usage tracking included.
            </>
        ),
    },
];

function Feature({ title, Icon, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                    <Icon />
                </div>
                <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
                <p className={styles.featureDescription}>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Everything you need</h2>
                    <p className={styles.sectionSubtitle}>
                        A complete platform for building AI-powered applications with your documents.
                    </p>
                </div>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
