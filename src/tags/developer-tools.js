import tag from 'https://thelanding.page/tag/tag.js'
import handleKonami from './konami-kid.js'

const { html, css } = tag('developer-tools')

html(() => `
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

css(`
  developer-tools {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
`)

handleKonami(async () => {
  const { default: start } = await import('../games/qftgu.js')
  handleKonami(start)
})
