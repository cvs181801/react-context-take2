
import './App.css';
import React from 'react'
import Header from './components/Header'
import { Usercontextconsumer } from './Usercontext';

class App extends React.Component {
  state = {
    newUsername: ""
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]:value})

  }

  render() {
      return (
        <div className="App">
          
          <Header/>
          <input
                type="text"
                name="username"
                placeholder="New username"
                value={this.state.newUsername}
                onChange={this.handleChange}
            />
            <p>{this.state.newUsername}</p>
           
          
        </div>
      )
  }

  
}

export default App;
