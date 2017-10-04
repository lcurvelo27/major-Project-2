import React, { Component } from 'react';
import './App.css';
import router from './router';


class App extends Component {
  render() {
    return(
      <div>        
        <div className='center'>
          { router }
        </div>
      </div>
    )
  }
}

export default App;
