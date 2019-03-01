import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'

import { counter } from './counter'

const store = createStore(counter)
const increment = () => store.dispatch({ type: 'INCREMENT' })
const decrement = () => store.dispatch({ type: 'DECREMENT' })

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const render = () => {
  ReactDOM.render(
    <div>
      <Counter
        value={store.getState()}
        onIncrement={increment}
        onDecrement={decrement}
      >
      </Counter>
    </div>,
    document.getElementById('app')
  )
}

store.subscribe(render)
render()
