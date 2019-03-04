export const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      const {id, text} = action;
      return [
        ...state,
        {
          id,
          text
        }
      ]
    default:
      return state
  }
}

export const toggleTodo = (todo) => ({
  ...todo,
  completed: !todo.completed
})
