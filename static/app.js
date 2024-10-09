import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { exampleSetup } from 'prosemirror-example-setup'

import { schema } from './schema.js'

const docJson = await fetch('./doc.json').then((res) => res.json())

const state = EditorState.create({
  schema,
  plugins: exampleSetup({ schema }),
})
const view = new EditorView(document.querySelector('#editor'), {
  state,
})

const reset = (view) => {
  const { dispatch, state } = view
  const { tr } = state
  const doc = state.schema.nodeFromJSON(docJson)
  tr.replaceWith(0, state.doc.nodeSize - 2, doc)
  dispatch(tr)
}

document.querySelector('#reset-btn')?.addEventListener('click', () => {
  reset(view)
})
