
import './App.css';
import React from 'react'
import Header from './components/Header'
import { Usercontextconsumer } from './Usercontext';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          
          <Header/>
          
        </div>
      );
  }

  
}

export default App;
