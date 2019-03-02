import React            from 'react'

import Counter         from './Counter'

const App = ({store}) => {
  const increment = index =>
    store.dispatch({ type: 'INCREMENT', index })

  const decrement = index =>
    store.dispatch({ type: 'DECREMENT', index })

  const add       = () =>
    store.dispatch({ type: 'ADD'})

  const remove    = index =>
    store.dispatch({ type: 'REMOVE', index })

  return(
    <div>
      <div>
        <button onClick={add}>Add Counter</button>
      </div>
      {
        store.getState().map((counter, idx) =>
          <Counter
            value={counter}
            onIncrement = {()=> increment(idx)}
            onDecrement = {()=> decrement(idx)}
            onRemove    = {()=> remove(idx)}
          >
          </Counter>
        )
      }
    </div>
  )
}

export default App
