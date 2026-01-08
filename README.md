cat << 'EOF' > README.md
JabRod Docs

This repository contains the official documentation for JabRod.
The docs are served at https://docs.jabrod.com and cover guides, API references,
SDK usage, examples, and architectural explanations.

Purpose
- Help developers understand and integrate JabRod
- Provide clear usage guides for APIs, SDKs, and RAG features
- Maintain up-to-date documentation alongside product changes

Repository Scope
- User guides
- API documentation
- SDK integration examples
- Tutorials and best practices

Tech Stack
- Markdown-based documentation
- Static site generator (Docusaurus / MkDocs / similar)
- Hosted under docs.jabrod.com

Local Setup (example)
1. Clone the repository
   git clone https://github.com/JabRod/docs.git
   cd docs

2. Install dependencies
   npm install

3. Run locally
   npm run start

4. Build for production
   npm run build

How to Contribute
1. Fork the repository
2. Create a new branch from main
   git checkout -b docs/short-description
3. Add or edit documentation files
4. Ensure content is clear, concise, and accurate
5. Test locally to ensure docs build correctly
6. Open a Pull Request to main with a clear description

Writing Guidelines
- Use simple and direct language
- Prefer examples over long explanations
- Keep sections small and focused
- Use consistent naming and terminology
- Ensure code examples are correct and runnable

Commit Guidelines
- Use clear commit messages
- Prefix commits with docs:
  Example: docs: add RAG setup guide

Reporting Issues
- For documentation errors, open an issue in this repository
- For product bugs, link the relevant repository or API

License
This repository follows the same license as the main JabRod project.
See LICENSE for details.
EOF
