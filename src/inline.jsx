import React, { Component } from 'react'

class Inline extends Component {
  render() {
    return (
      <div>
          <h1>inline css demo</h1>
          <h2 style={{backgroundColor:"red",position:"absolute",top:"120px",height:"40px",width:"80px",fontFamily:"monospace",fontSize:"30px"}}>red</h2>
      </div>
    )
  }
}

export default Inline