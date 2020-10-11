import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

// function App() {
//   return (
//     <div>
        // <Authentication>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log("working")
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

render() {
  let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
  let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
  return (
    <div>
      <button onClick={this.handleClick}>{buttonText}</button>
  <h1>{displayText}</h1>
    </div>
  )
}
}

export default App;
