import React from "react";

//todo: JSX
// function App() {
//   return (
//     <div className="container">
//       <h1>Hello from the app component</h1>
//       <p>My App</p>

//       <label htmlFor=""></label>
//     </div>
//   )
// }

//todo: Regular JS
function App() {
  return React.createElement('div', { className: 'container' },
         React.createElement('h1', {}, 'My App')
  )
}


export default App