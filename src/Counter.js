import React            from 'react'

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

export default Counter
