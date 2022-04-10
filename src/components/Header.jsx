import React from 'react'
import PropTypes from 'prop-types'

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

Header.defaultProps = {
  text: 'FeedBack UI',
}

export default Header