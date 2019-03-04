export const todos = (state = [], action) => {

  switch(action.type) {
    case 'ADD_TODO':
      return addTodo(state, {
        id: action.id,
        text: action.text
      })
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
