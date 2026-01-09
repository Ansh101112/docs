---
sidebar_position: 1
---

# Installation

Install the Jabrod SDK for TypeScript/JavaScript.

## Requirements

- Node.js 18+
- TypeScript 4.7+ (optional but recommended)

## Installation

```bash npm2yarn
npm install jabrod
```

## Basic Setup

```typescript
import { JabrodClient } from 'jabrod';

const jabrod = new JabrodClient({
  apiKey: process.env.JABROD_API_KEY
});
```

## Configuration Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `apiKey` | string | Yes | Your API key (starts with `jb_`) |
| `baseUrl` | string | No | Custom API URL (default: `https://cloud.jabrod.com`) |

## SDK Structure

The SDK follows a **service-based architecture**:

```typescript
jabrod.kb       // Knowledge Base operations
jabrod.rag      // RAG operations (query & chat)
jabrod.usage    // Usage statistics
```

## TypeScript

The SDK includes full TypeScript support with exported types:

```typescript
import type {
  KnowledgeBase,
  Document,
  ChatResult,
  QueryResult,
  UsageStats
} from 'jabrod';
```

## Error Handling

```typescript
import { JabrodClient, JabrodError } from 'jabrod';

try {
  const result = await jabrod.rag.chat({
    kbId: 'kb-id',
    message: 'Hello'
  });
} catch (error) {
  if (error instanceof JabrodError) {
    console.log(error.code);    // Error code
    console.log(error.message); // Human-readable message
    console.log(error.status);  // HTTP status code
  }
}
```

## Common Error Codes

| Code | Description |
|------|-------------|
| `INVALID_API_KEY` | The API key is invalid or expired |
| `NOT_FOUND` | Resource not found |
| `VALIDATION_ERROR` | Invalid request parameters |
| `RATE_LIMIT_EXCEEDED` | Too many requests |
