import React            from 'react'
import ReactDOM         from 'react-dom'

//import { createStore }  from 'redux'
import { createStore }  from './store'


import { counters }     from './counter'
import App              from './App'


const store  = createStore(counters)

const render = () => {
  const counters = store.getState()
  console.log(counters)

  ReactDOM.render(
    <App store={store} />,
    document.getElementById('app')
  )
}

store.subscribe(render)
render()
