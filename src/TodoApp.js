import React            from 'react'

import { Todo }         from './Todo'
import { FilterLink }   from './FilterLink'

let nextTodoId = 0

const filters = [
  'SHOW_ALL',
  'SHOW_ACTIVE',
  'SHOW_COMPLETED'
]

export const getVisibleTodos = (
  todos,
  filter
) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}
const App = ({todos, todoFilter, dispatch}) => {

  let visibleTodos = getVisibleTodos(todos, todoFilter)
  let input

  return(
    <div>
      <input ref={node => {
        input = node
      }} />
      <button
        onClick={() => {
          dispatch({
            type: 'ADD_TODO',
            text: input.value,
            id: nextTodoId++
          })
          input.value = ''
        }}

      >
        Add Todo
      </button>
      <ul>
        {visibleTodos.map(todo =>
          <Todo todo={todo} dispatch={dispatch} />
        )}
      </ul>
      <p>
        Show:
        {' '}
      {filters.map(filter => (
        <FilterLink
          dispatch      ={dispatch}
          filter        ={filter}
          currentFilter ={todoFilter}
        >
            {
              //trim 'SHOW_'
            }
            {filter.slice(5)}
        </FilterLink>
      ))}
      </p>
    </div>
  )
}

export default App
