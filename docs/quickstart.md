---
sidebar_position: 2
---

# Quick Start

Get up and running with Jabrod in 5 minutes.

## 1. Get Your API Key

First, create an API key in the [Jabrod Dashboard](https://agent.jabrod.com/user).

1. Log in to your account
2. Go to **Dashboard** > **API Keys**
3. Click **Create Key**
4. Copy your key (starts with `jb_`)

:::warning
Store your API key securely. It will only be shown once!
:::

## 2. Install the SDK

```bash
npm install jabrod
```

## 3. Initialize the Client

```typescript
import { JabrodClient } from 'jabrod';

const jabrod = new JabrodClient({
  apiKey: process.env.JABROD_API_KEY
});
```

## 4. Create a Knowledge Base

```typescript
const kb = await jabrod.kb.create({
  name: 'My Documents',
  description: 'Product documentation'
});

console.log('Created KB:', kb.id);
```

## 5. Upload Documents

```typescript
// Upload a file (browser)
const fileInput = document.querySelector('input[type="file"]');
await jabrod.kb.upload({
  kbId: kb.id,
  file: fileInput.files[0]
});

// Or upload text directly
await jabrod.kb.uploadText({
  kbId: kb.id,
  content: 'Your text content here...',
  name: 'notes.txt'
});
```

## 6. Query with RAG

### Semantic Search (without LLM)

```typescript
const result = await jabrod.rag
  .queryBuilder()
  .withQuery('What is the refund policy?')
  .withKnowledgeBase(kb.id)
  .withTopK(5)
  .execute();

console.log(result.chunks);
```

### Chat with AI (with LLM)

```typescript
const response = await jabrod.rag
  .chatBuilder()
  .withMessage('Summarize the key points')
  .withKnowledgeBase(kb.id)
  .withModel('gpt-4o-mini')
  .execute();

console.log(response.message);
console.log('Sources:', response.sources);
```

## Next Steps

- [SDK Reference](./sdk/installation) - Explore all SDK features
- [API Reference](./api/overview) - Use the REST API directly
