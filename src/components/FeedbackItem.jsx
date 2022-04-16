import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"

function FeedbackItem({ item }) {
  
  return (    
    <Card>
      <div className='num-display'>{ item.rating }</div>
      <button onClick={() => console.log('clicked id: ', item.id) } className='close'><FaTimes color='purple'/></button>
      <div className='text-display'>text: { item.text }</div>
      <div className='text-display'>id: { item.id }</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem


//
// function FeedbackItem() {
//   const [rating, setRating] = useState(7)
//   const [text, setText] = useState('This is an example of a feedback item')

//   const handleClick = () => {
      // rating = 10    :this is not works in react
      // setRating(10)
      // setRating(() => {
  //   setRating((prev) => {
  //     console.log('prev: ', prev);
  //     return prev + 1;
  //   })
  // }
  // return (
  //   <div className='card'>
          {/* <div className='num-display'>10</div> */}
    //   <div className='num-display'>{ rating }</div>
    //   <div className='text-display'>{ text }</div>
    //   <button onClick={handleClick}>Click</button>  
    // </div>
  // )
// }

//
  // import React from 'react'
  // import { useState } from 'react'

// function FeedbackItem({ item }) {
    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState('This is an example of a feedback item')
  
//   return (
//     <div className='card'>
//       <div className='num-display'>r:{ item.rating }</div>
//       <div className='text-display'>text: { item.text }</div>
//       <div className='text-display'>id: { item.id }</div>
//     </div>
//   )
// }

//
// <Card reverse={true}>black
    // <Card reverse={true}>
    /* white */