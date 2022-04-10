import React from 'react'

// function Header(props) {
function Header({ text }) {
  return (
    <header>

      <div className='container'>
        {/* <h2>Feedback UI</h2> */}
        {/* <h2>{props.text}</h2> */}
        <h2>{text}</h2>
      </div>

    </header>

  )
}

export default Header