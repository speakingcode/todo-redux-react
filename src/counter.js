export const counters = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT':
      return incrementCounter(state, action.index)
    case 'DECREMENT':
      return decrementCounter(state, action.index)
    case 'REMOVE':
      return removeCounter(state, action.index)
    case 'ADD':
      return addCounter(state)
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

export const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ]
}

export const decrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] - 1,
    ...list.slice(index + 1)
  ]
}
