import { todos }      from './todo'
import { todoFilter } from './todoFilter'

import { combineReducers } from './combineReducers'

export const todoAppReducer = combineReducers({
  todos,
  todoFilter
})
//export const todoAppReducer = (state = {}, action) => {
//  return {
//    todos      : todos(state.todos, action),
//    todoFilter : todoFilter(state.todoFiler, action)
//  }
//}
