export const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export const addCounter = (list) => {
  return [...list, 0]
}

export const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index+1)
  ]
}
