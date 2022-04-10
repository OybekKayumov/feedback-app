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
  // bgColor: 'green',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  // textColor: "#fff"
  textColor: "#ff6a95",
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header

// function Header(props) {

{/* <h2>Feedback UI</h2> */}
{/* <h2>{props.text}</h2> */}
       