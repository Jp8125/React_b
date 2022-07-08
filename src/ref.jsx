import React, { Component } from 'react'

 class Ref extends Component {
  constructor(){
    super();
    this.ipRef=React.createRef();
  }
  edVal=()=>{
    console.log(this.ipRef)
            this.ipRef.current.focus()   }
  render() {
    
     
    return (
      <div>
        <h1>ref demo</h1>
        <input ref={this.ipRef} type={Text} name="user"/>
        <br/>
        <button onClick={this.edVal}>clickto focus on box</button>
      
      </div>
    )
  }
}

export default Ref
