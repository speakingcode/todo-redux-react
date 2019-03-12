export const todoFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch(action.type) {
    case 'SET_TODO_FILTER':
      return action.filter
    default:
      return state
  }
}
