import React              from 'react'
import ReactDOM           from 'react-dom'

//import { createStore }  from 'redux'
import { createStore }    from './store'


import { todoAppReducer } from './todoAppReducer'
import TodoApp            from './TodoApp'


const store  = createStore(todoAppReducer)

const render = () => {
  const todos = store.getState()
  console.log(todos)

  ReactDOM.render(
    <TodoApp
      store={store}
      {...store.getState()}
    />,
    document.getElementById('app')
  )
}

store.subscribe(render)
render()
