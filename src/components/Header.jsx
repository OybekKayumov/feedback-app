import React from 'react'

function Header(props) {
  return (
    <header>

      <div className='container'>
        {/* <h2>Feedback UI</h2> */}
        <h2>{props.text}</h2>
      </div>

    </header>

  )
}

export default Header