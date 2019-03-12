import { todos }      from './todo'
import { todoFilter } from './todoFilter'

export const todoAppReducer = (state = {}, action) => {
  return {
    todos      : todos(state.todos, action),
    todoFilter : todoFilter(state.todoFiler, action)
  }
}
