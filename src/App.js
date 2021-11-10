
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

  render() {
      return (
        <div className="App">
          
          <Header/>
          <Usercontextconsumer>
            {({username, changeUsername}) => (
              
          <main>
            {console.log(username)}
          <input
                type="text"
                name="username"
                placeholder="New username"
                value={this.state.value}
                onChange={this.handleChange}
            />
            <button
              onClick={()=> changeUsername(this.state.newUsername)}
            >
            Change Username</button>
            </main>
            )}
            </Usercontextconsumer>
            <p>{this.state.newUsername}</p>
           
          
        </div>
      )
  }

  
}

export default App;
