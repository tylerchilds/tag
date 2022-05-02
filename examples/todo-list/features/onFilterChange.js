export default function onFilterChange($) {
  // adds a click event listener for when a filter is chosen
  // the filter state is the updated to contain the new filter
  $.on(
    'click',
    '[data-filter]',
    function chooseFilter(event) {
      const { filter } = event.target.dataset
      $.write({ filter })
    }
  )
}
