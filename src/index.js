import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'

import { counter } from './counter'

const store = createStore(counter)

console.log(store.getState())
store.dispatch({ type: 'INCREMENT' })
console.log(store.getState())
ReactDOM.render(
  <div>
    <div>ToDo</div>

  </div>,
  document.getElementById('app')
)
