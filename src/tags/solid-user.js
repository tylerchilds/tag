import tag from '../../mod.js'

import solidClientAuthentication from 'https://esm.sh/@inrupt/solid-client-authn-browser@1.11.2?bundle'
import SolidFileClient from 'https://esm.sh/solid-file-client@1.2.5?bundle'

const solidFileClient = new SolidFileClient(solidClientAuthentication);

solidFileClient.rdf.setPrefix('schemaorg', 'https://schema.org/');

const $ = tag('solid-user', {
  loading: true,
  user: null,
})

$.render(() => {
  const { user, loading } = $.read()

  if(loading) return `Loading...`

  return user
    ? `
      <button id="logout-button" type="button">Log out</button>
    `
    : `
      <button id="login-button" type="button">
        Log in with Solid
      </button>
    `
})

$.on('click', '#login-button', () => {
  const loginUrl = getLoginUrl();

  if (!loginUrl)
    return;

  performLogin(loginUrl);
})

$.on('click', '#logout-button', async () => {
  await performLogout();
})

$.ready(async () => {
  $.write({ loading: true });
  const user = await restoreSession();
  $.write({ user, loading: false });
})

async function restoreSession() {
  try {
    await solidClientAuthentication.handleIncomingRedirect({ restorePreviousSession: true });

    const session = solidClientAuthentication.getDefaultSession();

    if (!session.info.isLoggedIn)
      return false;

    return await fetchUserProfile(session.info.webId);
  } catch (error) {
    alert(error.message);

    return false;
  }
}

async function fetchUserProfile(webId) {
  const [nameQuad] = await readSolidDocument(webId, null, { foaf: 'name' });
  const [storageQuad] = await readSolidDocument(webId, null, { space: 'storage' });

  return {
    url: webId,
    name: nameQuad?.object.value || 'Anonymous',
    storageUrl: storageQuad?.object.value || await findUserStorage(webId),
  };
}

async function readSolidDocument(url, source, predicate, object, graph) {
  try {
    // solidFileClient.rdf.query returns an array of statements with matching terms.
    // (load and cache url content)
    return await solidFileClient.rdf.query(url, source, predicate, object, graph);
  } catch (error) {
    return null;
  }
}

async function findUserStorage(url) {
  url = url.replace(/#.*$/, '');
  url = url.endsWith('/') ? url + '../' : url + '/../';
  url = new URL(url);

  const response = await solidFileClient.head(url.href);

  if (response.headers.get('Link')?.includes('<http://www.w3.org/ns/pim/space#Storage>; rel="type"'))
    return url.href;

  // Fallback for providers that don't advertise storage properly.
  if (url.pathname === '/')
    return url.href;

  return findUserStorage(url.href);
}


function getLoginUrl() {
  const url = prompt('Introduce your Solid login url');

  if (!url)
    return null;

  const loginUrl = new URL(url);
  loginUrl.hash = '';
  loginUrl.pathname = '';

  return loginUrl.href;
}

function performLogin(loginUrl) {
  solidClientAuthentication.login({
    oidcIssuer: loginUrl,
    redirectUrl: window.location.href,
    clientName: 'Hello World',
  });
}

async function performLogout() {
  $.write({ user: null })
  await solidClientAuthentication.logout();
}



