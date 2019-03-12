import { combineReducers } from './combineReducers'

describe('combineReducers', () => {

  const index = (state = {}, action) => (
    state
  )

  const items = (state = [], action) => (
    state
  )

  const combinedReducer = (state = {}, action) => ({
    index: index(state.index, action),
    items: items(state.items, action)
  })

  it('combines reducers with slices of state', () => {

    expect(
      combineReducers({index, items})(undefined, {})
    ).toEqual(
      combinedReducer(undefined, {})
    )

    expect(
      combineReducers({index, items})(undefined, {})
    ).toEqual(
      {
        index: {},
        items: []
      }
    )
  })
})
