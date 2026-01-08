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
import { Jabrod } from 'jabrod';

const jclient = Jabrod({
  apiKey: 'jb_your_api_key_here'
});
```

## Configuration Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `apiKey` | string | Yes | Your API key (starts with `jb_`) |
| `baseUrl` | string | No | Custom API URL (default: `https://cloud.jabrod.com`) |

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
import { Jabrod, JabrodError } from 'jabrod';

try {
  const response = await jclient.chat.complete({
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
