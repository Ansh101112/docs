---
sidebar_position: 1
---

# API Overview

Jabrod REST API reference.

## Base URL

```
https://cloud.jabrod.com
```

## Authentication

All API requests require authentication via the `Authorization` header:

```
Authorization: Bearer jb_your_api_key_here
```

## Response Format

All responses follow this format:

```json
{
  "success": true,
  "data": { ... }
}
```

Error responses:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message"
  }
}
```

## Endpoints

### Health Check

```
GET /health
```

Returns API status (no auth required).

### Knowledge Bases

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v1/kb` | List knowledge bases |
| POST | `/v1/kb` | Create knowledge base |
| GET | `/v1/kb/{id}` | Get knowledge base |
| DELETE | `/v1/kb/{id}` | Delete knowledge base |
| GET | `/v1/kb/{id}/documents` | List documents |
| POST | `/v1/kb/{id}/documents` | Upload document |

### Query & Chat

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/v1/query` | Semantic search |
| POST | `/v1/chat` | RAG chat |

### Usage

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v1/usage` | Get usage stats |
