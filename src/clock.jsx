import React, { Component } from 'react'

class Clock extends Component {
    constructor(){
        super();
        this.state=
        {
            t: new Date()
        }
  
    }

  render() {
   const update=()=>{
        this.setState({t: new Date()})
     }
    setInterval(update, 1000);
    return (
      <div>
        <h1>{this.state.t.getHours()}:{this.state.t.getMinutes()}:{this.state.t.getSeconds()}</h1>
       
      </div>
    )
  }
}

export default Clock
