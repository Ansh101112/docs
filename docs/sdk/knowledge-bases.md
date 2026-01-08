---
sidebar_position: 2
---

# Knowledge Bases

Manage knowledge bases with the SDK.

## List Knowledge Bases

```typescript
const kbs = await jclient.kb.list();

kbs.forEach(kb => {
  console.log(kb.name, kb.documentCount);
});
```

## Create a Knowledge Base

```typescript
const kb = await jclient.kb.create({
  name: 'Product Docs',
  description: 'Our product documentation'
});

console.log('Created:', kb.id);
```

## Get Knowledge Base Details

```typescript
const kb = await jclient.kb.get('kb-id');

console.log(kb.name);
console.log(kb.status);       // 'active', 'processing', 'error'
console.log(kb.documentCount);
```

## Delete a Knowledge Base

```typescript
await jclient.kb.delete('kb-id');
```

:::warning
Deleting a knowledge base removes all documents and cannot be undone.
:::

## Upload Documents

### Upload a File (Browser)

```typescript
const fileInput = document.querySelector('input[type="file"]');
const file = fileInput.files[0];

const doc = await jclient.kb.uploadFile({
  kbId: kb.id,
  file: file
});
```

### Upload Text Content

```typescript
const doc = await jclient.kb.uploadText({
  kbId: kb.id,
  content: 'Your text content here...',
  name: 'my-notes.txt'
});
```

## List Documents

```typescript
const docs = await jclient.kb.listDocuments('kb-id');

docs.forEach(doc => {
  console.log(doc.name, doc.status, doc.chunkCount);
});
```

## Document Status

| Status | Description |
|--------|-------------|
| `pending` | Document uploaded, waiting to be processed |
| `processing` | Document is being chunked and embedded |
| `completed` | Document is ready for queries |
| `failed` | Processing failed (check `errorMessage`) |

## Supported File Types

| Type | Extensions |
|------|------------|
| Text | `.txt`, `.md` |
| PDF | `.pdf` |
| Word | `.doc`, `.docx` |
| Web | `.html` |
