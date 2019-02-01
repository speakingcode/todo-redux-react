import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'

import { counter } from './counter'

const store = createStore(counter)
const increment = () => store.dispatch({ type: 'INCREMENT' })
const decrement = () => store.dispatch({ type: 'DECRENEBT' })

const Counter = ({ value }) => (
  <h1>{value}</h1>
)

const render = () => {
  ReactDOM.render(
    <div>
      <Counter value={store.getState()}></Counter>
      <button onClick={increment}>+</button>
    </div>,
    document.getElementById('app')
  )
}

store.subscribe(render)
render()
