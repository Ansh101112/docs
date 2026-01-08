---
sidebar_position: 4
---

# Usage

Track your API usage.

## Get Usage Statistics

```typescript
const usage = await jclient.usage.get();

console.log('Period:', usage.period.start, '-', usage.period.end);
console.log('Queries:', usage.queries);
console.log('Chats:', usage.chats);
console.log('Tokens:', usage.tokensUsed);
console.log('Storage:', usage.storageUsedBytes);
```

## Usage Response

```typescript
interface UsageStats {
  period: {
    start: string;  // ISO date
    end: string;    // ISO date
  };
  queries: number;
  chats: number;
  documentsProcessed: number;
  tokensUsed: number;
  storageUsedBytes: number;
  tier: string;
  limits: {
    queriesPerMonth: number;   // -1 = unlimited
    chatsPerMonth: number;     // -1 = unlimited
    storageBytes: number;      // -1 = unlimited
  };
}
```

## Tier Limits

| Tier | Queries/mo | Chats/mo | Storage |
|------|------------|----------|---------|
| Free | 1,000 | 500 | 100 MB |
| Starter | 10,000 | 5,000 | 1 GB |
| Growth | 100,000 | 50,000 | 10 GB |
| Pro | Unlimited | Unlimited | 100 GB |
