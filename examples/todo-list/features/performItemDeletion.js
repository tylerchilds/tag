import { web } from '../../../src/tags/solid-user.js'

export default async function performItemDeletion(_$, item) {
  const documentUrl = web.getDocumentUrl(item.url);

  await web.deleteDocument(documentUrl);
}

