---
sidebar_position: 2
---

# Knowledge Bases

Manage knowledge bases with the SDK.

## List Knowledge Bases

```typescript
const kbs = await jabrod.kb.list();

kbs.forEach(kb => {
  console.log(kb.name, kb.documentCount);
});
```

## Create a Knowledge Base

```typescript
const kb = await jabrod.kb.create({
  name: 'Product Docs',
  description: 'Our product documentation'
});

console.log('Created:', kb.id);
```

## Get Knowledge Base Details

```typescript
const kb = await jabrod.kb.get('kb_id');

console.log(kb.name);
console.log(kb.status);       // 'active', 'processing', 'error'
console.log(kb.documentCount);
```

## Delete a Knowledge Base

```typescript
await jabrod.kb.delete('kb_id');
```

:::warning
Deleting a knowledge base removes all documents and cannot be undone.
:::

## Upload Documents

### Upload a File

```typescript
// Browser
const fileInput = document.querySelector('input[type="file"]');
await jabrod.kb.upload({
  kbId: kb.id,
  file: fileInput.files[0]
});
```

### Upload Text Content

```typescript
await jabrod.kb.uploadText({
  kbId: kb.id,
  content: 'Your text content here...',
  name: 'my-notes.txt'
});
```

## List Documents

```typescript
const docs = await jabrod.kb.listDocuments('kb_id');

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
