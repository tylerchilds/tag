import { web } from '../../../mod.js'

export default async function performItemDeletion($, flags) {
  const documentUrl = web.getDocumentUrl(flags.url);

  await web.deleteDocument(documentUrl);
}

