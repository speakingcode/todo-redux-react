import React from 'react'

export const Link = ({
  active,
  onClick,
  children
}) => (
  active
  ? <span>{children}</span>
  :
  <a
    href="#"
    onClick={
      e => {
        e.preventDefault()
        onClick()
      }
    }
  >
    {children}
  </a>

)

