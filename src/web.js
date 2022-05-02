import solidClientAuthentication from 'https://esm.sh/@inrupt/solid-client-authn-browser@1.11.2?bundle'
import SolidFileClient from 'https://esm.sh/solid-file-client@1.2.5?bundle'

export default {
  readDocument,
  createDocument,
  updateDocument,
  deleteDocument,
  createContainer,
  getDocumentUrl,
  escapeText
}

const solidFileClient = new SolidFileClient(solidClientAuthentication);
solidFileClient.rdf.setPrefix('schemaorg', 'https://schema.org/');

async function readDocument(url, source, predicate, object, graph) {
  try {
    // solidFileClient.rdf.query returns an array of statements with matching terms.
    // (load and cache url content)
    return await solidFileClient.rdf.query(url, source, predicate, object, graph);
  } catch (error) {
    console.error(error)
    return null;
  }
}

async function createDocument(url, contents) {
  const response = await solidFileClient.post(url, {
    headers: { 'Content-Type': 'text/turtle' },
    body: contents,
  });

  if (!isSuccessfulStatusCode(response.status))
    throw new Error(`Failed creating document at ${url}, returned status ${response.status}`);

  const location = response.headers.get('Location');

  return new URL(location, url).href;
}

async function updateDocument(url, update) {
  const response = await solidFileClient.patchFile(url, update, 'application/sparql-update');

  if (!isSuccessfulStatusCode(response.status))
    throw new Error(`Failed updating document at ${url}, returned status ${response.status}`);
}

async function deleteDocument(url) {
  const response = await solidFileClient.deleteFile(url);

  if (!isSuccessfulStatusCode(response.status))
    throw new Error(`Failed deleting document at ${url}, returned status ${response.status}`);
}

async function createContainer(url) {
  const response = await solidFileClient.createFolder(url);

  if (!isSuccessfulStatusCode(response.status))
    throw new Error(`Failed creating container at ${url}, returned status ${response.status}`);

  return url;
}

function isSuccessfulStatusCode(statusCode) {
  return Math.floor(statusCode / 100) === 2;
}

function getDocumentUrl(resourceUrl) {
  const url = new URL(resourceUrl);

  url.hash = '';

  return url.href;
}

function escapeText(text) {
  return text.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}

