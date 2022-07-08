import React, { Component } from 'react'

 class CompoB extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.f1}>increment</button>
      </div>
    )
  }
}

export default CompoB
