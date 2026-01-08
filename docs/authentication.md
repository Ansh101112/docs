---
sidebar_position: 3
---

# Authentication

Learn how to authenticate with the Jabrod API.

## API Keys

Jabrod uses API keys to authenticate requests. All API keys start with `jb_` prefix.

### Creating an API Key

1. Log in to [agent.jabrod.com](https://agent.jabrod.com)
2. Navigate to **Dashboard** > **API Keys**
3. Click **Create Key**
4. Give your key a name (e.g., "Production", "Development")
5. Choose an expiration (optional)
6. Copy and store your key securely

:::warning
Your API key is only shown once. If you lose it, you'll need to create a new one.
:::

### Using Your API Key

#### With the SDK

```typescript
import { Jabrod } from 'jabrod';

const jclient = Jabrod({
  apiKey: 'jb_your_api_key_here'
});
```

#### With the REST API

Include your API key in the `Authorization` header:

```bash
curl https://cloud.jabrod.com/v1/kb \
  -H "Authorization: Bearer jb_your_api_key_here"
```

## Security Best Practices

| Practice | Description |
|----------|-------------|
| Never expose keys in client-side code | API keys should be kept on your server |
| Use environment variables | Store keys in env vars, not in your codebase |
| Rotate keys regularly | Create new keys periodically and delete old ones |
| Use separate keys for dev/prod | Create different keys for different environments |

## Rate Limits

| Tier | Requests/min | Requests/month |
|------|--------------|----------------|
| Free | 60 | 1,000 |
| Starter | 120 | 10,000 |
| Growth | 300 | 100,000 |
| Pro | 600 | Unlimited |
