import { todoAppReducer } from './todoAppReducer.js'

describe('todoAppReducer', () => {
  it('initializes state', () => {
    const initialState = {
      todos: [],
      todoFilter: 'SHOW_ALL'
    }

    expect(
      todoAppReducer(undefined, {})
    ).toEqual(initialState)
  })
})
