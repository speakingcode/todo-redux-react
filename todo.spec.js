import {
  todos,
  toggleTodo
} from './todo'

describe ('todo', () => {
  describe('toggleTodo', () => {
    it('toggles a todo', () => {
      const todoBefore = {
        id: 0,
        text: 'Learn Redux',
        completed: false
      }

      const todoAfter = {
        id: 0,
        text: 'Learn Redux',
        completed: true
      }

      expect(
        toggleTodo(todoBefore)
      ).toEqual(todoAfter)

    })
  })

  describe('todos', () => {
    it('adds a todo', () => {
      const stateBefore = []
      const stateAfter  = [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false
        }
      ]

      const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
      }

      expect(
        todos(stateBefore, action)
      ).toEqual(stateAfter)
    })
  })
})
