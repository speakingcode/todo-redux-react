import { getVisibleTodos } from './VisibleTodoList.js'

describe('getVisibleTodos()', () => {
  const todosBefore = [
    {id: 0, text: 'Test todo 1', completed: false},
    {id: 1, text: 'Test todo 2', completed: false},
    {id: 2, text: 'Test todo 3', completed: true },
  ]

  let filter

  describe('given todo filter is SHOW_ALL', () => {
    beforeAll(() => {
      filter = 'SHOW_ALL'
    })

    it('returns all todos', () => {
      expect(
        getVisibleTodos(todosBefore, filter)
      ).toEqual(todosBefore)
    })
  })

  describe('given todo filter is SHOW_COMPLETED', () => {
    beforeAll(() => {
      filter = 'SHOW_COMPLETED'
    })

    it('returns completed todos', () => {
      const filteredTodos = [
        {id: 2, text: 'Test todo 3', completed: true }
      ]

      expect(
        getVisibleTodos(todosBefore, filter)
      ).toEqual(filteredTodos)
    })
  })

  describe('given todo filter is SHOW_ACTIVE', () => {
    beforeAll(() => {
      filter = 'SHOW_ACTIVE'
    })

    it('returns active todos', () => {
      const filteredTodos = [
        {id: 0, text: 'Test todo 1', completed: false},
        {id: 1, text: 'Test todo 2', completed: false}
      ]

      expect(
        getVisibleTodos(todosBefore, filter)
      ).toEqual(filteredTodos)
    })
  })
})
