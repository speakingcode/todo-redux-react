import {
  counters,
  addCounter,
  removeCounter,
  incrementCounter,
  decrementCounter
} from './counter'

describe('counters', () => {
  it('increments 0 to 1', () => {
    expect(
      counters([0], {type: 'INCREMENT', index: 0})
    ).toEqual([1])
  })

  it('increments 1 to 2', () => {
    expect(
      counters([1], {type: 'INCREMENT', index: 0})
    ).toEqual([2])
  })

  it('decrements 2 to 1', () => {
    expect(
      counters([2], {type: 'DECREMENT', index: 0})
    ).toEqual([1])
  })

  it('decrements 1 to 0', () => {
    expect(
      counters([1], {type: 'DECREMENT', index: 0})
    ).toEqual([0])
  })

  it('ignores other actions', () => {
    expect(
      counters([1], {type: 'SOMETHING_ELSE'})
    ).toEqual([1])
  })

  it('defaults to empty', () => {
    expect(
      counters(undefined, {})
    ).toEqual([])
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
