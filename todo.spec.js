import {
  todos,
  addTodo,
  toggleTodo,
  toggleTodoById
} from './todo'

describe ('todo', () => {
  describe('addTodo()', () => {
    it('adds a todo', () => {
      const todosBefore = []
      const todosAfter = [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false
        }
      ]

      expect(
        addTodo(todosBefore, {id: 0, text: 'Learn Redux'})
      ).toEqual(todosAfter)
    })
  })

  describe('toggleTodoById()', () => {
    it('toggles a todo with matching id', () => {
      const todosBefore = [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false
        },
        {
          id: 1,
          text: 'Go Shopping',
          completed: false
        },
      ]

      const todosAfter = [
        {
          id: 0,
          text: 'Learn Redux',
          completed: true
        },
        {
          id: 1,
          text: 'Go Shopping',
          completed: false
        },
      ]

      expect(
        toggleTodoById(todosBefore, 0)
      ).toEqual(todosAfter)

      expect(
        toggleTodoById(todosAfter, 0)
      ).toEqual(todosBefore)
    })
  })

  describe('toggleTodo()', () => {
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

      expect(
        toggleTodo(todoAfter)
      ).toEqual(todoBefore)
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

    it('toggles a todo', () => {
      const stateBefore  = [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false
        }
      ]

      const stateAfter  = [
        {
          id: 0,
          text: 'Learn Redux',
          completed: true
        }
      ]

      const action = {
        type: 'TOGGLE_TODO',
        id: 0
      }

      expect(
        todos(stateBefore, action)
      ).toEqual(stateAfter)
    })
  })
})
