import React from 'react'

export const FilterLink = ({
  filter,
  currentFilter,
  dispatch,
  children
}) => (
  filter === currentFilter
  ? <span>{children}</span>
  :
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

