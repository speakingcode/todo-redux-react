import React from 'react'

export const FilterLink = ({
  filter,
  dispatch,
  children
}) => (
  <a
    href="#"
    onClick={
      e => {
        e.preventDefault()
        dispatch({
         type: 'SET_TODO_FILTER',
         filter
        })
      }
    }
  >
    {children}
  </a>

)

