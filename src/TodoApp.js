import React            from 'react'

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
        }}

      >
        Add Todo
      </button>
      <ul>
        {visibleTodos.map(todo =>
          <li
            key={todo.id}
            onClick={() => {
              dispatch({
                type: 'TOGGLE_TODO',
                id: todo.id
              })
            }}

          style={{
            textDecoration:
              todo.completed ?
                'line-through' :
                'none'
          }}
        >
          {todo.text}
        </li>
      )}
      </ul>
      <p>
        Show:
        {' '}
      {filters.map(filter => (
        <FilterLink
          dispatch={dispatch}
          filter={filter}
        >
            {filter.slice(5)}

        </FilterLink>
      ))}
      </p>
  </div>
)
}

export default App
