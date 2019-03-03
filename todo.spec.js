import { toggleTodo } from './todo'

describe ('todo', () => {
  describe('toggleTodo', () => {
    it('toggles a todo', () => {
      const todoBefore = {
        id: 0,
        text: 'Learn Redux',
        completed: false
      }

      const todoAfter = {
        id: 0.
        text: 'Learn Redux',
        completed: true
      }

      expect(
        toggleTodo(todoBefore)
      ).toEqual(todoAfter)

    })
  })
})
