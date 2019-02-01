import { counter } from './counter'

describe('counter', () => {
  it('should increment 0 to 1', () => {
    expect(
      counter(0, {type: 'INCREMENT'})
    ).toEqual(1)
  })

  it('should increment 1 to 2', () => {
    expect(
      counter(1, {type: 'INCREMENT'})
    ).toEqual(2)
  })

  it('should decrement 2 to 1', () => {
    expect(
      counter(2, {type: 'DECREMENT'})
    ).toEqual(1)
  })

  it('should decrement 1 to 0', () => {
    expect(
      counter(1, {type: 'DECREMENT'})
    ).toEqual(0)
  })
})
