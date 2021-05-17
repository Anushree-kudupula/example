import React, {Component} from 'react'
import './App.css'
import PressCount from './components/PressCount'
import HoverCount from './components/HoverCount'

class App extends Component {
  render() {
    return(
      <div className="App">
        <PressCount name="Anu" />
        <HoverCount></HoverCount>
        </div>
    )
  }
}

export default App