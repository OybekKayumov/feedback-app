import { useState } from "react"
import Header from "./components/Header"
// import FeedbackItem from "./components/FeedbackItem.jsx"
import FeedbackList from "./components/FeedbackList.jsx"
import FeedbackData from "./data/FeedbackData"
// import Card from "./components/shared/Card"
import FeedbackStats from "./components/FeedbackStats"

//todo: JSX
function App() {
  const [feedback, setFeedback] = useState (FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>      
      <Header /> 
      <div className="container">
        <FeedbackStats feedback={ feedback } /> 
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App



// if true 
// if(window.confirm('Are you sure you want to delete?'))
// create new array such as 'feedback' with filter and loops through like forEach and map. But you can set a condition to filter out item that item.id is not equal to id that being passed in

// this feedback will is going to return an array minus the one we're deleting and then that's what we're setting the feedback to using set feedback
// feedback.filter((item) => item.id !== id)


// import React from "react";
//todo: Regular JS
// function App() {
//   return React.createElement('div', { className: 'container' },
//          React.createElement('h1', {}, 'My App')
//   )
// }

//

// function App() {
//   return (
//     <div className="container">
//       <h1>Hello from the app component</h1>
//       <p>My App</p>

//       <label htmlFor=""></label>
//     </div>
//   )
// }

//
// function App() {
//   const title = 'Blog Post'
//   const body = 'This is my blog post'

//   return (
//     <div className="container">
//       <h1>{title}</h1>
//       <p>{body}</p>
//       { 5 + 5 }
//       { Math.random() * (5 + 5) }
//       <h2>{title.toUpperCase()}</h2>

//     </div>
//   )
// }

//
// function App() {
//   const title = 'Blog Post'
//   const body = 'This is my blog post'
//   const comments = [
//     {id: 1, text: 'Comment One'},
//     {id: 2, text: 'Comment Two'},
//     {id: 3, text: 'Comment Three'},
//   ]

//   condition
//   const loading = false
//   const showComments = true

//   if (loading) return <h1>Loading...</h1>

//   const commentBlock = (
//     <div className="comments">
//         <h3>Comments ({ comments.length })</h3>
//         <ul>
//           { comments.map((comment, index) => (
//             <li key={index}>{comment.text}</li>
//           ))}

//         </ul>
//       </div>
//   )

//   return (
//     <div className="container">
//       <h1>{title.toUpperCase()}</h1>      
//       <p>{body}</p>

//       {/* condition: if showComments is true than output 'yes' */}
//       {/* ? --> && */}
//       {/* if showComments true than show <div> */}
//       { showComments && commentBlock }   

//     </div>
//   )
// }

//
{/* <Header text="Hello React"/> */}
{/* <Header /> */}

{/* <Header text={ true }/>  */}
{/* error in console */}

//
{/* <Header bgColor='green' textColor="#fff" />  */}