import React            from 'react'

import { AddTodo  }     from './AddTodo'
import { TodoList }     from './TodoList'
import { Footer   }     from './Footer'

let nextTodoId = 0

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

  return(
    <div>
      <AddTodo
        onAddClick={text => {
          dispatch({
            type: 'ADD_TODO',
            text,
            id: nextTodoId++
          })
        }}
      />

      <TodoList
        todos       ={visibleTodos}
        onTodoClick ={id => {
          dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }}
      />

      <Footer
        onFilterClick={filter => {
          dispatch({
           type: 'SET_TODO_FILTER',
           filter
          })
        }}
      />
    </div>
  )
}

export default App
