import React            from 'react'


let nextTodoId = 0

const App = ({todos, dispatch}) => {

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
        {todos.map(todo =>
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
    </div>
  )
}

export default App
