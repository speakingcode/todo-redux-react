export const AddTodo = () => {
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
          input.value = ''
        }}

      >
        Add Todo
      </button>
    </div>
  )
}
