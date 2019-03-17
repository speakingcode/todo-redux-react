import React from 'react'

export const Todo = ({todo, dispatch}) => (
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
)
