import React from 'react'
import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from './context/FeedbackContext'
import Spinner from './shared/Spinner'

// function FeedbackList({feedback, handleDelete}) {
// function FeedbackList({ handleDelete}) {
function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext)

  // how to read: if it's not loading and there's no feedback or length is zero, then show "No Feedback Yet"
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>
  }

  // return isLoading ? ( <h3>Loading...</h3> ) : 
  return isLoading ? ( <Spinner /> ) : 
    (
      <div className='feedback-list'>
      <AnimatePresence/>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit= {{ opacity: 0 }}
          >
            <FeedbackItem 
              key={item.id} 
              item={item} 
              // handleDelete={handleDelete}            
            />
          </motion.div>    
        ))}
      <AnimatePresence/>
      </div>
    )

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
        
  //       <FeedbackItem 
  //         key={item.id} 
  //         item={item} 
  //         handleDelete={handleDelete}/>
  //     ))}

  //   </div>
  // )
}

// FeedbackList.propTypes = {
//   // feedback: PropTypes.array
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     text: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//     })
//   ),  
// }

export default FeedbackList

//
// handleDelete={(id) => console.log(id)}/>

// console.log('feedback: ', feedback);

{/* <div>{item.rating}</div> */}