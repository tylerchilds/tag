import tag from 'https://thelanding.page/tag/tag.js'
import trap from 'https://thelanding.page/tag/packages/focus-trap.js'

import solidClientAuthentication from 'https://thelanding.page/tag/packages/solid-client-authn-browser.js'
import solidClient from 'https://thelanding.page/tag/packages/solid-client.js'
import solidVocab from 'https://thelanding.page/tag/packages/vocab-common-rdf.js'

import './rainbow-button.js'
import handleKonami from './konami-kid.js'

const session = solidClientAuthentication.getDefaultSession()

const initialState = {
  sessionInfo: {},
  profile: {},
  myDataset: {},
  name: 'Anonymous',
  href: 'https://thelanding.page',
  discover: 'Find anything...',
  linkFilter: '',
  links: [
    ['Media Kraken', 'https://noeldemartin.github.io/media-kraken/login'],
    ['Write.as', 'https://write.as'],
    ['Owncast', 'https://owncast.online/'],
    ['Todo List (alpha)', 'https://thelanding.page/tag/solid-todo.html'],
    ['Hello Universe', 'https://thelanding.page/tag/hello-universe.html'],
    ['Penny (developers)', 'https://penny.vincenttunru.com/'],
    ['Tag (developers)', 'https://thelanding.page/tag/'],
  ]
}

export const { html, get, on, set, css, restore } = tag('solid-user', initialState)

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

/* Rendering */

html(() => {
  return `
    ${background()}
    ${foreground()}
    ${profile()}
  `
})

css(`
  & {
    display: block;
  }
`)

on('click', 'foreground a', function superlink(event) {
  const { href } = event.target
  set({ href, sprung: false })
  event.preventDefault()
})

on('keyup', '[name="link-filter"]', function filterLinks({ target }) {
    const { value: linkFilter } = target
    set({ linkFilter })
})

function foreground() {
  const { sprung, links, linkFilter, discover } = get()
  return `
    <foreground class="${sprung ? 'sprung' : ''}">
      <card-container>
        <input name="link-filter" placeholder="${discover}" type="text" />
        ${map(links, linkFilter)}
      </card-container>
    </foreground>
  `
}

css(`
  & foreground {
    background: white;
    overflow-y: auto;
    inset: 0;
    opacity: 0;
    padding-bottom: 4rem;
    position: fixed;
    transition: opacity 200ms;
    z-index: -1;
  }

  & card-container {
    display: block;
    margin: 1rem auto;
    max-width: 32rem;
  }

  & foreground.sprung {
    display: block;
    opacity: 1;
    z-index: 1;
  }

  & foreground input {
    box-sizing: border-box;
    display: block;
    font-size: 1rem;
    padding: 1rem;
    position: sticky;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    width: calc(100% - 2rem);
  }

  & foreground a {
    display: inline-block;
    font-size: 1.5rem;
    margin: 1rem;
    padding: 0 1rem;
  }
`)

function map(links, filter) {
  return links
    .filter(algorithm(filter))
    .map(([label, href]) => `<div>
      <a href="${href}">${label}</a>
    </div>`).join('')
}

function algorithm(filter) {
  return ([label, href]) => {
    return label.indexOf(filter) > -1 || href.indexOf(filter) > -1
  }
}

function background() {
  const { href } = get()
  return `
    <background>
      <iframe src="${href}" style="width: 100%; height: 100%;"></iframe>
    </background>
  `
}

on('click', '#solid-connect', (e) => { connect(e); springbox() })
on('click', '#solid-disconnect', (e) => { disconnect(e); springbox() })
on('click', '#profile-button', springbox)

function profile() {
  const { name, sprung } = get()
  const { isLoggedIn } = get().sessionInfo

  const action = isLoggedIn
    ? `<button id="solid-disconnect">Disconnect</button>`
    : `<a id="solid-connect" href="https://broker.pod.inrupt.com/">Connect</a>`

  return `
    <profile class="${sprung ? 'sprung' : ''}">
      <profile-actions>
        ${action}
      </profile-actions>
      <profile-account>
        <rainbow-button>
          <a href="#" id="profile-button">
            ${name}
          </a>
        </rainbow-button>
      </profile-account>
    </profile>
  `
}

css(`
  & profile {
    display: grid;
    grid-template-areas: 'profile';
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    perspective: 1000px;
    transform-style: preserve-3d;
    min-width: 200px;
    z-index: 2;
  }

  & rainbow-button {
    display: block;
    width: 100%;
  }

  & rainbow-button > *{
    width: 100%;
  }

  & profile-account {
    display: block;
    grid-area: profile;
    font-weight: bold;
    transition: transform 200ms ease-in-out;
    transform: scale(1)
    transform-origin: center bottom;
    z-index: 1
  }

  & profile-actions {
    grid-area: profile;
    transition: transform 200ms ease-in-out;
    transform: translateY(0)
  }

  & .sprung profile-account {
    transform: scale(1.05)
  }

  & .sprung profile-actions {
    transform: translateY(-100%)
  }
`)

function springbox() {
  const { sprung } = get()
  set({ sprung: !sprung })
}

handleKonami(async () => {
  await import('./developer-tools.js')
  document.body.insertAdjacentHTML("beforeend", "<developer-tools><solid-user></solid-user></developer-tools>")
})

