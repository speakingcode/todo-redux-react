export const todos = (state = [], action) => {

  switch(action.type) {
    case 'ADD_TODO':
      return addTodo(state, {
        id: action.id,
        text: action.text
      })
    case 'TOGGLE_TODO':
      return toggleTodoById(state, action.id)
    default:
      return state
  }
}

export const addTodo = (todos, todo) => {
  return [
    ...todos,
    {
      ...todo,
      completed: false
    }
  ]
}

export const toggleTodo = (todo) => ({
  ...todo,
  completed: !todo.completed
})

export const toggleTodoById = (todos, id) => (
  todos.map(todo => todo.id === id ? toggleTodo(todo) : todo)
)
