import { todoFilter } from './todoFilter'


describe ('todoFilter', () => {
  it('initializes the filter to SHOW_ALL', () => {
    expect(
      todoFilter(undefined, {})
    ).toBe('SHOW_ALL')
  })

  it('sets the filter', () => {
    const stateBefore = 'SHOW_ALL'
    const stateAfter  = 'COMPLETED'

    const action = {
      type: 'SET_TODO_FILTER',
      filter: 'COMPLETED'
    }
    expect(
      todoFilter(stateBefore, action)
    ).toEqual(stateAfter)
  })
})
