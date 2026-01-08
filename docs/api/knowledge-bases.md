---
sidebar_position: 3
---

# Knowledge Bases API

Knowledge base endpoints reference.

## List Knowledge Bases

```http
GET /v1/kb
```

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "My KB",
      "description": "Description",
      "status": "active",
      "documentCount": 5,
      "vectorCount": 150,
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ]
}
```

## Create Knowledge Base

```http
POST /v1/kb
```

### Request Body

```json
{
  "name": "My Knowledge Base",
  "description": "Optional description"
}
```

### Response

```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "My Knowledge Base",
    "status": "active"
  }
}
```

## Get Knowledge Base

```http
GET /v1/kb/{id}
```

## Delete Knowledge Base

```http
DELETE /v1/kb/{id}
```

## Upload Document

```http
POST /v1/kb/{id}/documents
Content-Type: multipart/form-data
```

### Form Fields

| Field | Type | Description |
|-------|------|-------------|
| `file` | File | The document to upload |

### Response

```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "document.pdf",
    "status": "pending"
  }
}
```
