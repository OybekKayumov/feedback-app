import React from 'react'
import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    // backgroundColor: 'blue',
    backgroundColor: bgColor,
    // color: 'orange',
    color: textColor,
  }

  return (
    <header style={ headerStyles }>

      <div className='container'>
        <h2>{text}</h2>
      </div>

    </header>

  )
}

Header.defaultProps = {
  text: 'FeedBack UI',
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Header

// function Header(props) {

{/* <h2>Feedback UI</h2> */}
{/* <h2>{props.text}</h2> */}
       