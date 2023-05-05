import * as dependencies from './deps.js'
import router from './src/system/controller.js'
import module from '../system/module.js'

console.log.apply(null, [
  'cached dependencies:',
  ...Object.keys(dependencies)
])



const $ = module('system-emulator', {
  rootActive: false,
	stickies: getStickies(),
	activeEmbed: `
		<iframe src="/music-verse/"></iframe>
	`,
})

$.draw((target) => {
	const { stickies, activeEmbed, rootActive } = $.learn()
	const filtered = Object
		.keys(stickies)
		.map(key => stickies[key])
		.filter(thinking)

	const list = filtered
		.map(about => `
      <div class="list-item">
        <button class="launch" data-key="${about.key}">
          ${about.title}
        </button>
      </div>
		`)
		.join('')

	const rootClass = rootActive ? 'active' : ''

	return `
		<div class="${rootClass}">
			<div class="root">
				${list}
			</div>
      <button aria-label="Switcher" class="switcher"></button>
			<div class="leaf">
				${activeEmbed}
			</div>
		</div>
	`
})

function switcher({ target }) {
  const rootActive = !$.learn().rootActive
  const root = target.closest($.link)
  $.teach({ rootActive })
}

function thinking(about) {
	return about ? true : false
}

function getStickies() {
	return {
		'0': {
			key: '0',
			title: 'Authentication',
			embed: `
				<iframe src="/authentication/"></iframe>
			`,
		},
		'1': {
			key: '1',
			title: 'Devices',
			embed: `
				<iframe src="/devices/"></iframe>
			`,
		},
		'2': {
			key: '2',
			title: 'Synthia',
			embed: `
				<iframe src="/synthia/"></iframe>
			`,
		},
		'3': {
			key: '3',
			title: 'Slides',
			embed: `
				<iframe src="https://sillyz.computer/pages/slides/2022-js"></iframe>
			`,
		},
		'4': {
			key: '4',
			title: 'view script',
			embed: `
				<iframe src="/view/hello.script"></iframe>
			`,
		},
    '5': {
			key: '5',
			title: 'edit script',
			embed: `
				<iframe src="/edit/hello.script"></iframe>
			`,
		},
		'6': {
			key: '6',
			title: 'MusicVerse',
			embed: `
				<iframe src="/music-verse/"></iframe>
			`,
		},
    '7': {
			key: '7',
			title: 'Video Reddit',
			embed: `
				<iframe src="/video-reddit/"></iframe>
			`,
		},
    '8': {
			key: '8',
			title: 'Social Media',
			embed: `
				<iframe src="/social-media/"></iframe>
			`,
		},


	}
}

$.when('click', 'button.switcher', switcher)

$.when('click', 'button[data-key]', (event) => {
	const { key } = event.target.dataset
	const { embed } = $.learn().stickies[key]
	$.teach({
		activeEmbed: embed,
		rootActive: false
	})
})

$.flair(`
	& .root {
    display: none;
    background: white;
		position: fixed;
		inset: 0;
    padding: 2rem 0 1rem;
		overflow: auto;
	}

	& .root::before {
		content: '';
		border-left: 1px solid red;
		position: fixed;
		left: 1rem;
		top: 0;
		bottom: 0;
	}

	& .list-item {
		padding-left: 1rem;
		border-bottom: 1px solid cyan;
	}

  & .switcher {
    display: block;
    position: fixed;
    height: 2rem;
    background: orange;
    left: 0;
    right: 0;
    z-index: 10;
    border: 0;
    bottom: 0;
    width: 100%;
  }

  & .active .switcher {
    bottom: auto;
    top: 0;
  }

	& .leaf {
		background: white;
		position: fixed;
		inset: 0 0 2rem 0;
		transform: translateY(0);
		transition: transform 200ms ease-in-out;
	}

	& .leaf iframe {
		border: 0;
		width: 100%;
		height: 100%;
	}

	& .active .root {
    display: block;
  }

	& .active .leaf {
    display: none;
		transform: translateY(-100%);
	}

  & .launch {
    background: transparent;
    border: 0;
    text-decoration: underline;
    color: blue;
    padding: .5rem;
    margin: .5rem;
  }
`)

window.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		//if esc key was not pressed in combination with ctrl or alt or shift
		const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey);
		if (isNotCombinedKey) {
      document.querySelector(`${$.link} .switcher`).click()
		}
	}
});




router(window.location.pathname)

if(true) {
  safeTauri.window.appWindow.show()
}
