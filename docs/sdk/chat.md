---
sidebar_position: 3
---

# RAG - Query & Chat

Query and chat with your knowledge bases using RAG.

## Overview

The `jabrod.rag` service provides two main operations:

- **query()** - Semantic search without LLM (returns relevant chunks)
- **chat()** - RAG with LLM response (AI-generated answer)

Both support a **fluent builder pattern** for complex queries.

---

## Query (Semantic Search)

Returns relevant document chunks without LLM processing.

### Quick Method

```typescript
const result = await jabrod.rag.query({
  kbId: 'kb_id',
  query: 'What is the return policy?',
  topK: 5
});

console.log(result.chunks);
console.log(result.latencyMs);
```

### Builder Pattern (Recommended)

```typescript
const result = await jabrod.rag
  .queryBuilder()
  .withQuery('What is the return policy?')
  .withKnowledgeBase('kb_id')
  .withTopK(5)
  .execute();
```

### Query Options

| Method | Description |
|--------|-------------|
| `.withQuery(text)` | Search query (required) |
| `.withKnowledgeBase(id)` | KB ID (required) |
| `.withTopK(n)` | Number of results (1-20, default: 5) |

---

## Chat (RAG with LLM)

Get AI-generated responses grounded in your knowledge base.

### Quick Method

```typescript
const result = await jabrod.rag.chat({
  kbId: 'kb_id',
  message: 'Summarize the key points',
  model: 'gpt-4o-mini'
});

console.log(result.message);
console.log(result.sources);
```

### Builder Pattern (Recommended)

```typescript
const result = await jabrod.rag
  .chatBuilder()
  .withMessage('Summarize the key points about refunds')
  .withKnowledgeBase('kb_id')
  .withModel('gpt-4o-mini')
  .withSystemPrompt('You are a helpful customer support agent.')
  .withTopK(5)
  .execute();

console.log(result.message);
console.log(result.usage); // Token usage
```

### Chat Options

| Method | Description |
|--------|-------------|
| `.withMessage(text)` | User message (required) |
| `.withKnowledgeBase(id)` | KB ID (required) |
| `.withModel(name)` | LLM model |
| `.withSystemPrompt(text)` | Custom system prompt |
| `.withTopK(n)` | Context chunks (1-10, default: 5) |

---

## Available Models

| Model | Description |
|-------|-------------|
| `mistralai/mistral-small-3.1-24b-instruct:free` | Free, fast |
| `meta-llama/llama-3.1-8b-instruct:free` | Free, balanced |
| `gpt-4o-mini` | Fast, affordable |
| `gpt-4o` | Most capable |

---

## Response Types

### Query Result

```typescript
interface QueryResult {
  chunks: {
    content: string;
    score: number;
    documentId: string;
  }[];
  query: string;
  latencyMs: number;
}
```

### Chat Result

```typescript
interface ChatResult {
  message: string;
  sources: {
    documentId: string;
    content: string;
    score: number;
  }[];
  model: string;
  latencyMs: number;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}
```
