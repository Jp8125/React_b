import React, { Component } from 'react'
import Child from './child';
export class Parent extends Component {
    constructor(){
        super();
        this.state={val:1};
      
        
    }
    cli=()=>{
      this.setState({val:this.state.val+1})
    }
  render() {
    return (
      <div>
       <h2>conter:{this.state.val}</h2> 
        <button onClick={this.cli}>click </button>
        <Child vl={this.state.val}></Child>
      </div>
    )
  }
}

export default  Parent
