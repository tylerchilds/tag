import tag from 'https://thelanding.page/tag/tag.js'

import solidClientAuthentication from 'https://thelanding.page/tag/packages/solid-client-authn-browser.js'
import solidClient from 'https://thelanding.page/tag/packages/solid-client.js'
import solidVocab from 'https://thelanding.page/tag/packages/vocab-common-rdf.js'

import handleKonami from './konami-kid.js'
import launcher from '../games/launcher.js'

const session = solidClientAuthentication.getDefaultSession()

const initialState = {
  sessionInfo: {},
  profile: {},
  myDataset: {},
  name: 'Anonymous',
  href: 'https://thelanding.page'
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
  }
`)

function background() {
  const { href } = get()
  return `
    <background>
      <iframe src="${href}" style="width: 100%; height: 100%;"></iframe>
    </background>
  `
}

on('click', 'foreground a', function superlink(event) {
  const { href } = event.target
  set({ href, sprung: false })
  event.preventDefault()
})

function foreground() {
  const { sprung } = get()
  return `
    <foreground class="${sprung ? 'sprung' : ''}">
      <input input="text" />
      <a href="https://localhost/src/solid-todo.html">
        Todo App
      </a>
      <a href="https://noeldemartin.github.io/media-kraken/login">
        Media Kraken
      </a>
      <a href="https://penny.vincenttunru.com/">
        Penny
      </a>
    </foreground>
  `
}

css(`
  & foreground {
    background: white;
    inset: 0;
    opacity: 0;
    position: fixed;
    transition: opacity 200ms;
    z-index: -1;
  }

  & foreground.sprung {
    display: block;
    opacity: 1;
    z-index: 1;
  }
`)

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
        <button id="profile-button">
          ${name}
        </button>
      </profile-account>
    </profile>
  `
}

on('click', '#solid-connect', (e) => { connect(e); springbox() })
on('click', '#solid-disconnect', (e) => { disconnect(e); springbox() })
on('click', '#profile-button', springbox)

function springbox() {
  const { sprung } = get()
  set({ sprung: !sprung })
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

  & profile-account {
    display: block;
    grid-area: profile;
    font-weight: bold;
    transition: transform 200ms ease-in-out;
    transform: scale(1)
    transform-origin: center bottom;
    z-index: 1
  }

  & #profile-button {
    background: deepskyblue;
    border-radius: 4px;
    display: block;
    padding: 8px;
    width: 100%;
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

handleKonami(() => {
  const tools = `
    <developer-tools>
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
    </developer-tools>
  `

  css(`
    developer-tools {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
    }
  `)

  document.body.insertAdjacentHTML("beforeend", tools)
})
