import React, { StrictMode } from "react";
import ReactDOM from 'react-dom';
import App from './App'

// ReactDOM.render(<h1>My React App</h1>, document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'))

// StrictMode
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  
)