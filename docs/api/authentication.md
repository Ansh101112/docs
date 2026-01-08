---
sidebar_position: 2
---

# API Authentication

API authentication reference.

## Validate API Key

Check if an API key is valid.

### Request

```bash
curl -X POST https://cloud.jabrod.com/v1/auth/validate-key \
  -H "Authorization: Bearer jb_your_api_key"
```

### Response

```json
{
  "success": true,
  "valid": true,
  "data": {
    "keyId": "uuid",
    "name": "Production Key",
    "tier": "pro",
    "expiresAt": "2025-12-31T00:00:00Z"
  }
}
```

### Error Response

```json
{
  "success": false,
  "valid": false,
  "error": {
    "code": "INVALID_API_KEY",
    "message": "Invalid or inactive API key"
  }
}
```

## Error Codes

| Code | Status | Description |
|------|--------|-------------|
| `MISSING_AUTH` | 401 | No Authorization header |
| `INVALID_TOKEN_FORMAT` | 401 | Key doesn't start with `jb_` |
| `INVALID_API_KEY` | 401 | Key not found or inactive |
| `API_KEY_EXPIRED` | 401 | Key has expired |
