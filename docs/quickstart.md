---
sidebar_position: 2
---

# Quick Start

Get up and running with Jabrod in 5 minutes.

## 1. Get Your API Key

First, create an API key in the [Jabrod Dashboard](https://agent.jabrod.com/dashboard).

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

## 3. Create a Knowledge Base

```typescript
import { Jabrod } from 'jabrod';

const jclient = Jabrod({ apiKey: 'jb_your_key_here' });

// Create a knowledge base
const kb = await jclient.kb.create({
  name: 'My Documents',
  description: 'Product documentation'
});

console.log('Created KB:', kb.id);
```

## 4. Upload Documents

```typescript
// Browser: Upload from file input
const fileInput = document.querySelector('input[type="file"]');
const file = fileInput.files[0];

await jclient.kb.uploadFile({
  kbId: kb.id,
  file: file
});

// Or upload text directly
await jclient.kb.uploadText({
  kbId: kb.id,
  content: 'Your text content here...',
  name: 'notes.txt'
});
```

## 5. Chat with Your Documents

```typescript
const response = await jclient.chat.complete({
  kbId: kb.id,
  message: 'What are the key points in my documents?'
});

console.log(response.message);
console.log('Sources:', response.sources);
```

## Next Steps

- [SDK Reference](./sdk/installation) - Explore all SDK features
- [API Reference](./api/overview) - Use the REST API directly
