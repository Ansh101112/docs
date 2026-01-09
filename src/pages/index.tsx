import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// Arrow icon
const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
);

function HomepageHeader() {
    return (
        <header className={styles.heroBanner}>
            <div className="container">
                <div className={styles.heroContent}>
                    <span className={styles.badge}>Modular AI Platform</span>
                    <Heading as="h1" className={styles.heroTitle}>
                        Build AI-powered apps<br />
                        <span className={styles.gradientText}>with knowledge bases</span>
                    </Heading>
                    <p className={styles.heroSubtitle}>
                        Jabrod is a modular AI platform for developers and teams building real-world AI systems.
                        Start with RAG today, scale into agents and workflows tomorrow.
                    </p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx('button button--primary button--lg', styles.primaryButton)}
                            to="/quickstart">
                            Get Started
                            <ArrowIcon />
                        </Link>
                        <Link
                            className={clsx('button button--secondary button--lg', styles.secondaryButton)}
                            to="/sdk/installation">
                            SDK Reference
                        </Link>
                    </div>
                    <div className={styles.codeBlock}>
                        <div className={styles.codeHeader}>
                            <span className={styles.dots}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <span className={styles.fileName}>terminal</span>
                        </div>
                        <pre className={styles.codeContent}>
                            <code>
                                <span className={styles.dim}>$</span> npm install jabrod
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </header>
    );
}

function PlatformSection() {
    return (
        <section className={styles.platform}>
            <div className="container">
                <div className={styles.platformContent}>
                    <span className={styles.smallBadge}>Jabrod</span>
                    <h2>One platform, infinite possibilities</h2>
                    <p className={styles.platformDesc}>
                        Start with Retrieval-Augmented Generation today, and scale into agents, workflows,
                        and model context tooling — without changing platforms.
                    </p>
                    <div className={styles.roadmapGrid}>
                        <div className={clsx(styles.roadmapCard, styles.active)}>
                            <div className={styles.roadmapStatus}>Available Now</div>
                            <h3>RAG Engine</h3>
                            <p>Knowledge bases, semantic search, and AI chat with your documents.</p>
                        </div>
                        <div className={styles.roadmapCard}>
                            <div className={styles.roadmapStatus}>Coming Soon</div>
                            <h3>AI Agents</h3>
                            <p>Autonomous agents that can reason, plan, and execute complex tasks.</p>
                        </div>
                        <div className={styles.roadmapCard}>
                            <div className={styles.roadmapStatus}>Coming Soon</div>
                            <h3>Workflows</h3>
                            <p>Visual workflow builder for chaining AI operations and automations.</p>
                        </div>
                        <div className={styles.roadmapCard}>
                            <div className={styles.roadmapStatus}>Coming Soon</div>
                            <h3>MCP Tooling</h3>
                            <p>Model Context Protocol tools for advanced AI system integration.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function QuickLinks() {
    return (
        <section className={styles.quickLinks}>
            <div className="container">
                <div className={styles.linksGrid}>
                    <Link to="https://agent.jabrod.com/user" className={styles.linkCard}>
                        <div className={styles.linkIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        </div>
                        <div className={styles.linkContent}>
                            <h3>Get API Keys</h3>
                            <p>Create and manage your API keys in the dashboard</p>
                        </div>
                        <ArrowIcon />
                    </Link>

                    <Link to="/api/overview" className={styles.linkCard}>
                        <div className={styles.linkIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                            </svg>
                        </div>
                        <div className={styles.linkContent}>
                            <h3>API Reference</h3>
                            <p>Complete REST API documentation</p>
                        </div>
                        <ArrowIcon />
                    </Link>

                    <Link to="https://jabrod.com" className={styles.linkCard}>
                        <div className={styles.linkIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                        </div>
                        <div className={styles.linkContent}>
                            <h3>About Jabrod</h3>
                            <p>Learn more about our platform</p>
                        </div>
                        <ArrowIcon />
                    </Link>
                </div>
            </div>
        </section>
    );
}

function CodeExample() {
    return (
        <section className={styles.codeExample}>
            <div className="container">
                <div className={styles.codeExampleGrid}>
                    <div className={styles.codeExampleContent}>
                        <span className={styles.smallBadge}>Developer Experience</span>
                        <h2>Simple, intuitive API</h2>
                        <p>
                            Our SDK is designed for developers. Create knowledge bases, upload documents,
                            and query with AI in just a few lines of code.
                        </p>
                        <ul className={styles.featureList}>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                                TypeScript support with full type definitions
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Builder pattern for complex queries
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Automatic error handling
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Works in Node.js and browsers
                            </li>
                        </ul>
                        <Link to="/sdk/installation" className={styles.textLink}>
                            View SDK documentation <ArrowIcon />
                        </Link>
                    </div>
                    <div className={styles.codeExampleCode}>
                        <div className={styles.codeBlock}>
                            <div className={styles.codeHeader}>
                                <span className={styles.dots}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className={styles.fileName}>example.ts</span>
                            </div>
                            <pre className={styles.codeContent}>
                                <code>{`import { JabrodClient } from 'jabrod';

const jabrod = new JabrodClient({
  apiKey: process.env.JABROD_API_KEY
});

// Create a knowledge base
const kb = await jabrod.kb.create({
  name: 'Product Docs'
});

// Upload documents
await jabrod.kb.upload({
  kbId: kb.id,
  file: document
});

// Query with RAG
const result = await jabrod.rag
  .chatBuilder()
  .withMessage('What is the refund policy?')
  .withKnowledgeBase(kb.id)
  .execute();

console.log(result.message);`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className={styles.cta}>
            <div className="container">
                <div className={styles.ctaContent}>
                    <h2>Ready to get started?</h2>
                    <p>
                        Create your API key and start building AI-powered applications in minutes.
                    </p>
                    <div className={styles.ctaButtons}>
                        <Link
                            to="https://agent.jabrod.com/user"
                            className={clsx('button button--primary button--lg', styles.primaryButton)}>
                            Get API Key
                            <ArrowIcon />
                        </Link>
                        <Link
                            to="/quickstart"
                            className={clsx('button button--secondary button--lg', styles.secondaryButton)}>
                            Read the docs
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title="Jabrod Cloud API Documentation"
            description="Build AI-powered applications with knowledge bases. Upload documents, semantic search, RAG chat. Official SDK and API reference.">
            <HomepageHeader />
            <main>
                <QuickLinks />
                <HomepageFeatures />
                <PlatformSection />
                <CodeExample />
                <CTASection />
            </main>
        </Layout>
    );
}
