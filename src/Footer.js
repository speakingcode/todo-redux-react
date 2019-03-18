import React            from 'react'

import { FilterLink }   from './FilterLink'

const filters = [
  'SHOW_ALL',
  'SHOW_ACTIVE',
  'SHOW_COMPLETED'
]

export const Footer = ({
  todoFilter,
  onFilterClick
}) =>
      <p>
        Show:
        {' '}
      {filters.map(filter => (
        <FilterLink
          filter        ={filter}
          onClick       ={onFilterClick}
          currentFilter ={todoFilter}
        >
            {
              //trim 'SHOW_'
            }
            {filter.slice(5)}
        </FilterLink>
      ))}
      </p>
