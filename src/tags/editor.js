import {
  EditorState,
  EditorView,
  basicSetup
} from "https://esm.sh/@codemirror/basic-setup"
import {
  css
} from "https://esm.sh/@codemirror/lang-css"
import {
  html
} from "https://esm.sh/@codemirror/lang-html"
import {
  javascript
} from "https://esm.sh/@codemirror/lang-javascript"
import tag
  from "https://thelanding.page/tag/tag.js"

const editors = {}

export default function createEditor(selector, flags = {}) {
  const $ = tag(selector)

  mount($, flags)
  autosave($, { every: 5 })
}

const config = {
  extensions: [
    basicSetup,
    html(),
    css(),
    javascript()
  ]
}

function mount($, flags) {
  $.mount(target => {
    $.ready(() => {
      // not ready or already initialized, quit
      if(editors[target.id]) return

      const initialState = $.read()
      const copy = initialState[target.id] || {}

      const state = EditorState.create({
        ...config,
        ...flags,
        doc: copy.value
      })

      const view = new EditorView({
				dispatch: persist(target, $, flags),
        parent: target,
        state
      }) 

      editors[target.id] = {
        $,
        state,
        view,
      }
    })
  })
}

function autosave($, { every }) {
  setInterval(() => each($, save), every * 1000)

  function save(target) {
		const currentState = $.read()
		const copy = currentState[target.id]

    // persist to some back up location
		console.log({ copy })
  }
}
function persist(target, $, flags) {
	return (transaction) => {
		if(transaction.changes.inserted.length < 0) return

		console.log({ transaction })
		const { id } = target
		const { view } = editors[id]
		const value = view.state.doc.toString()
		view.update([transaction])
		$.write({ [id]: { value }})
	}
}

function each($, save) {
  return [...document.querySelectorAll($.selector)].map(save)
}
