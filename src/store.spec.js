import { createStore } from './store'

describe('store', () => {
  it('creates a store', () => {
    const store = createStore(() => "")

    expect(typeof store).toBe('object')
    expect(typeof store.getState).toBe('function')
    expect(typeof store.dispatch).toBe('function')
    expect(typeof store.subscribe).toBe('function')
  })

  it('initializes state', () => {
    const store = createStore(() => "")

    expect(store.getState()).toBe("")
  })

  it('dispatches actions', () => {
    const store = createStore(
      (state = 0, action) => state + action.amount || 0
    )

    store.dispatch({amount: 4})
    expect(store.getState()).toBe(4)
  })

  it('notifies subscribers', () => {
    const store = createStore(() => "")
    let notified = false

    store.subscribe(() => {notified = true})
    store.dispatch({type: 'TEST'})
    expect(notified).toBe(true)
  })
})
