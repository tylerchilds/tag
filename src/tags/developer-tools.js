import tag from '../../mod.js'
import handleKonami from './konami-kid.js'

const $ = tag('developer-tools')

function once(setup) {
  const noop = () => null
  return function(target) {
    return target.mounted ? noop() : setup(target)
  }
}

$.draw(once((target) => {
  target.mounted = true
  return `
    ${target.innerHTML}
    <toolbar>
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
    </toolbar>
  `
}))

$.flair(`
  developer-tools {
    background: cornsilk;
    border: .5em solid goldenrod;
    border-radius: 4px 0 0 4px;
    box-shadow:
      0 -1px cornsilk,
      0 2px 0 2px darkgoldenrod,
      0 3px 4px rgba(0,0,0,.6),
      0 6px 10px rgba(0,0,0,.4),
      0 20px 25px rgba(0,0,0,.2),
      0 80px 100px rgba(0,0,0,.1),
      0 4px 0 darkgoldenrod inset,
      0 -1px cornsilk inset,
      0 -2px 0 darkgoldenrod inset,
      0 6px 10px rgba(0,0,0,.2) inset;
    margin: 0 auto;
    max-height: 40vh;
    max-width: 50em;
    padding: 18px;
    padding-bottom: 4em;
    overflow-y: auto;

    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
  }

  developer-tools solid-user foreground,
  developer-tools solid-user background {
    display: none;
  }
`)

handleKonami(async () => {
  const { default: start } = await import('../games/qftgu.js')
  handleKonami(start)
})
