import Header from "./components/Header"

//todo: JSX
function App() {

  return (
    <>      
      <Header /> 
      <div className="container">
        <h1>My App</h1>      
      </div>
    </>
  )
}

export default App

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