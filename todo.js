export const todos = (state = [], action) => {

  switch(action.type) {
    case 'ADD_TODO':
      return addTodo(
        state,
        todo(undefined, action)
      )
    case 'TOGGLE_TODO':
      return updateTodos(
        state,
        _todo => todo(_todo, action)
      )
    default:
      return state
  }
}

const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      return toggleTodoById(state, action.id)
    default:
      return state
  }
}

export const addTodo = (todos, todo) => {
  return [
    ...todos,
    todo
  ]
}

export const updateTodos = (todos, update ) => (
  todos.map(todo => update(todo))
)

export const toggleTodo = (todo) => ({
  ...todo,
  completed: !todo.completed
})

export const toggleTodoById = (todo, id) => (
  todo.id === id ? toggleTodo(todo) : todo
)
