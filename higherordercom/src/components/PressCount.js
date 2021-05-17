import React, {Component} from 'react'
import hoc from './hoc'

class PressCount extends Component {

    render() {
     const { count,incrementCount} = this.props
     return(
     <button onClick={incrementCount}>
         {this.props.name} Pressed the key {count} times 
         </button>
     )
    }
}

export default hoc(PressCount)