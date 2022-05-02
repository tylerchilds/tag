import findItemById from './findItemById.js'
import updateItem from './updateItem.js'

// add a keypress event listener for updating an item
export default function onItemEdit($) {
  function editItemHandler($, event) {
    const id = event.target.dataset.editId
    const item = findItemById($, id)

    updateItem($, {
      ...item,
      editing: true,
    })
  }

  $.on(
    'dblclick',
    '[data-edit-id]',
    (event) => editItemHandler($, event)
  )
}
