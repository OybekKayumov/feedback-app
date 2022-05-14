import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This feedback item 1 is from context ',
      rating: 10
    },
    {
      id: 2,
      text: 'This feedback item 2 is from context ',
      rating: 9
    },
    {
      id: 3,
      text: 'This feedback item 3 is from context ',
      rating: 7
    }
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // Add feedback, comes from APP.js feedbackContext vN32
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()   
    setFeedback([newFeedback, ...feedback]);
  }

  // Delete Feedback, comes from APP.js feedbackContext vN32
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Update Feedback Item 
  const updateFeedback = (id, updItem) => {
    // console.log('id, updItem: ', id, updItem);
    setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item ))
  } 

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return ( 
    <FeedbackContext.Provider 
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext;