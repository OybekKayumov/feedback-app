import React from 'react'

// props ({...})
function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      { children }
    </button>
  )
}

export default Button