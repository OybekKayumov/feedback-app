import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import FeedbackContext from './context/FeedbackContext'

// function FeedbackItem({ item, handleDelete }) {
function FeedbackItem({ item }) {
  // const handleClick = (id) => {
  //   console.log('id: ', id);
  // }

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (    
    <Card>
      <div className='num-display'>{ item.rating }</div>
      
      <button onClick={() => deleteFeedback(item.id)} className='close'><FaTimes color='purple'/></button>

      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color='purple' />
      </button>
      
      <div className='text-display'>{ item.text }</div>      
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem


{/* <div className='text-display'>id: { item.id }</div> */}
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

//
{/* <button onClick={() => console.log('clicked id: ', item.id) }  */}

//
// pass in an argument like id 
{/* <button onClick={() => handleClick(item.id)} className='close'></button> */}