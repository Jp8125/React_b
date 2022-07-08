import React, { Component } from 'react'

 class Cycle extends Component {
    constructor(){
        super();
        this.state={
            val:0
        };
        console.log("----constuctor-----");
    }
    componentDidMount(){
        console.log("----componantDidmount()invloked----");

    }
    shouldComponentUpdate(){
        console.log("----shouldComponentUpdate()invoked----");
        return true;
    }
    componentDidUpdate(){
        console.log("----componentDidUpdate()invoked----");

    }
  render() {
    console.log("----rendering-----");
    return (
      <div>
        mounting of componant
        <button onClick={()=>{this.setState({val:this.state.val+1})}}>click</button>
        <h3>{this.state.val}</h3>
        
      </div>
    )
  }
}

export default Cycle
