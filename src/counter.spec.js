import { counter } from './counter'

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
