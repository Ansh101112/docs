---
sidebar_position: 4
---

# Chat & Query API

Chat and query endpoints reference.

## Query (Semantic Search)

```http
POST /v1/query
```

### Request Body

```json
{
  "kbId": "knowledge-base-uuid",
  "query": "What is the return policy?",
  "topK": 5
}
```

### Response

```json
{
  "success": true,
  "data": {
    "chunks": [
      {
        "content": "Our return policy allows...",
        "score": 0.95,
        "documentId": "doc-uuid"
      }
    ],
    "query": "What is the return policy?",
    "latencyMs": 123
  }
}
```

## Chat (RAG)

```http
POST /v1/chat
```

### Request Body

```json
{
  "kbId": "knowledge-base-uuid",
  "message": "Summarize the return policy",
  "model": "mistralai/mistral-small-3.1-24b-instruct:free",
  "systemPrompt": "You are a helpful assistant.",
  "topK": 5
}
```

### Response

```json
{
  "success": true,
  "data": {
    "message": "Based on the documents, the return policy...",
    "sources": [
      {
        "documentId": "doc-uuid",
        "content": "Excerpt...",
        "score": 0.95
      }
    ],
    "model": "mistralai/mistral-small-3.1-24b-instruct:free",
    "latencyMs": 456,
    "usage": {
      "promptTokens": 150,
      "completionTokens": 200,
      "totalTokens": 350
    }
  }
}
```
