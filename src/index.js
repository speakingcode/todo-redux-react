import React            from 'react'
import ReactDOM         from 'react-dom'

import { createStore }  from 'redux'

import { counter }      from './counter'

const store = createStore(counter)
const increment = index =>
  store.dispatch({ type: 'INCREMENT', index })
const decrement = index =>
  store.dispatch({ type: 'DECREMENT', index })
const add = () =>
  store.dispatch({ type: 'ADD'})
const remove = index =>
  store.dispatch({ type: 'REMOVE', index })

const Counter = ({
  value,
  onIncrement,
  onDecrement,
  onRemove
}) => (
  <div>
    <h1>{value}</h1>
    <div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>

    <button onClick={onRemove}>Remove</button>
  </div>
)

const render = () => {
  const counters = store.getState()
  console.log(counters)

  ReactDOM.render(
    <div>
      <div>
        <button onClick={add}>Add Counter</button>
      </div>
      {
        counters.map((counter, idx) =>
          <Counter
            value={counter}
            onIncrement = {()=> increment(idx)}
            onDecrement = {()=> decrement(idx)}
            onRemove    = {()=> remove(idx)}
          >
          </Counter>
        )
      }
    </div>,
    document.getElementById('app')
  )
}

store.subscribe(render)
render()
