const initialTodoList = {
  filter: 'ALL',
  itemsContainerUrl: null,
  items: [
    {
      id: 'dishes',
      completed: false,
      editing: false,
      task: 'Dishes'
    },
    {
      id: 'groceries',
      completed: true,
      editing: false,
      task: 'Groceries'
    },
    {
      id: 'bills',
      completed: false,
      editing: false,
      task: 'Bills'
    }
  ],
  loading: false
}

export default initialTodoList
