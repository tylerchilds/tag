import tag from 'https://thelanding.page/tag/tag.js'

import solidClientAuthentication from 'https://thelanding.page/tag/packages/solid-client-authn-browser.js'
import solidClient from 'https://thelanding.page/tag/packages/solid-client.js'
import solidVocab from 'https://thelanding.page/tag/packages/vocab-common-rdf.js'

import handleKonami from './konami-kid.js'
import createWindowPane from './window-pane.js'

const session = solidClientAuthentication.getDefaultSession()

const initialState = {
  sessionInfo: {},
  profile: {},
  myDataset: {},
  name: 'Anonymous'
}

export const { html, get, on, set, css } = tag('solid-user', initialState)

export function connect(event) {
  event.preventDefault()

  session.login({
    redirectUrl: window.location.href,
    oidcIssuer: 'https://broker.pod.inrupt.com/',
  });
}

export function disconnect() {
  session.logout()
  set({ ...initialState })
}

async function load() {
  const sessionInfo = await session.handleIncomingRedirect()
  const { isLoggedIn, webId } = sessionInfo

  if(isLoggedIn) {
    set({ sessionInfo })
    const profileDocumentURI = webId.split('#')[0];
    const dataset = await solidClient.getSolidDataset(profileDocumentURI, {
      fetch: solidClientAuthentication.fetch
    });

    set({ dataset })

    const profile = solidClient.getThing(dataset, webId);

    set({ profile })

    const name = solidClient.getStringNoLocale(profile, solidVocab.FOAF.name)
    set({ name })
  }
}

load()

on('click', '#solid-connect', connect)
on('click', '#solid-disconnect', disconnect)

html(() => {
  const { name } = get()
  const { isLoggedIn } = get().sessionInfo

  const action = isLoggedIn
    ? `<button id="solid-disconnect">Disconnect</button>`
    : `<a id="solid-connect" href="https://broker.pod.inrupt.com/">Connect</a>`

  return `
    ${name}
    ${action}
  `
})

css(`
  & {
    background: deepskyblue;
    border-radius: 4px;
    display: inline-block;
    font-weight: bold;
    padding: 8px;
  }

  & button {
    margin-inline-start: 10px;
  }
`)

handleKonami(() => {
  const doors = createWindowPane('5071D-44xX04', 'Solid Developer Tools', `
    <ul>
      <li>
        <a href="https://penny.vincenttunru.com/" target="_blank">
          Penny
        </a>
      </li>
      <li>
        <a href="https://forum.solidproject.org/" target="_blank">
          Solid Project Forums
        </a>
      </li>
    </ul>
  `)

  document.body.insertAdjacentHTML("beforeend", doors)
})
