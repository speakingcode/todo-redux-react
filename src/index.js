import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'

import { counter } from './counter'

const store = createStore(counter)
const increment = () => store.dispatch({ type: 'INCREMENT' })

const render = () => {
  ReactDOM.render(
    <div>
      <div>{store.getState()}</div>
        <button onClick={increment}>+</button>
    </div>,
    document.getElementById('app')
  )
}

store.subscribe(render)
render()
