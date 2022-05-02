import findItemById from './findItemById.js'
import deleteItem from './deleteItem.js'

// add a click event listener for removing an item from items state
export default function onItemDelete($) {
  function deleteItemHandler($, event) {
    const id = event.target.dataset.deleteId
    const item = findItemById($, id)

    // calls a helper function to delete this item from the items state
    deleteItem($, item)
  }

  $.on(
    'click',
    '[data-delete-id]',
    (event) => deleteItemHandler($, event)
  )
}
