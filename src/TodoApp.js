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

const App = ({todos, todoFilter, store}) =>
    <div>
      <AddTodo
        onAddClick={text => {
          store.dispatch({
            type: 'ADD_TODO',
            text,
            id: nextTodoId++
          })
        }}
      />

      <TodoList
        todos={
          getVisibleTodos(
            todos,
            todoFilter
          )
        }

        onTodoClick={id => {
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }}
      />

        <Footer
          store={store}
      />
    </div>

export default App
