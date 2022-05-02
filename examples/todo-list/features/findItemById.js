// a helper function to locate an item by an id
export default function findItemById($, id) {
  const { items } = $.read()
  return items.find(x => x.url === id)
}
