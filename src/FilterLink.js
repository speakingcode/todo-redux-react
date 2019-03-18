import React, { Component } from 'react'

import { Link }             from './Link'

export class FilterLink extends Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const props = this.props
    const state = props.store.getState()

    return(
      <Link
        active={
          props.filter === state.todoFiler
        }
        onClick={() =>
            props.store.dispatch({
              type: 'SET_TODO_FILTER',
              filter: props.filter
            })

        }
      >
        {props.children}
      </Link>
    )
  }
}
