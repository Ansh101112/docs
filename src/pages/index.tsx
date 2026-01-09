import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={styles.heroBanner}>
            <div className="container">
                <div className={styles.heroContent}>
                    <div className={styles.badge}>RAG as a Service</div>
                    <Heading as="h1" className={styles.heroTitle}>
                        Build AI-powered apps with<br />
                        <span className={styles.gradientText}>knowledge bases</span>
                    </Heading>
                    <p className={styles.heroSubtitle}>
                        Upload documents, query with natural language, chat with AI.
                        Simple SDK, powerful API. Start in minutes.
                    </p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx('button button--primary button--lg', styles.primaryButton)}
                            to="/quickstart">
                            Get Started
                        </Link>
                        <Link
                            className={clsx('button button--secondary button--lg', styles.secondaryButton)}
                            to="/sdk/installation">
                            View SDK Docs
                        </Link>
                    </div>
                    <div className={styles.codePreview}>
                        <code>
                            <span className={styles.comment}>// Install and start building</span><br />
                            <span className={styles.keyword}>npm</span> install jabrod
                        </code>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title="Documentation"
            description="Build AI-powered applications with knowledge bases in minutes. Upload documents, semantic search, RAG chat.">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
