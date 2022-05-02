import { web } from '../../../mod.js'

export default async function performItemUpdation($, flags) {
  const itemsContainerUrl = $.read()

  const documentUrl = web.getDocumentUrl(itemsContainerUrl);

  await web.updateDocument(documentUrl, `
    DELETE DATA {
      <#it>
        <https://schema.org/actionStatus>
        <https://schema.org/${flags.done ? 'PotentialActionStatus' : 'CompletedActionStatus'}> .
    } ;
    INSERT DATA {
      <#it>
        <https://schema.org/actionStatus>
        <https://schema.org/${flags.done ? 'CompletedActionStatus' : 'PotentialActionStatus'}> .
    }
  `);
}
