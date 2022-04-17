import React from 'react'

// props ({...})
function Button({ children, version, type, isDisabled }) {
  return (
    <button >
      { children }
    </button>
  )
}

export default Button