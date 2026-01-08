import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    icon: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Knowledge Bases',
        icon: '📚',
        description: (
            <>
                Upload documents (PDF, TXT, MD) and create searchable knowledge bases.
                Your content is chunked, embedded, and indexed automatically.
            </>
        ),
    },
    {
        title: 'Semantic Search',
        icon: '🔍',
        description: (
            <>
                Query your documents with natural language. Get relevant chunks
                with similarity scores - perfect for building search experiences.
            </>
        ),
    },
    {
        title: 'RAG Chat',
        icon: '💬',
        description: (
            <>
                Chat with your knowledge bases using state-of-the-art LLMs.
                Get AI-generated responses grounded in your content.
            </>
        ),
    },
    {
        title: 'TypeScript SDK',
        icon: '⚡',
        description: (
            <>
                Simple, type-safe SDK for Node.js and browsers.
                <code>npm install @jabrod/sdk</code> and start building.
            </>
        ),
    },
    {
        title: 'API First',
        icon: '🔗',
        description: (
            <>
                RESTful API with OpenAPI spec. Use with any language or tool.
                Comprehensive documentation and examples included.
            </>
        ),
    },
    {
        title: 'Secure by Default',
        icon: '🔐',
        description: (
            <>
                API keys with granular permissions. Keys are hashed before storage.
                Rate limiting and usage tracking built-in.
            </>
        ),
    },
];

function Feature({ title, icon, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className={styles.featureCard}>
                <div className={styles.featureIcon}>{icon}</div>
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
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
