---
sidebar_position: 3
---

# Chat & Query

Query and chat with your knowledge bases.

## Overview

There are two ways to interact with your knowledge bases:

- **Query** - Semantic search that returns relevant document chunks
- **Chat** - AI-generated responses based on your content (RAG)

## Query (Semantic Search)

Returns relevant chunks from your documents without LLM processing.

```typescript
const results = await jclient.chat.query({
  kbId: 'kb-id',
  query: 'What is the return policy?',
  topK: 5  // Number of results (default: 5, max: 20)
});

console.log(results.chunks);
console.log(results.latencyMs);
```

### Query Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `kbId` | string | Yes | Knowledge base ID |
| `query` | string | Yes | Search query |
| `topK` | number | No | Number of results (1-20, default: 5) |

## Chat (RAG)

Get AI-generated responses based on your knowledge base content.

```typescript
const response = await jclient.chat.complete({
  kbId: 'kb-id',
  message: 'Summarize the key points about refunds',
  model: 'mistralai/mistral-small-3.1-24b-instruct:free',
  systemPrompt: 'You are a helpful customer support agent.',
  topK: 5
});

console.log(response.message);
console.log(response.sources);
console.log(response.usage);
```

### Chat Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `kbId` | string | Yes | Knowledge base ID |
| `message` | string | Yes | User message |
| `model` | string | No | LLM model to use |
| `systemPrompt` | string | No | Custom system prompt |
| `topK` | number | No | Context chunks (1-10, default: 5) |

## Available Models

| Model | Description |
|-------|-------------|
| `mistralai/mistral-small-3.1-24b-instruct:free` | Free, fast responses |
| `meta-llama/llama-3.1-8b-instruct:free` | Free, balanced |
| `gpt-4o-mini` | Fast, affordable |
| `gpt-4o` | Most capable |
