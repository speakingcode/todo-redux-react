import {
  counter,
  addCounter,
  removeCounter,
  incrementCounter,
  decrementCounter
} from './counter'

describe('counter', () => {
  it('increments 0 to 1', () => {
    expect(
      counter(0, {type: 'INCREMENT'})
    ).toEqual(1)
  })

  it('increments 1 to 2', () => {
    expect(
      counter(1, {type: 'INCREMENT'})
    ).toEqual(2)
  })

  it('decrements 2 to 1', () => {
    expect(
      counter(2, {type: 'DECREMENT'})
    ).toEqual(1)
  })

  it('decrements 1 to 0', () => {
    expect(
      counter(1, {type: 'DECREMENT'})
    ).toEqual(0)
  })

  it('ignores other actions', () => {
    expect(
      counter(1, {type: 'SOMETHING_ELSE'})
    ).toEqual(1)
  })

  it('defaults to 0', () => {
    expect(
      counter(undefined, {})
    ).toEqual(0)
  })
})

describe('addCounter', () => {
  it('adds a Counter', () => {
    const listBefore = []
    const listAfter = [0]

    expect(
      addCounter(listBefore)
    ).toEqual(listAfter)
  })
})

describe('removeCounter', () => {
  it('removes a Counter', () => {
    const listBefore = [0, 10, 20]
    const listAfter = [0, 20]

    expect(
      removeCounter(listBefore, 1)
    ).toEqual(listAfter)
  })
})

describe('incrementCounter', () => {
  it('increments a Counter', () => {
    const listBefore = [0, 10, 20]
    const listAfter = [0, 11, 20]

    expect(
      incrementCounter(listBefore, 1)
    ).toEqual(listAfter)
  })
})

describe('decrementCounter', () => {
  it('decrements a Counter', () => {
    const listBefore = [0, 10, 20]
    const listAfter  = [0, 9, 20]

    expect(
      decrementCounter(listBefore, 1)
    ).toEqual(listAfter)
  })
})
