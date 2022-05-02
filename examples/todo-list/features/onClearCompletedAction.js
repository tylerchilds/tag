// adds a click event listener for when the clear completed action is performed
// the items state is then updated to contain only incomplete items
export default function onClearCompletedAction($) {
  $.on(
    'click',
    '[data-clear-completed]',
    function clearCompleted() {
      const { items } = $.read()
      const onlyIncompleteItems = items.filter(x =>
        !x.completed
      )
      $.write({ items: onlyIncompleteItems })
    }
  )
}
