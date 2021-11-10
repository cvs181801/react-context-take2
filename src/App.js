
import './App.css';
import React from 'react'
import Header from './components/Header'
import { Usercontextconsumer } from './Usercontext';

class App extends React.Component {
  state = {
    newUsername: ""
  }

handleChange = (event) => {
  this.setState({newUsername: event.target.value})
}

handleSubmit = () => {
  console.log("submitted")
}

  render() {
      return (
        <div className="App">
          
          <Header/>
          <Usercontextconsumer>
          <form
            name="form"
            onSubmit={this.handleSubmit}
          >
          <input
                type="text"
                name="username"
                placeholder="New username"
                value={this.state.value}
                onChange={this.handleChange}
            />
            <button
              action="submit"
            >
            Change Username</button>
            </form>
            </Usercontextconsumer>
            <p>{this.state.newUsername}</p>
           
          
        </div>
      )
  }

  
}

export default App;
